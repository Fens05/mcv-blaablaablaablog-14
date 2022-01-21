const Sequelize = require('sequelize');
console.log(Sequelize)

require('dotenv').config();


new Sequelize(process.env.JAWSDB_URL)
new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3302
    });



module.exports = sequelize;
