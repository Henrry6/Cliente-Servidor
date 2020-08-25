const express = require('express')

let exportando = express.Router()

    fibo = require('./codefibo.js')

exportando.post('/fibo',fibo.calculoFibo)

module.exports = exportando;




// var express = require('express');
// var router = express.Router();


// router.post( '/fibo', (req,res) => {
// var primerElemento = req.body.valor1;
// var segundoElemento = req.body.valor2;
// var maximoValorSerie = req.body.valormax;

// var resultado = primerElemento + segundoElemento + maximoValorSerie;

// res.send(resultado)
// })

// module.exports = router;