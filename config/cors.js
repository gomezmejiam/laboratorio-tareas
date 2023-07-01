require('dotenv').config();
const cors = require('cors');

const whitelist = process.env.ORIGINS ? process.env.ORIGINS.split(',') : [];

const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.length === 0 || whitelist.indexOf(origin) !== -1 || !origin || whitelist[0] === '*') {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}

module.exports = cors(corsOptions);
