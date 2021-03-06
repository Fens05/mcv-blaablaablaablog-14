const router = require('express').Router();
const { User, Post, Comment } = require('../../models');


// GET All User data with blogposts and comments testing
// router.get('/', async (req, res) => {
//     try {
//         const userData = await User.findAll({
//             include: [
//                 {
//                     model: Post

//                 },
//                 { model: Comment }
//             ]
//         });

//         res.json(userData);

//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// Create new user
router.post('/', (req, res) => {
    // try {
         User.create({username: req.body.username, password: req.body.password})
        .then(data => {

            req.session.save(() => {
                req.session.userId = data.id;
                req.session.loggedIn = true;
                req.session.username = data.id;
    
                res.status(200).json(data);
            })

        })
        
        
    
        .catch(err => {
            console.log(err);
            res.status(404).json(err);
        });
       
    }
);

// Validate and then login
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { username: req.body.username } });

        if (!userData) {
            res.status(400).json({ message: 'Incorrect email or password, please try again' });

            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect email or password, please try again' });

            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            req.session.username = userData.id;
            res.json({
                user: userData,
                message: 'You are now logged in!'
            });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

// Logout the user
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

// Export
module.exports = router;