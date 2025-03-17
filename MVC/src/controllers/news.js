//exporta a função index, deixando disponivel para ser usada em outras partes o projeto

module.exports.index = function(application, req, res){


    //cria uma instancia de modulo news que será usado para acessar os dados da noticia

    const newsModel = new application.src.models.news();

    //chama o metodo getlastnews do modulo news model para buscar as ultimas noticias, esse próximo método recebe a função de callback que será executada após a consulta ser concluida
    
    newsModel.getLastNews(function(err, result){

        if (err){
            res.status(500).send("Erro ao buscar noticias");
            return;
        }

        //se a consulta der certo, o result terás as noticias recuperadas do 'banco de dados', o metodo res.render é utilizado para renderizar a views - news/index e passa as noticias obtidas nos results para a view, onde será exibida para o usuário
        res.render("news/index", {noticias: result});
    });


}