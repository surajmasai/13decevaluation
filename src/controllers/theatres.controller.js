const express = require("express");

const { mongoose } = require("mongoose");

const Theaters = require("../models/theatres.model");

const router = express.Router();

router.post("/", async (req, res) => {

    try {

        const theatres = await Theaters.create({
            name: req.body.name,
            location: req.body.location
        })

        return res.status(201).json({ theatres });

    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }


})

module.exports = router