const express =require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();
const PORT = preocess.env.PORT || 3002;
const sequelize = requir('./config/connection');
const hbs = exphbs.create({});

const routes = require('./controllers');

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(expess.urlencoded({ extended: false}));
app.use(express.static(paht.join(__dirname, 'public')));

app.use(require('./controllers'));


