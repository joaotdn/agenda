exports.paginaInicial = (req, res) => {
    res.render('index', {
        title: 'Título da página',
        numbers: [0, 1, 2, 3]
    });
    return;
};