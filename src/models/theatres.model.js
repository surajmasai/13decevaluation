const mongoose = require("mongoose");

const theatersSchema = new mongoose.Schema({

    name: { type: String, required: true },
    location: { type: String, required: true }
    // user_id: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true }

},
    {
        varsionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("theaters", theatersSchema)