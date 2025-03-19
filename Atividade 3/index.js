const express = require('express');
const calculadora = require('./calculadora');
const { Console } = require('console');

const app = express();

app.get('/somar/:n1/:n2', function(req, res){
    let a = parseFloat(req.params.n1)
    let b = parseFloat(req.params.n2)
    let resul = calculadora.soma(n1, n2);
    res.send(`A soma entre ${a} e ${b} é: ${resul}`);
})

app.get('/subtrair/:n1/:n2', function(req, res){
    let a = parseFloat(req.params.n1)
    let b = parseFloat(req.params.n2)
    let resul = calculadora.subtrair(n1, n2);
    res.send(`A soma entre ${a} e ${b} é: ${resul}`);
})

app.get('/multiplicar/:n1/:n2', function(req, res){
    let a = parseFloat(req.params.n1)
    let b = parseFloat(req.params.n2)
    let resul = calculadora.multiplicar(n1, n2);
    res.send(`A soma entre ${a} e ${b} é: ${resul}`);
})

app.get('/dividir/:n1/:n2', function(req, res){
    let a = parseFloat(req.params.n1)
    let b = parseFloat(req.params.n2)
    let resul = calculadora.dividir(n1, n2);
    res.send(`A soma entre ${a} e ${b} é: ${resul}`);
})


const PORT = 8080;
app.listen(PORT,()=>{console.log('app rodando na porta ' + PORT);
});

