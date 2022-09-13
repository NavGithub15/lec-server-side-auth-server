const express = require('express');
const knex = require('knex')(require("../knexfile"));
const router = express.Router();

router.get("/", (req, res) => {
    knex("post")
        .join("user", "user.id", "=", "post.user_id")
        .then(postData => {
            res.json(postData);
        })
        .catch(error => {
            res.status(500).json({error});
        })
});

module.exports = router;