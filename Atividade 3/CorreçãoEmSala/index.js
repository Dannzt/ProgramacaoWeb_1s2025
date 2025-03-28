const express = require ('express');
const calculadora  = require ('./calculadora');
const app = express();

app.get('/',(req, res)=>{
    let html = '<h1> app_calculadora </h1> !';
    html += '<h3> Rotas disponiveis </h3>';
    html += '<p>/soma:a/:b (<a href="/somar/2/3</a> </p>';
    html += '<p>/subtrair:a/:b (<a href="/somar/2/3</a> </p>';
    html += '<p>/Multiplicar:a/:b (<a href="/somar/2/3</a> </p>';
    html += '<p>/Dividir:a/:b (<a href="/somar/2/3</a> </p>';
    res.send(html);
})

app.get('/somar/:a/:b', (req, res) => {
    let a = req.params.a;
    let b = req.params.b;
    let resultado = calc.somar(a,b);

    /*
    if(resultado.insNaN()){
        res.send ('Digite um numero inteiro para calcular')
    else{
        res.send(`${a} + ${b} = ${calc.somar(a, b)}`);
        }
    }
    */
    res.send(`${a} + ${b} = ${calc.somar(a, b)}`);
});

app.get('/subtrair/:a/:b', (req, res) => {
    let a = req.params.a;
    let b = req.params.b;
    let resultado = calc.somar(a,b);

    res.send(`${a} - ${b} = ${calc.somar(a, b)}`);
});

app.get('/multiplicar/:a/:b', (req, res) => {
    let a = req.params.a;
    let b = req.params.b;
    let resultado = calc.somar(a,b);

    res.send(`${a} * ${b} = ${calc.somar(a, b)}`);
});

app.get('/dividir/:a/:b', (req, res) => {
    let a = req.params.a;
    let b = req.params.b;
    let resultado = calc.somar(a,b);

    res.send(`${a} / ${b} = ${calc.somar(a, b)}`);
});



const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta'+ port);
});