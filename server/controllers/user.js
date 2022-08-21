const router = require('express').Router();
const userService = require('../services/userService');


router.post('/register', async(req, res, next) => {
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // res.header('Access-Control-Allow-Credentials', true);
    let { email, password, role } = req.body;

    try {
        console.log('test1');
        let user = await userService.register({ email, password, role });
        let { accessToken, refreshToken } = await userService.login({ email, password });
        res.json({ user, accessToken });
        res.end();
    } catch (error) {
        next(error)
    }
});

router.get('/users/profile/:id', async(req, res) => {
    const userId = req.params.id
    const userData = await userService.getUser(userId);
    res.json({ userData });
})

router.post('/login', async(req, res) => {
    try {
        let { email, password } = req.body;

        let { user, accessToken, refreshToken } = await userService.login({ email, password });

        res.json({ user, accessToken });
        res.end();
    } catch (error) {
        res.status(400)
        res.json({"err":"We can't find this user. Try again!"});
    }
});


// router.get('/logout', (req, res) => {
//     res.json({ ok: true });
// });

// router.post('/refresh', async(req, res) => {
//     console.log(req.body);
//     let refreshToken = req.body.refreshToken;

//     let { accessToken, refreshToken: newRefreshToken } = await userService.refresh(refreshToken);

//     res.json({
//         accessToken,
//         refreshToken: newRefreshToken,
//     });
// });

module.exports = router;