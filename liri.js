require("dotenv").config();

var keys = require('./keys.js'),
    Spotify = require("node-spotify-api"),
    Twitter = require("twitter"),
    spotify = new Spotify(keys.spotify),
    twitter = new Twitter(keys.twitter)


console.log(spotify);

