// Read and set any environment variables with the dotenv package, per HW instructions
require("dotenv").config();

// Variables and constructors
var keys = require('./keys.js'), // Import keys.js
    Spotify = require("node-spotify-api"), // Require Spotify API package
    Twitter = require("twitter"), // Require Twitter package
    spotifyKeys = new Spotify(keys.spotify), // Spotify key constructor
    twitterKeys = new Twitter(keys.twitter) // Twitter key constructor


// Code for accessing Twitter feed, provided in NPM Twitter docs 
var params = {screen_name: 'HillaryBeCoding'};
twitterKeys.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
    // console.log(tweets);
        // For-loop to iterate through tweets and console.log only the tweet itself and timestamp
        for (var i = 0; i < tweets.length; i++) {
            console.log("@HillarybeCoding tweeted: " + tweets[i].text + "\nTweet created at: " + tweets[i].created_at);
        }
    }
});

