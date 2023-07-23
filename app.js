const express = require('express');
const db = require('./services/db');
const bodyParser = require('body-parser');
const path = require('path');
const articleController = require('./controllers/articleController');
const articlesRoutes = require('./routes/articlesRoutes')
//init app
const app = express();
// Bring in Models
let Article = require('./models/article');

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
//Home route
// app.get('/', async (req, res) => {
//     const articles = await Article.find({});
//     res.render('index', {
//         title: 'Pug is Awesome',
//         articles: articles
//     });
        
    
    
// });

app.use('/articles', articlesRoutes);
// app.get('/', articleController.index);

//Add route
app.get('/articles/add', (req, res) => {
    res.render('store_article', {
        title: 'Add article'
    })
});

// Add submit Post route
// app.post('/articles', articleController.store);

//Start server
app.listen(3000, () => {
    console.log("Server listining on port 3000...");
});