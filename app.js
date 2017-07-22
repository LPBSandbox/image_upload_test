/*
* Module dependencies.
*/
var express    = require('express')    
    , common    = require('./common')
    , fs       = require('fs')
    , http     = require('http')
    , util     = require('util')
    , path     = require('path');

    var methodOverride = require('method-override');
    var session = require('express-session');
    var bodyParser = require('body-parser');
    var errorHandler = require('errorhandler');
    var multer  = require('multer')
    var upload = multer({ dest: 'public/' })
    

var app = express();


/*
 * connect middleware - please note not all the following are needed for the specifics of this example but are generally used.
 */
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');

//    app.use(express.logger('dev'));
    app.use(bodyParser.urlencoded({ extended: true, keepExtensions: true, uploadDir: __dirname + '/public/uploads' }));
    app.use(methodOverride());
    //app.use(app.router);

    //File upload
    app.get('/upload', common.imageForm);
    app.post('/upload', upload.single('image'), common.uploadImage);

    app.use(express.static(path.join(__dirname, 'public')));
    app.use(errorHandler());




http.createServer(app).listen(app.get("port"), function(){
    console.log('Express server listening on port ' + app.get('port'));
});

 module.exports = app;
