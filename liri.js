require("dotenv").config();
var keys = require("./keys.js");
// var random = require("./random.txt");
var Spotify = require("node-spotify-api");
var axios = require("axios");
var spotify = new Spotify(keys.spotify);
var moment = require("moment");
var fs = require("fs");

function getMyConcert(music) {
    var queryUrl = "https://rest.bandsintown.com/artists/" + music + "/events?app_id=codingbootcamp";


    console.log(queryUrl);

    axios.get(queryUrl).then(
        function (data) {

            console.log("Artist: " + music + "\nName of the Venue: " + data.data[0].venue.name + "\nVenue location: " + data.data[0].venue.country + ", " + data.data[0].venue.city
                + "\nTime: " + moment(data.data[0].datetime).format("MMM Do YYYY"));

        }
    );
}
function getMySong(song) {
    spotify.search({ type: "track", query: "\" " + song + "\" " }, function (err, data) {
        if (err) {
            return console.log("Error occurred: " + err);
        }
        console.log("Name of Artist; " + data.tracks.items[1].album.artists[0].name + "\nAlbum that the song is from: " + data.tracks.items[1].album.name
            + "\nSong Name: " + data.tracks.items[1].name + "\nListen Here: " + data.tracks.items[1].external_urls.spotify);
    });
    // if (process.argv[3] === ("  "))
    // song = "The Sign";
    // {
        
    //     spotify.search({ type: "track", query: "The Sign" }, function (err, data) {
    //         if (err) {
    //             return console.log("Error occurred: " + err);
    //         }
    //         console.log("Name of Artist; " + data.tracks.items[0].album.artists[0].name + "\nAlbum that the song is from: " + data.tracks.items[0].album.name
    //             + "\nSong Name: " + data.tracks.items[0].name + "\nListen Here: " + data.tracks.items[0].external_urls.spotify);
    //     });

    // }


};
function getMyMovie(movie) {
   var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";  
    // if (process.argv.slice(3) === "  "){
    //     movie === "Mr. Nobody";
        
    // }
   
    console.log(queryUrl);

    axios.get(queryUrl).then(
        function (response) {
            console.log("Title: " + response.data.Title + "\nYear: " + response.data.Year,
                "\nIMDB Rating: " + response.data.imdbRating + "\nRotten Tomatoes Rating: " + response.data.Ratings[2].Value,
                "\nReleased County (ies): " + response.data.Country, + "\nLangauge: " +
                response.data.Language, + "\nPlot :" + response.data.Plot, + "\nActors: " + response.data.Actors);

        }
    )

};
// Music from the random txt
function readFromRandom() {

    fs.readFile("random.txt", "utf8", function(error, data) {

        if (error) {
          return console.log(error);
        }
      
        var dataArr = data.split(",");
    
    
  
    spotify.search({ type: "track", query: [dataArr[1]] }, function (err, data) {
        if (err) {
            return console.log("Error occurred: " + err);
        }

        console.log("Name of Artist; " + data.tracks.items[0].album.artists[0].name + "\nAlbum that the song is from: " + data.tracks.items[0].album.name
            + "\nSong Name: " + data.tracks.items[0].name + "\nListen Here: " + data.tracks.items[0].external_urls.spotify);
    }); 

    }
    )};


// Movie from the random txt

// function readFromRandom() {

//         fs.readFile("random.txt", "utf8", function(error, data) {
    
//             if (error) {
//               return console.log(error);
//             }
//             // console.log(data);
//             var dataArr = data.split(",");
        
          
    
          
//             var queryUrl = "http://www.omdbapi.com/?t=" + dataArr[1]+ "&y=&plot=short&apikey=trilogy";  
//             // if (process.argv.slice(3) === "  "){
//             //     movie === "Mr. Nobody";
                
//             // }
           
//             console.log(queryUrl);
        
//             axios.get(queryUrl).then(
//                 function (response) {
//                     console.log("Title: " + response.data.Title + "\nYear: " + response.data.Year,
//                         "\nIMDB Rating: " + response.data.imdbRating + "\nRotten Tomatoes Rating: " + response.data.Ratings[2].Value,
//                         "\nReleased County (ies): " + response.data.Country, + "\nLangauge: " +
//                         response.data.Language, + "\nPlot :" + response.data.Plot, + "\nActors: " + response.data.Actors);
        
//                 }
//             )
    
//         }
//         )};
var name = function (typeMedia, functionData) {
    switch (typeMedia) {
        case "concert-this":
            getMyConcert(functionData);
            
            break;
        case "spotify-this-song":
            if(functionData === ""){
                functionData = "The Sign";
                getMySong(functionData);
            }
            else{
                getMySong(functionData);
            }
            break;
        case "movie-this":
            if(functionData === ""){
                functionData = "Mr.Nobody";
                getMyMovie(functionData);
            }
            else{
                getMyMovie(functionData);
            }
            break;
        case "do-what-it-says":
            readFromRandom(functionData);
            break;
    }

}


name(process.argv[2], process.argv.slice(3).join(" "));