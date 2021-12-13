// const path = require("path");

const express = require('express');

const fs = require('fs');

const Movie = require("../models/movies.model");

const upload = require("../middleware/upload");


const { Mongoose } = require('mongoose');

const router = express.Router();

router.post("/", upload.single("poster_urls"), async (req, res) => {
    try {
        const movie = await Movie.create({
            name: req.body.name,
            actors: req.body.actors,
            language: req.body.language,
            directors: req.body.directors,
            poster_urls: req.file.path,
        });

        return res.status(201).json({ movie });

    }
    catch (e) {

        return res.status(500).json({ status: "failed", message: e.message });
    }
});

router.get("/movies", async (req, res) => {

    const movie = await Movie.find({ actor: { $eq: "shayam" } }).lean().exec();


    res.send({ movie });

})

module.exports = router;