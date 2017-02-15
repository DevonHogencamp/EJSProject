var express = require('express');
var router = express.Router();
var appdata = require('../data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
    var myArtwork = [];
    var myArtists = [];

    myArtists = appdata.speakers;

    appdata.speakers.forEach(function (item) {
        myArtwork = myArtwork.concat(item.artwork);
    });

    res.render('index', {
        title: 'Home',
        artwork: myArtwork,
        artists: myArtists
    });
});

/* GET speakers page */
router.get('/speakers', function(req, res, next) {
    var myArtwork = [];
    appdata.speakers.forEach(function (item) {
        myArtwork = myArtwork.concat(item.artwork);
    });

    res.render('speakers', {
        title: 'Speakers',
        artwork: myArtwork
    });
});

/* GET speakers detail page */
router.get('/speakers/:speakerid', function(req, res, next) {
    var myArtwork = [];
    appdata.speakers.forEach(function (item) {
        if (item.shortname == req.params.speakerid) {
            marArtists.push(item);
            myArtwork = myArtwork.concat(item.artwork);
        }
    });

    res.render('speakers', {
        title: 'Speakers',
        artwork: myArtwork,
        artists: myArtists
    });
});

module.exports = router;
