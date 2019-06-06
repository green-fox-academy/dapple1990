const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const name = req.query.name;
  if (!name) {
    res.render('home', { greetings: `Welcome back Guest` });
  } else {
    res.render('home', { greetings: `Welcome back ${name}` });

  }
});

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`));