require('dotenv').config();

const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , session = require('express-session')
    , PORT = 7070;

const app = express();

app.use(bodyParser.json());

app.listen(PORT, () => { console.log(`Server listening on port: ${PORT}.`); });