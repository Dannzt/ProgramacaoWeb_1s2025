const express = require('express');
const calc = require('./calculadora');
const { Console } = require('console');

const app = express();

app.get('/', (req, res)=>{
    res.send('Olá, Mundo!');
});

app.get('/ola/dan', (req, res)=>{
    res.send('Olá, Dan!');
});

app.get('/ola/:nome', (req, res)=>{
    res.send(`Olá, ${req.params.nome}!`);
});


const PORT = 8080;
app.listen(PORT,()=>{console.log('app rodando na porta ' + PORT);
});

