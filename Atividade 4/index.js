//para inicializar, usa os comandos no cmd (identifica a pasta correta, depois "npm init" e depois "npm install express@4.21.2" para ativar o node) //testa em casa

const express = require('express');
const estoque = require('./estoque')
const app = express();

app.get('/',(req,res)=>{
    let html = '<h1> Loja de camisas doFLAMENGO </h1>'
    html += '<h3>rotas disponiveis</h3>'
    html += '<p>/adicionar/:id/:nome/:qtd</p>'
    html += '<p>/listar</p>'
    html += '<p>/remover/:id</p>'
    html += '<p>/editar/:id/:qtd</p>'
    res.send(html)
})

// /adicionar/:id/:nome/:qtd
app.get('/adicionar/:id/:nome/:qtd', (req, res)=>{
    const id   = Number(req.params.id);
    const nome = req.params.nome;
    const qtd  = Number(req.params.qtd);

    const item = {
        id: id,
        nome: nome,
        qtd: qtd
    }

    res.send(estoque.adicionar(item));
});

// /listar
app.get('/listar', (req, res)=>{
   res.send(estoque.listar());
});

// /remover/:id
app.get('/remover/:id', (req, res)=>{

});

// /editar/:id/:qtd
app.get('/editar/:id/:qtd', (req, res)=>{
   const id  = Number(req.params.id);
   const qtd = Number(req.params.qtd);
   
   res.send(estoque.editar(id, qtd));
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});
