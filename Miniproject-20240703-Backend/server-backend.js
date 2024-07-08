// Express
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

// Dotenv
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;

// Body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



//////////// cookie 설정
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// listen
app.listen(PORT, function () {
    console.log(`Backend Server Ready. http://127.0.0.1:${PORT}`);
});

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/amm', require('./routes/asset-management'));
app.use('/real-estate', require('./routes/real-estate'));
