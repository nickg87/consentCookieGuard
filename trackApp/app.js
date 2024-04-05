const express = require('express');
const app = express();

// Route to handle requests for the pixel image
app.get('/pixel.png', (req, res) => {
    // Log request information
    console.log('Request received:', req.ip, req.headers['user-agent'], req.get('Referrer'));

    // Respond with the pixel image
    res.sendFile('pixel.png', { root: __dirname });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
