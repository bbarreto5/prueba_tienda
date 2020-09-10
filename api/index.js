const { login } = require('./login.js');
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



/* GET home page. */
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
        req.session.save();
        res.status(400).json({
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

module.exports = router;