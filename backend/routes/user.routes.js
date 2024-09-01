// user.routes.js
const express = require("express");
const router = express.Router();
const controller = require("../controller/user.controller");

router.post("/MOO755729/register", controller.register);
router.post("/MOO755729/login", controller.login);
router.post("/MOO755729/createProfile", controller.createProfile);
router.post("/MOO755729/createMessage", controller.createMessage); // Add route for creating messages
router.get("/MOO755729/getMessages", controller.getMessages); // Add route for fetching messages

module.exports = router;
