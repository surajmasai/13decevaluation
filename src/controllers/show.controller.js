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
    try {

        let shows;
        const movie_id = req.query.movie_id;

        if (movie_id) {
            shows = await Show.find({ 'movie_id': movie_id });
        } else {
            shows = await Show.find().lean().exec();
        }

        // .populate("movie_id").lean().exec()

        res.send({ shows })

    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }


})

router.get("/nearest", async (req, res) => {
    try {

        const show = await Show.find({ movie: { $eq: "hello" } }).lean().exec()

        return res.status(200).send({ show })

    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });

    }
})

module.exports = router;