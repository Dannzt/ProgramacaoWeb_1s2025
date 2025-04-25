//npm init
//npm install express@4.21.2 para iniciar

// no html : npm install mustache-express@1.3.2

const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/ola/:nome' , (req, res)=>{
    let nome = req.params.nome
    res.render('index.html',{nome});
});

const PORT = 8080;
app.listen(PORT,()=>{
    console.log("App rodando na porta " + PORT);
});