const express = require('express');
const router = express.Router();

// All Authors
router.get('/', function(req, res) {
    res.render("authors/index");
});
// New Authors
router.get('/new', function(req, res) {
    res.render("authors/new");
});
// Creating new Authors.
router.post('/new', function(req, res) {
    res.send("Created");
});


module.exports = router;
