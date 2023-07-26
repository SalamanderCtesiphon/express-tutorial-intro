const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  console.log("here");
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact-me');
});

app.get('/404', (req, res) => {
  res.render('404');
});

const userRouter = require('./routes/users');

app.use('/users', userRouter);

app.listen(3000);

