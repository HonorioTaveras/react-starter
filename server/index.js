const express = require('express');
const cors = require('cors');
const axios = require('axios').default;

const app = express();

const db = require('../database/dummyData');
const bodyParser = require('body-parser');
const path = require('path');

const port = 4444;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../public')));
app.use(cors());

app.get('/routes', (req, res) => {
  res.status(200).json(db.routeList());
});

app.get('/routes/:route_id', (req, res) => {
  res.status(200).json(db.route());
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
