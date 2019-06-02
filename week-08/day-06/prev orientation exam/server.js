const express = require('express');
const mysql = require('mysql');
const path = require('path')
const app = express();
const PORT = 3000;

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'alias'
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('index.html')
});

app.post('/api/links', (req, res) => {
  let alias = req.body.alias
  conn.query('SELECT alias FROM alias WHERE alias = ?', [alias], (err, rows) => {
    if (rows.length > 0) {
      res.sendStatus(400);
    } else {
      let secretCode = Math.floor(Math.random() * 9999);
      let url = req.body.url;
      conn.query('INSERT INTO alias (alias, url , secretCode) VALUES (? , ? , ?)', [alias, url, secretCode], (err, status) => {
        conn.query('SELECT * FROM alias WHERE id = ?', [status.insertId], (err, rows) => {
          res.send(rows);
        })
      })
    }
  })
});

app.get('/a/:alias', (req, res) => {
  let alias2 = req.params.alias;
  conn.query('SELECT * FROM alias WHERE alias = ?', [alias2], (err, rows) => {
    if (rows.length === 0) {
      res.sendStatus(404);
    } else {
      conn.query('UPDATE alias SET hitCount = hitCount + 1, WHERE alias = ?', [alias2], (err, rows2) => {
        res.redirect(rows[0].url);
      })
    }
  })
});

app.get('/api/links', (req, res) => {
  let alias3 = req.params.alias;
  conn.query('SELECT url, alias, hitCount FROM alias', (err, rows) => {
    res.send(rows);
  })
});

app.delete('/api/links/:id', (req, res) => {
  let id = req.params.id;
  let secretCode = req.body.secretCode
  conn.query('SELECT secretCode FROM alias WHERE id = ?', [id], (err, rows) => {
    if (rows.length === 0) {
      res.sendStatus(404)
    } else if (secretCode !== rows[0].secretCode) {
      res.sendStatus(403)
    } else {
      conn.query('DELETE FROM alias WHERE id = ?' , [id], (err, deleteCode) => {
        res.sendStatus(204)
      })
    }
  })
});

conn.connect(function (err) {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('connection established');
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
