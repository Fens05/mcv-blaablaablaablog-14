const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 3002;
const sequelize = require('./config/connection');
const hbs = exphbs.create({});




const routes = require('./controllers');

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('public, express.static(_dirname +"/public');
app.egning(('handelbars'));
app.use(require('./controllers'));
app.use(app.router);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});