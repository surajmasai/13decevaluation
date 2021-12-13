const express = require("express");

const { mongoose } = require("mongoose");

const Show = require("../models/shows.model");

const router = express.Router();


router.post("/", async (req, res) => {

    try {

        const show = await Show.create({

            timing: req.body.timing,
            movie_id: req.body.movie_id,
            total_seats: req.body.total_seats,
            screen_id: req.body.screen_id,
        })

        return res.status(201).json({ show });

    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
})
router.get('/', async (req, res) => {



})

module.exports = router;