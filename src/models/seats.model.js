const mongoose = require("mongoose");

const seatsSchema = new mongoose.Schema({

    shows_id: { type: mongoose.Schema.Types.ObjectId, ref: "shows", required: true },


},
    {
        varsionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("seat", seatsSchema)