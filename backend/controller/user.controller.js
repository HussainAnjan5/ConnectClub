const User = require("../models/user.models");
exports.register = async (req, res) => {
  try {
    const { email, username, password, confirmPassword } = req.body;

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if user with the same email or ID already exists
    const existingUser = await User.findOne({ $or: [{ email }] });
    if (existingUser) {
      return res.status(400).json({ message: "User with this email or ID already exists" });
    }

    // Create new user
    const user = await User.create({ email, username, password, confirmPassword });

    res.json({ message: "User registered successfully", status: 200, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Check if password matches
    if (user.password !== password) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    // Authentication successful
    res.json({ message: "Login successful", status: 200, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
// user.controller.js

const Profile = require('../models/profile.models');

exports.createProfile = async (req, res) => {
    try {
        const { name, age, job, city } = req.body;
        const profile = new Profile({ name, age, job, city });
        await profile.save();
        res.status(201).json({ message: 'Profile created successfully', profile });
    } catch (error) {
        console.error('Error creating profile:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const Created = require('../models/message.models');

exports.createMessage = async (req, res) => {
  try {
      const { name, content} = req.body;
      const created = new Created({ name, content });
      await created.save();
      res.status(201).json({ message: 'Message created successfully', created });
  } catch (error) {
      console.error('Error creating Message:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
};// In your backend's routes file (e.g., message.routes.js)

const Message = require('../models/message.models');

exports.getMessages = async (req, res) => {
  try {
      const messages = await Message.find();
      res.status(200).json(messages);
  } catch (error) {
      console.error('Error fetching messages:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
};


