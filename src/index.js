const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override')

const app = express();
const port = 3000;

// connect to db
const db = require('./config/db')
db.connect();

// Use route
const route = require('./routes');

// Setup file static, ex: img, ...
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
// app.use(morgan('combined'));

// Use middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// use override method
app.use(methodOverride('_method'));

//Temple engine
app.engine(
    'hbs',
    handlebars.engine({
        // config dot file name
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Router init
route(app);

app.listen(port, () => {
  console.log(`App education listening on port ${port}`);
})
