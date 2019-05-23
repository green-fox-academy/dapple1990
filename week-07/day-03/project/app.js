const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  const value = req.query.input * 1;
  const result = {};
  if (value === null) {
    res.send({ "error": "Please provide an input!" })
  } else {
    res.send({
      "received": value,
      "result": value * 2,
    })
  }
});

app.get('/greeter', (req,res) => {
  const name = req.query.name
  const title = req.query.title
  const message = {
  
  };
  if(!name && !title) {
    message.error = 'Please provide a name and a title!'
  } else if(!name) {
    message.error = 'Please provide a name!'
  } else if(!title) {
    message.error = "Please provide a title!" 
  } else {
    message.welcome_message = `Oh, hi there ${name}, my dear ${title}!`
  } res.send({message})
}) 
  
app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});