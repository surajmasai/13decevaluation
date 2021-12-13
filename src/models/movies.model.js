const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({

    name: { type: String, required: true },
    actors: [{ type: String, required: true }],
    language: [{ type: String, required: true }],
    directors: [{ type: String, required: true }],
    poster_urls: [{ type: String, required: true }],
    // user_id: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true }

},
    {
        varsionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("movie", movieSchema)