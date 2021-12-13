const mongoose = require("mongoose");

const screenSchema = new mongoose.Schema({

    name: { type: String, required: true },
    // location: { type: String, required: true }
    theater_id: { type: mongoose.Schema.Types.ObjectId, ref: "theaters", required: true }

},
    {
        varsionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("screen", screenSchema)