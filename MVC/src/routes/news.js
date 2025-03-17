module.exports = function(app) {
    const newsController = app.src.controllers.news; // Importa o controller de notícias

    // Rota para listar as últimas notícias
    app.get('/', (req, res) => {
        newsController.index(app, req, res);
    });

};