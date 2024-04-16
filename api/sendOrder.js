// api/sendOrder.js
const fetch = require('node-fetch');

const handler = async (req, res) => {
    try {
        // Retrieve location and other order details from the request body
        const { latitude, longitude, accuracy } = req.body;

        // Your bot token (hidden on the server side)
        const botToken = process.env.BOT_TOKEN;

        // Your chat ID (replace this with your actual chat ID)
        const chatId = '6741821286';

        // Construct the message to send to Telegram
        const message = `New order received:\nLatitude: ${latitude}\nLongitude: ${longitude}\nAccuracy: ${accuracy} meters`;

        // Send the message to Telegram
        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: chatId, text: message }),
        });

        // Check if the message was successfully sent
        if (response.ok) {
            return res.status(200).json({ success: true });
        } else {
            throw new Error('Failed to send order');
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = handler;
