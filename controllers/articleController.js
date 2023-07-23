const Article = require('../models/article');


module.exports = {
    async index (req, res) {
        const articles = await Article.find({});
        res.render('index', {
            title: 'Articles',
            articles: articles
        });
    },
    async store(req, res) {
        const {title, author, body} = req.body;
        try {
            let article = new Article();
            article.title = title;
            article.author = author;
            article.body = body;
            await article.save();
            res.redirect('/');
        } catch (error) {
            console.log(error);
        }
    },
    async show(req, res) {
        const {id} = req.params;
        try {
            const article = await Article.findById(id);
            return res.render('article', {
                article: article
            });
        } catch (error) {
            console.log(erroe);
        }
    }
}