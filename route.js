const router = require('express').Router();
const cookieHandler = require('./cookieHandler');

router.post('/cookie', (req, res)=> {
    cookieHandler.setCookies(res);
    return res.status(200).end();
});
router.get('/cookie', (req, res)=> {
    return res.json(req.cookies);
});

module.exports = router;