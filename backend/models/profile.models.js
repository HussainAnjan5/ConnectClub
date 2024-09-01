const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: { type: String, default: "" },
    age: { type: String, default: "" },
    job: { type: String, default: "" }, 
    city: { type: String, default: "" }
});

module.exports = mongoose.model("createProfile", userSchema);
