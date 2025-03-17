module.exports = function(app) {
    const newsController = app.src.controllers.news; // importa o controller de notícias

    // rota para listar as últimas notícias
    app.get('/', (req, res) => {
        newsController.index(app, req, res);
    });

};