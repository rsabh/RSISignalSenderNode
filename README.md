# RSISignalSenderNode

## Overview
RSISignalSenderNode is a Node.js application designed to fetch the weekly Relative Strength Index (RSI) of specified stocks using the Alpha Vantage API. It also features functionality for sending email alerts when certain RSI criteria are met.

## Prerequisites
- Node.js
- npm (Node Package Manager)
- Access to Alpha Vantage API (API key required)
- (Optional) Email service credentials for sending alerts

## Installation

1. **Clone the Repository**
   git clone https://github.com/yourusername/RSISignalSenderNode.git
   cd RSISignalSenderNode

2. **Install Dependencies**
   ```
   npm install
   ```
3. **Set Up Environment Variables**
- Create a `.env` file in the root directory.
- Add the following variables:
  ```
  ALPHA_VANTAGE_API_KEY=your_alpha_vantage_api_key
  PORT=3000
  EMAIL_USER=your_email@example.com
  EMAIL_PASS=your_email_password
  ```

## Running the Application

- Start the server:
  ```
  npm start
  ```
- The server will be running on `http://localhost:24001` (or the port you've specified in the `.env` file).

## Usage

### Fetch RSI Data
- Endpoint: `GET /api/stocks/rsi/:ticker`
- Replace `:ticker` with the stock symbol you want to check.
- Example using `curl`:
  ```
  curl http://localhost:24001/api/stocks/rsi/AMZN
  ```
## Contributing
Contributions to this project are welcome. Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License
Specify your choice of license here, or state that the project is unlicensed.

---

Replace `https://github.com/yourusername/RSISignalSenderNode.git` with your actual repository URL. Modify any sections as necessary to fit the specifics of your project, such as additional configuration steps, usage instructions, or details about the functionalities it provides.