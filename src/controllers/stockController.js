const express = require('express');
const router = express.Router();
const { fetchLatestWeeklyRsi } = require('../services/stockService');

router.get('/rsi/:ticker', async (req, res) => {
    try {
        const ticker = req.params.ticker;
        const rsi = await fetchLatestWeeklyRsi(ticker);
        res.json({ ticker, rsi });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;