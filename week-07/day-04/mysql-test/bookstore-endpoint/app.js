let mysql = require('mysql');
const express = require('express'); //express-web server
const path = require('path') //path - 
const app = express();
const PORT = 3000;

app.use(express.json());

/* ```
// set up server
``` */

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/bookstore', (req, res) => {
  const category = req.query.category; //searching query parameter from URL
  const publisher = req.query.publisher;
  const plt = req.query.plt;
  const pgt = req.query.pgt;
  let query = `select book_name , aut_name , cate_descrip, pub_name, book_price
  from book_mast 
  inner join author on book_mast.aut_id = author.aut_id 
  inner join publisher on publisher.pub_id = book_mast.pub_id
  inner join category on category.cate_id = book_mast.cate_id`; //sql query, string, same as typing in workbench
  if (category) {
    query += ` where cate_descrip = '${category}'`
  } 
  if (publisher) {
    query += ` and pub_name like '%${publisher}%'` //http://localhost:3000/bookstore?category=nature&publisher=mountain
  }
  conn.query(query, (err, result) => {
    if (err) {
      console.log('nope')
    } else {
      //console.log(result);
      res.send(result);
    }
  })
})


let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookstore'
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
