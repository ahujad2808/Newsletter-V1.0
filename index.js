const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000; 

app.get('/', (req, res) => {
  res.send('Hello from the Node.js backend!');
});

app.listen(port, () => {
  console.log(`Server is running on port number ${port}`);
});