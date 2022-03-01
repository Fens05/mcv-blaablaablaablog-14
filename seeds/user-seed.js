const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [{
        username: 'gamerzax',
        email: 'gamerzax@cbc.ca',
        password: 'password123',
    },
    {
        username: 'marybethsue',
        email: 'marybethsue@sogou.com',
        password: 'password123',
    },
    {
        username: 'gammmmme',
        email: 'gammmmme@last.fm',
        password: 'password123',
    },
    {
        username: 'oldschoolcool',
        email: 'oldschoolcool@goo.ne.jp',
        password: 'password123',
    },
    {
        username: 'zorkfan3',
        email: 'zorkfan3@weather.com',
        password: 'password123',
    },
    {
        username: 'wastelander24',
        email: 'wastelander24@imdb.com',
        password: 'password123',
    },
    {
        username: 'pegasusgaming',
        email: 'pegasusgaming@feedburner.com',
        password: 'password123',
    },
    {
        username: 'pennyslots',
        email: 'pennyslots@china.com.cn',
        password: 'password123',
    },
    {
        username: 'programergamer',
        email: 'programergamer@google.ru',
        password: 'password123',
    },
    {
        username: 'jenny',
        email: 'jenny@epa.gov',
        password: 'password123',
    },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;