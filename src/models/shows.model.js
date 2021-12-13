const mongoose = require("mongoose");

const showsSchema = new mongoose.Schema({

    timing: { type: String, required: true },
    movie_id: { type: mongoose.Schema.Types.ObjectId, ref: "movie", required: true },
    total_seats: { type: Number, required: true },
    screen_id: { type: mongoose.Schema.Types.ObjectId, ref: "screen", required: true },

},
    {
        varsionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("shows", showsSchema)