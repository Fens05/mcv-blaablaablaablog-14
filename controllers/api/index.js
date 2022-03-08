const router = require("express").Router();
const commentRoute = require("./comment-routes");
const postRoute = require("./post-routes");
const userRoute = require("./user-routes");


router.use("/comment", commentRoute);
router.use("/post", postRoute);
router.use("/user", userRoute);


module.exports = router;