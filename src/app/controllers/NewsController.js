
class NewsController {

    //[get]/news
    index(req, res){
        res.render('news');
    }

    // get/news/s:slug
    show(req, res){
        res.send('news detail')
    }
}

module.exports = new NewsController;

