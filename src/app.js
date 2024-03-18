const express = require('express');
const stockRouter = require('./controllers/stockController');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Router for stock-related endpoints
app.use('/api/stocks', stockRouter);

// Basic route for home or health check
app.get('/', (req, res) => {
    res.send('RSISignalSenderNode API is running.');
});

// Starting the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;