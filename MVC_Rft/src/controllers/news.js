// exporta a função index, deixando disponível para ser usada em outras partes do projeto
module.exports.index = function(application, req, res) {

    // importa corretamente a instância do NewsModel
    const newsModel = require("../models/news"); // agora está correto

    // chama o método getLastNews do modelo NewsModel para buscar as últimas notícias
    newsModel.getLastNews(function(err, result) {
        if (err) {
            res.status(500).send("Erro ao buscar notícias");
            return;
        }

        // se a consulta der certo, renderiza a view 'news/index' e passa as notícias obtidas
        res.render("news/index", { noticias: result });
    });
};
