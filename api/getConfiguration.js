// api/getConfiguration.js
const handler = (req, res) => {
    try {
        // Your bot token (hidden on the server side)
        const botToken = process.env.BOT_TOKEN;

        // Your chat ID (replace this with your actual chat ID)
        const chatId = '-1001353709350';

        // Provide configuration to the client side
        return res.status(200).json({ botToken, chatId });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = handler;
