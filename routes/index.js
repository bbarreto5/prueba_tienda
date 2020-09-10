var express = require('express');
var router = express.Router();
const { productos, pedidos } = require('../api/bodega.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login/login', { title: 'Express' });
});

router.get('/bodega', async function(req, res, next) {
  const { email, name} = req.session;
  if(email != undefined){
    let auxProductos = await productos();
    res.render('bodega/bodega', { 
      nombre: name,
      productos: auxProductos
    });
  }else{
    res.redirect('/');
  }
});

router.get('/pedido', async function(req, res, next) {

  const { email, name, idCliente} = req.session;
  if(email != undefined){
    res.render('pedido/pedido', { 
      nombre: name,
      pedidos: await pedidos(idCliente),
    });
  }else{
    res.redirect('/');
  }
});

router.get('/estadistica', function(req, res, next) {
  res.render('estadistica/estadistica', { 
    title: 'Express',
    nombre: 'brandon barreto'
  });
});

module.exports = router;
