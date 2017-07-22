var util = require('util');

exports.imageForm = function(req, res) {
    res.render('upload', {
        title: 'Upload Images'
    });
};

exports.uploadImage = function(req, res, next){
        console.log('file info: ',req.file);


        res.send(util.format(' Task Complete \n uploaded %s (%d Kb) to %s as %s'
            , req.file.originalname
            , req.file.size / 1024 | 0
            , req.file.path
            , req.body.title
            , req.file.image
            , '<img src="' + req.file.filename + '">'
        ));


};