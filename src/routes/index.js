const { Router } = require('express');
const router = Router();
const { getUsers } = require('../controllers/index.controller');

// routes
router.get('/hello-world ', (req, res) => {
    /* hello world json format   */
    res.json({ "title": "hello world" });
});



router.get('/users', getUsers);

module.exports = router;