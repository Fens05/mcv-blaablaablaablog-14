const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require('../../utils/auth');
//grabing post from body... 


router.get('/', withAuth, (req, res) => {
  const body = req.body;
  Post.create({
    ...body, userId: req.session.userId
    
  })
    .then(postInput => res.json(postInput))
    .catch(err => {
      console.log(err);
      res.json(500).json(err);
    });
});



module.exports = router;