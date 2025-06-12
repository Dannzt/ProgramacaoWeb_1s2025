// npm init 
// Node.js: npm install express@4.21.2    
// mustache : npm install mustache-express@1.3.2

const express = require  ('express')
const mustacheExpress = require('mustache-express')
const app = express();

const PORT = 8080
app.listen(PORT,function (){
    console.log("app rodando na porta " + PORT );
});

app.engine('html', mustacheExpress());
app.set('view engine','html')
app.set('view',__dirname, 'views')


app.get('/',function (req, res){
    res.send('index.html')
})