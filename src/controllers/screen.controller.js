const express = require("express");

const { mongoose } = require("mongoose");

const Screen = require("../models/screen.models");

const router = express.Router();


router.post("/", async (req, res) => {

    try {

        const screen = await Screen.create({

            name: req.body.name,
            theater_id: req.body.theater_id,
        })

        return res.status(201).json({ screen });

    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
})

module.exports = router;