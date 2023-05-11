const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const app = express();
const port = 3000;

// Use route
const route = require('./routes')

// Setup file static, ex: img, ...
app.use(express.static(path.join(__dirname, 'public')))

// HTTP logger
// app.use(morgan('combined'));

// Use middleware
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());

//Temple engine
app.engine('hbs', handlebars.engine({
  // config dot file name
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Router init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})