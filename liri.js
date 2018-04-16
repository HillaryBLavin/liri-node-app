require("dotenv").config();

var keys = require('./keys.js'),
    Spotify = require("node-spotify-api"),
    Twitter = require("twitter"),
    spotify1 = new Spotify(keys.spotify),
    twitter1 = new Twitter(keys.twitter)


console.log(spotify1);

