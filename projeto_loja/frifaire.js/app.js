const express = require('express');

const app = express();

const mysql = require('mysql2');

const {engine} = require('express-handlebars');
app.engine('handlebars', engine())
app.set('view engine', 'handlebars');
app.set('views', './views');

const conexao = mysql.createConnection({    
    host: 'localhost',
    user: 'root',
    password: 12345678,
    database: 'prejeto_SW1'
});
 
conexao.connect(function(err) {
    if(err) {throw err;
    console.log('Conexão com o banco de dados realizada com sucesso!');}
 });

app.get ('/', function (req, res) {
    res.write('Bem-vindo ao Projeto SW1!');
    res.end();
});

app.listen(8080);