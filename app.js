const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session')
const db = require('./services/db');
const articlesRoutes = require('./routes/articlesRoutes')
//init app
const app = express();

//DB conection

//Check DB connection
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Check for DB errors
db.on('error', (err) => {
    console.log(err);
});

//Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//body-parser midleware
app.use(bodyParser.urlencoded({ extended: false }));
// Seting static folder
app.use(express.static(path.join(__dirname, 'public')));

// Express session middleware
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

app.get('/', (req, res) => {
    res.redirect('/articles')
})
app.use('/articles', articlesRoutes);




//Start server
app.listen(3000, () => {
    console.log("Server listining on port 3000...");
});