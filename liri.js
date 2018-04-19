// Read and set any environment variables with the dotenv package, per HW instructions
require("dotenv").config();

// Variables and constructors
var keys = require('./keys.js'), // Import keys.js
    fs = require('fs'); // Require FS (for use with do-what-it-says)
    request = require('request'); // Require Request package
    Spotify = require("node-spotify-api"), // Require Spotify API package
    Twitter = require("twitter"), // Require Twitter package
    spotifyKeys = new Spotify(keys.spotify), // Spotify key constructor
    twitterKeys = new Twitter(keys.twitter) // Twitter key constructor

// Create Function for getting tweets
var getTweets = function() {
    // Code for accessing Twitter feed, provided by NPM Twitter docs 
    var params = {screen_name: 'HillaryBeCoding'};
    twitterKeys.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
        // console.log(tweets);
            // For-loop to iterate through tweets from @HillaryBeCoding and console.log only the tweet itself and timestamp
            for (var i = 0; i < tweets.length; i++) {
                console.log("@HillaryBeCoding tweeted: " + tweets[i].text + "\nTweet created at: " + tweets[i].created_at);
            }
        }
    });
}

// Function for retrieving Artist Names from Spotify
var getArtists = function(artist) {
    return artist.name;
}

// Function for getting song info
var getSpotify = function(songTitle) {
    spotifyKeys.search({ type: 'track', query: songTitle }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       ////// Add if statement to make "I Saw the Sign" the default song
       if (songTitle == undefined) {
           
       }
        var songs = data.tracks.items;
        for (var i = 0; i < songs.length; i++) {
            console.log(i+1);
            console.log('Artist(s): ' + songs[i].artists.map(getArtists));
            console.log('Song Name: ' + '"' + songs[i].name + '"');
            console.log('Preview: ' + songs[i].preview_url);
            console.log('Album: ' + songs[i].album.name);
            console.log('----------------------------------------');
        }
      });
}

// Function for getting movie info
var getMovie = function(movieTitle) {
    request('http://www.omdbapi.com/?apikey=trilogy&t=' + movieTitle + '&r=json', function (error, response, body) {
        if(!error && response.statusCode == 200) {
            var jsonData = JSON.parse(body);

            console.log('Title: ' + jsonData.Title);
            console.log('Year Released: ' + jsonData.Year);
            console.log('IMDb Rating: ' + jsonData.imdbRating);
            console.log('Country: ' + jsonData.Country);
            console.log('Language: '+ jsonData.Language);
            console.log('Plot Synopsis: ' + jsonData.Plot);
            console.log('Cast: ' + jsonData.Actors);
        }
        ////// Add if statement to make "Mr. Nobody" the default movie
      });
}

var doWhat = function() {
    fs.readFile('random.txt', 'utf8', function(err, data) {
        if (err) throw err;
        var randomTxtArr = data.split(',');

        if (randomTxtArr.length == 2) {
            commandLiri(randomTxtArr[0], randomTxtArr[1]);
        } else if (dataArr.length == 1) {
            commandLiri(randomTxtArr[0]);
        }
      });
    
}

// Function containing switch statements to determine which command to run
var commandLiri = function(caseData, functionData) {
    switch(caseData) {
        case 'my-tweets':
            getTweets();
            break;
        case 'spotify-this-song':
            getSpotify(functionData);
            break;
        case 'movie-this':
            getMovie(functionData);
            break;
        case 'do-what-it-says':
            doWhat();
            break;
        default:
        console.log("I'm sorry, I don't recognize that command");
    }
}

var runLiri = function(argOne, argTwo) {
    commandLiri(argOne, argTwo);
};

runLiri(process.argv[2], process.argv[3]);
