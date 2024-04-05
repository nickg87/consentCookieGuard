const express = require('express');
const app = express();
const path = require('path'); // Import path module for cleaner directory path handling

console.log(__dirname); // Log directory path here

// Logging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// **Middleware to serve static files:**
app.use(express.static(path.join(__dirname, 'public')));  // Serve static files from 'public' directory

// Route to handle requests for the pixel image (optional)
app.get('/pixel.png', (req, res) => {
    console.log(__dirname); // Log directory path here
    // Log request information
    console.log('Request received:', req.ip, req.headers['user-agent'], req.get('Referrer'));

    // Respond with the pixel image (you can keep this route or rely on static serving)
    res.sendFile('pixel.png', { root: __dirname });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
