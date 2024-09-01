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
