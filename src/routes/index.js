const { Router } = require('express');
const router = Router();
const { getUsers, createUser, getUserById, deleteUser, updateUser } = require('../controllers/index.controller');

// routes
router.get('/hello-world ', (req, res) => {
    /* hello world json format   */
    res.json({ "title": "hello world" });
});



router.get('/users', getUsers);
router.post('/users', createUser);
router.get('/users/:id', getUserById);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser);

module.exports = router;