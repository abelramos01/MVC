//importa o módulo 'express' , que ´um framework web para o node.js

var express = require('express');

//importa o módulo 'consign' quer é usado para autoload (autocarregamento) de scripts, facilitando o gerenciamento de rotas, models e controllers

var consign = require('consign');

// Importa o módulo 'path' para manipulação de caminhos de arquivos
var path = require('path');

//criar uma instancia do express

var app = express();



//configura a engine de visualização como 'ejs' para renderizar arquivos .ejs

app.set('view engine', 'ejs');

//define o diretório onde estão localizados as views (templates.ejs)

app.set('views', './src/views');

// Configura o Express para servir arquivos estáticos (CSS, JS, imagens, etc.) da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

//configure o 'consign' para incluir automaticamente as rotas, models, e controllers na aplicação 

consign()

     .then('src/models')//inclui os models, carregando os arquivos da pasta 'src/models'
     .then('src/controllers') //inclui os controller, carregando os arquivos da pasta 'src/controllers'
     .include('src/routes')//inclui as rotas, carregando os arquivos  da pasta 'src/routes'
     .into(app); //injeta essas dependencias na instancia do express(app)


module.exports = app; //exportando o app