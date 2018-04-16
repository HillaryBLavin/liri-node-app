require("dotenv").config();
require("node-spotify-api");
require("twitter");
var keys = require('./keys.js'),
    spotify = new Spotify(keys.spotify),
    client = new Twitter(keys.twitter)


console.log(spotify);

