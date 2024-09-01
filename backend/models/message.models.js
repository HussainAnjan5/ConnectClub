const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: { type: String, default: "" },
    content: { type: String, default: "" } 
});

module.exports = mongoose.model("createMessage", userSchema);
