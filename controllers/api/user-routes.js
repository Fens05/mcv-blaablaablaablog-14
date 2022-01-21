const router = require('express').Router();
const {User, Post, Comment } = require('../../models');

//getting users
router.get('/', (req, res) => {
    User.findAll({
        attributes: {exclued: ['password'] }

    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    User.findOne ({
        attribures: { exlude: ['password']
    },
    where: {
        Id: req.params.id[
            {
                model: Post,
                attributes: ['id', 'comment_text']
            }
        ]

        
    }
    })
})