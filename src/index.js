const express = require('express');
const app = express();
const port = 3000; //variavel de ambiente
const users = require('../users')

const path = require("path");

const checkAuth = function(req, res, next){
    req.authStatus = true;
    if(req.authStatus){
        console.log("Está logado, continue")
    }else{
        console.log("Não está logado, faça login!")
    }
    next()
}

//ler o body
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(checkAuth)

//arquivos estáticos
app.use(express.static('public'))

const basePath = path.join(__dirname, '../templates');

app.use('/users', users);

app.get('/', function (req, res) {
    res.sendFile(`${basePath}/index.html`);
});

app.use((req, res, next)=>{
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, function () {
    console.log("App rodando na porta ".concat(port));
});
