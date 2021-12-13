const express = require("express");

const { mongoose } = require("mongoose");

const Seats = require("../models/seats.model");

const router = express.Router();


router.post("/", async (req, res) => {

    try {

        const seats = await Seats.create({

            shows_id: req.body.shows_id,


        })

        return res.status(201).json({ seats });

    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
})

module.exports = router;