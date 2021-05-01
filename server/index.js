const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const pool = require('../database/pgConnect.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/listings', (req, res) => {
  pool.query('SELECT * FROM listings', (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(200).send(results.rows);
    }
  });
});

app.get('/listings/:home', (req, res) => {
  const home = { home: Number(req.params.home) };
  pool.getListing(home, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.delete('/listings/:home', (req, res) => {
  const home = { home: Number(req.params.home) };
  pool.deleteListing(home, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${PORT}`);
});
