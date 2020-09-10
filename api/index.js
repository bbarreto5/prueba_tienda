const { login } = require('./login.js');
const { crearPedido } = require('./bodega.js');
var express = require('express');
var router = express.Router();


function validatePass(pass) {
  const re = /^\d+$/;
  return re.test(pass);
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

router.post('/login', async function(req, res, next) {
  let { email, pass } = req.body;
  try {
   if(validateEmail(email) && validatePass(pass)){
      let aux = await login(email,pass);
      if( aux == null || aux == undefined){
        res.status(400).json({
          success: false
        })
      }else{
        req.session.email = email;
        req.session.name = aux[0].nombre+" "+aux[0].apellido;
        req.session.idCliente = aux[0].id;
        req.session.save();
        res.status(200).json({
          success: true
        })
      }
   }else{
     res.status(400).send("bad request")
   } 
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
});

router.post('/comprar', async function(req, res, next) {
  let { carrito } = req.body
  let { idCliente } = req.session
  console.log(carrito,idCliente)
  try {
    let pedido = await crearPedido(idCliente,carrito);
    (pedido)
    ? res.status(200).json({ success: true })
    : res.status(200).json({ success: false })
  } catch (error) {
    res.status(500).json({ success: true })
  }
});

module.exports = router;