const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: { type: String, default: "" },
    password: { type: String, default: "" },
});

module.exports = mongoose.model("login", userSchema);
