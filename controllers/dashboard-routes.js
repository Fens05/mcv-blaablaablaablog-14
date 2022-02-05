const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Vote } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    console.log(reg.session);
    console.log('==========');
    Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: [
                'id',
                'post_url',
                'title',
                'created_at', [sequelize.literal('(SELECT COUNT(*) FROM vote Where post.id = vote.post_id)'), 'vote_count']

            ],
            include: [{
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributeds: ['suername']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('dashboard')
        })
})