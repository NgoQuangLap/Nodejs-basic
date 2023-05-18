const newsRouter = require('./news');
const courseRouter = require('./courses');
const siteRouter = require('./site');
const meRouter = require('./me');

const route = (app) => {
    // call router news
    app.use('/news', newsRouter);

    // call router search
    app.use('/search', siteRouter);

    // call router course
    app.use('/courses', courseRouter);

    // call router me
    app.use('/me', meRouter);

    // call router home
    app.use('/', siteRouter)
};

module.exports = route;
