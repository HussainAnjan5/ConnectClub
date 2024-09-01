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
};

