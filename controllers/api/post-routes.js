
const router = require("express").Router();
const { Post, User, Comment} = require("../../models");

router.get('/', (req, res) => {
  Post.findAll({
    attributes:['id','title', 'created_at'],
    include:{
      model: User,
      attributes:['username']
    }
  })
    .then(postInfo => res.json(postInfo))
    .catch(err => {
      console.log(err);
      res.json(500).json(err);
    });
});



module.exports = router;