const newsRouter = require('./news');
const siteRouter = require('./site');

const route = (app) => {
    // call router news
    app.use('/news', newsRouter);

    // call router home
    app.use('/', siteRouter)

    // call router search
    app.use('/search', siteRouter);
};

module.exports = route;
