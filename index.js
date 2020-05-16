const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
const PORT = 3000;

app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));



const pessoaRoute = require('./src/routes/pessoa-route.js')

app.use(bodyParser.json({
  limit: '5mb'
}));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get(`/bla`, (req, res) => {
  res.send('Hello, /');
});


app.use(`/pessoas`, pessoaRoute)

module.exports = app;