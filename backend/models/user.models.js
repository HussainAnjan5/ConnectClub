const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: { type: String, default: "" },
    password: { type: String, default: "" },
    confirmPassword: { type: String, default: "" }, // Added confirm password field
    email: { type: String, default: "" },
});

module.exports = mongoose.model("user", userSchema);
