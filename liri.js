require("dotenv").config();
var keys = require('./keys.js'),
    spotify = new Spotify(keys.spotify),
    client = new Twitter(keys.twitter)