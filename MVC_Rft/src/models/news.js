// importa os dados do arquivo JSON de notícias
const noticiasData = require('../../data/noticias.json');

// armazena as notícias carregadas do JSON em um array
const noticias = noticiasData.noticias || [];

// define a classe NewsModel para manipular os dados das notícias
class NewsModel {
    
    // retorna as 5 últimas notícias do array
    getLastNews(callback) {
        callback(null, noticias.slice(-5).reverse()); // obtém os últimos 5 elementos e os inverte para manter a ordem original
    }
}

// exporta uma instância da classe
module.exports = new NewsModel();
