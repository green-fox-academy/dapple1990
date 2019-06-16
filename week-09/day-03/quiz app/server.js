const express = require('express');
const mysql = require('mysql');
const path = require('path') 
/*
path.join(__dirname, 'index.html') //-> erre változik  -> c:/users/dalma/desktop/laci/bookstore/index.html
*/
const app = express();
const PORT = 3000;

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'quizapp'
});


app.use(express.json());

app.get('/game', (req,res) => {
  res.send(path.join(_dirname, 'game.html'));
});

app.get('/questions', (req, res) => {
  res.send(path.join(__dirname, 'questions.html'))
});

app.get('/api/game', (req, res) => {
  conn.query(`SELECT question FROM questions ORDER BY RAND() LIMIT 1;`, (err, rows) =>{
    conn.query(`SELECT * FROM answers WHERE id = ?;`, [rows[0].id], (err, answer) => {
      let question = rows[0];
      res.send(answer);
    })
  })
});

app.get('/api/questions', (req, res) =>{
  conn.query('SELECT * FROM questions')
});

app.get('/api/questions', (req, res) => {
  let getQuestion = req.body;
  conn.query('INSERT INTO quizapp (questions) VALUE id = ?;', [getQuestion.question], (err, result) => {
    let questionId = result.id;
    

  })
})

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

