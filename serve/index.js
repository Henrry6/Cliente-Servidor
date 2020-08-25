'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
var cors = require('cors')
var rutas = require('./fibo.js')
// expoFibo = require('./codefibo')


const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors())

var corsOptions = {
    origin: 'http://127.0.0.1:5500/',
    optionsSuccessStatus: 200 
}


app.use( '' , rutas)
// app.post('/fibo', function (req,res) {
//     var data1 =req.body.valor1
// var data2= req.body.valor2
//     let valoresSuma = data1 + data2
//     res.json(valoresSuma)
//     // res.send(suma);
// });
    
app.get('/fibo', function (req,res) {
    res.send('hola');
});

app.get('/', (req,res) => {
    res.send('Pagina principal')
})
app.listen( 8081, () => {
    console.log('Welcom http://localhost:' + 8081)
})


