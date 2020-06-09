const { Router } = require('express');
const router = Router();

// routes
router.get('/hello-world ', (req, res) => {
    /* hello world json format   */
    res.json({ "title": "hello world" });
});

router.get('/test', (req, res) => {
    const data = {
        "name": "Hugo",
        "website": "hugomoraga.ml"
    };
    res.json(data);
});

module.exports = router;