const express = require('express');
const router = express.Router();
const Author = require('../models/author');


// All Authors
router.get('/', async function (req, res) {
    const searchOptions = {};
    if (req.query.name != null && req.query.name !== '') {
        searchOptions.name = new RegExp(req.query.name, 'i');
        console.log(searchOptions);
    }
    try {
        const authors = await Author.find(searchOptions)
        res.render("authors/index", { authors: authors, searchOptions: searchOptions });
    } catch (error) {
        res.redirect("/");
    }
});
// New Authors
router.get('/new', function (req, res) {
    res.render("authors/new", { author: new Author() });
});
// Creating new Authors.
router.post('/', async function (req, res) {
    const author = new Author({ name: req.body.name });
    try {
        const response = await author.save();
        res.redirect("authors");
    } catch (e) {
        console.log("Error ", e)
        res.render("authors/new", { author: author, errorMessage: "ERROR CREATING AUTHOR" });
    }
});


module.exports = router;
