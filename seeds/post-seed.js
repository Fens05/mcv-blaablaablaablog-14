const { Post } = require('../models');

const postdata = [{
        title: 'I sure do love dosbox',
        contents: 'Donec posuere metus vitae ipsum.',
        user_id: 10,
    },
    {
        title: 'Old school games are cooler.',
        contents: 'https://nasa.gov/donec.json',
        user_id: 8,
    },
    {
        title: 'New SNES on the market, old school!.',
        contents: 'Donec posuere metus vitae ipsum',
        user_id: 1,
    },
    {
        title: 'Is n64 oldschool?',
        contents: 'lorem ipsum',
        user_id: 4,
    },
    {
        title: 'Hey look!~',
        contents: 'Pellentesque eget nunc.',
        user_id: 7,
    },
    {
        title: 'This is something that someone could post!',
        contents: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        user_id: 4,
    },
    {
        title: 'How many characters is too many.',
        contents: 'In hac habitasse platea dictumst',
        user_id: 1,
    },
    {
        title: 'New DOSBOX game on the market!',
        contents: 'Morbi non quam nec dui luctus rutrum.',
        user_id: 1,
    },
    {
        title: 'Whats the new DOSBOX?',
        contents: 'Duis ac nibh.',
        user_id: 9,
    },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;