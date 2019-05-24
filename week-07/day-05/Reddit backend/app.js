let mysql = require('mysql');
const express = require('express'); //express-web server
const path = require('path')
const app = express();
const PORT = 3000;


app.use(express.json());

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'reddit'
});

app.get('/', (req, res) => {
  res.send('hello ');
});

app.get('/posts', (req, res) => {
  const post = 'SELECT * FROM user';
  conn.query(post, (err, result) => {
    if (err) {
      console.log(err.message)
      res.status(500).send('Database error')
      return
    }
    res.send(result);
  })
});

app.post('/posts', (req, res) => {
  const post2 = req.body.title
  const post3 = req.body.url
  conn.query(`
  INSERT INTO user (title, url) VALUES ("${post2}", "${post3}");`,
    (err, rows) => {
      if (err) {
        console.log(err.toString());
        return;
      }
      console.log('data successfully added to database');
      res.status(201).send(rows);
    }
  )
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