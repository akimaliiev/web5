const express = require("express");
const router = express.Router();


router
    .route("/")
    .get((req, res) => res.render("teachers.ejs"))

module.exports = router;
