const express = require('express');
const db = require('./services/db');
const bodyParser = require('body-parser');
const path = require('path');
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

app.use('/articles', articlesRoutes);


//Add view router
app.get('/articles/add', (req, res) => {
    res.render('store_article', {
        title: 'Add article'
    })
});



//Start server
app.listen(3000, () => {
    console.log("Server listining on port 3000...");
});