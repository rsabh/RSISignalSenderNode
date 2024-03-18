const axios = require('axios');

async function fetchLatestWeeklyRsi(ticker) {
    const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
    const url = `https://www.alphavantage.co/query?function=RSI&symbol=${ticker}&interval=weekly&time_period=14&series_type=close&apikey=${apiKey}`;

    const response = await axios.get(url);
    return getLatestRsiResponse(response.data);
}

const getLatestRsiResponse = (jsonData) => {
    const rsiData = jsonData['Technical Analysis: RSI'];
    const latestDate = Object.keys(rsiData)[0]; // Get the first key which should be the latest date
    return Number(rsiData[latestDate].RSI);
};

module.exports = { fetchLatestWeeklyRsi };