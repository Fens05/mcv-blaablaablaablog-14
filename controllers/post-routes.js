//model
const routher = require('express').Router();

const { User, Post, Comment } =require('../models');
const { post } = require('./api/post-routes');
const router = require('./api/post-routes');

router.get('./:id', async (req, res ) => {
    try {
        const posData = await post.findbyID(req.params.id, {
            include: [
                {
                    model: User,
                        attributes: ['username'] },
                { modle: Comment,
                    include: [
                        { model: User,
                            attributes: ['username']}

                    ]
                }
                
                
            ]
        });
        const post = postData.get9({ plian: true });
        res.reder( 'singlePost', {
            post,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;