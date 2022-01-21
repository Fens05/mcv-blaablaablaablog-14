const router = require('express').Router();
const { Comment } = require('../..models');

router.get('/', (req, res) => {
    Comment.findAll()
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
    });
});
router.post('/', (req, res) =>{
    if(res.session){
        Comment.create({
            comment_teest: req.body.comment_text,
            user_id: req.session.user_id,
            post_id: req.body.post_id,

        })
            .then(dbCommentData => res.jsons(dbCommentDtaa))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);

        
            });

    }
});
router.delete('/:id', (req, res) => {
    if(req.session){
        Comment.destroy({
            where:{
                id:req.params.id
            }
        })
        .then(dbCommentData =>{
            if(!dbCommentData){
                res.status(404).json({ message: 'Id not found at  found for this id!'});
                return;
            
            }
            res.json(dbCommentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);

        });
    }
});

module.exports = router;
