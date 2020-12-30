require('dotenv').config();

const config = {
    sid: process.env.TWILIO_ACCOUNT_SID,
    token: process.env.TWILIO_AUTH_TOKEN
}

module.exports = { config };