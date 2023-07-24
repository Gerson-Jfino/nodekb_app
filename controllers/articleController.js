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
            res.redirect('/articles');
        } catch (error) {
            console.log(error);
        }
    },
    async update(req, res) {
        const { id } = req.params;
        const {title, author, body} = req.body;
        const article = {
            title,
            author,
            body
        };
        const query = {_id: id};
        try {
            await Article.updateOne(query, article);
            return res.redirect('/articles');
        } catch (error) {
            console.log(error);
        }
    },
    async delete(req, res) {
        const {id} = req.params;
        const query = {_id: id};
        try {
            await Article.findOneAndRemove(query);
            res.send('Success');
        } catch (error) {
            console.log(error);
        }
    },
    // Views controllers
    async show(req, res) {
        const {id} = req.params;
        try {
            const article = await Article.findById(id);
            return res.render('article', {
                article: article
            });
        } catch (error) {
            console.log(error);
        }
    },
    async create(req, res) {
        res.render('store_article', {
            title: 'Create a new article'
        });
    },
    async edit(req, res) {
        const { id } = req.params;
        try {
            const article = await Article.findById(id);
            return res.render('edit_article', {
                title: 'Edit article',
                article: article
            });
        } catch (error) {
            console.log(error);
        }
    }
}