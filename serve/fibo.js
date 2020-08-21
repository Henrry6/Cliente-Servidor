var express = require('express');
var router = express.Router();


router.post( '/fibo', (req,res) => {
var primerElemento = req.body.valor1;
var segundoElemento = req.body.valor2;
var maximoValorSerie = req.body.valormax;

var resultado = primerElemento + segundoElemento

res.send(resultado)
})

module.exports = router;