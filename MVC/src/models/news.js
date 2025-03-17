

//exporta a função , deixando disponivel para ser usada em outras partes o projeto
module.exports = function() {

    //carregando dados do JSON
    let noticiasData = require('../../data/noticias.json');

    //colocando num array
    let noticias = noticiasData.noticias || [];

 
    //retornando as 5 ultimas noticias do array
    this.getLastNews = function(callback) {
        callback(null, noticias.slice(-5).reverse());
    };
    

    return this;
}