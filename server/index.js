const express = require('express');
const cors = require('cors');
const axios = require('axios').default;

const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const port = 4444;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../dist')));
app.use(cors());