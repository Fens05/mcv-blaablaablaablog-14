
const router = require("express").Router();
const { Post, User, Comment} = require("../../models");

router.get('/', (req, res) => {
  Post.findAll({
    attributes:['title', 'created_at'],
    include:{
      model: User,
      attributes:['username']
    }
  })
    .then(postInput => res.json(postInput))
    .catch(err => {
      console.log(err);
      res.json(500).json(err);
    });
});



module.exports = router;