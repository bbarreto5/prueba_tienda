var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login/login', { title: 'Express' });
});

router.get('/bodega', function(req, res, next) {
  const { email, name} = req.session;
  if(email != undefined){
    res.render('bodega/bodega', { 
      title: 'Express',
      nombre: name
    });
  }else{
    res.redirect('/');
  }
});

router.get('/pedido', function(req, res, next) {
  res.render('pedido/pedido', { 
    title: 'Express',
    nombre: 'brandon barreto'
  });
});

router.get('/estadistica', function(req, res, next) {
  res.render('estadistica/estadistica', { 
    title: 'Express',
    nombre: 'brandon barreto'
  });
});

module.exports = router;
