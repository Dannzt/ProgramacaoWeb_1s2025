//npm init
//npm install express@4.21.2 para iniciar

// no html : npm install mustache-express@1.3.2
const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const erro_form = req.query.erro_form;
    res.render('index.html', { erro_form });
});

app.post('/dados', (req, res) => {
    const dados = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        cpf: req.body.cpf,
        telefone: req.body.telefone,
        nascimento: req.body.nascimento,
        cep: req.body.cep,
        endereco: req.body.endereco,
        clinica: req.body.clinica,
        especialidade: req.body.especialidade,
        data_agendamento: req.body.data_agendamento,
        hora: req.body.hora,
        observacao: req.body.observacao
    };

    const camposObrigatorios = [
        'nome', 'sobrenome', 'cpf', 'telefone', 'nascimento',
        'cep', 'endereco', 'clinica', 'especialidade', 'data_agendamento', 'hora'
    ];

    const erro_form = camposObrigatorios.some(campo => !dados[campo] || dados[campo].trim() === "");

    if (erro_form) {
        return res.redirect('/?erro_form=1');
    }

    res.render('dados.html', { dados });
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log('Servidor rodando na porta ' + PORT);
});
