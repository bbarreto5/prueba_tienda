var express = require('express');
var router = express.Router();
var login = require('./login.js')

function validatePass(pass) {
  const re = /^\d+$/;
  return re.test(pass);
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}



/* GET home page. */
router.post('/login', function(req, res, next) {
  let { email, pass } = req.body;
  try {
   if(validateEmail(email) && validatePass(pass)){
      req.session.email = email;
      req.session.save();
      res.status(200).send("ok")
   }else{
     res.status(400).send("bad request")
   } 
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
});

module.exports = router;