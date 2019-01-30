# LIRI Bot

This is a LIRI(Language_ Interpretation and Recognition Interface) application similar to SIRI (Speech Interpretation and Recognition Interface). By using the command line node app LIRI will be able to give you back the requested data.

## To use this app you need the following packages:

* [Axios](https://www.npmjs.com/package/axios)

* [Moment](https://www.npmjs.com/package/moment)

* [DotEnv](https://www.npmjs.com/package/dotenv)


## To use this app you need the following apis:

1. LIRI will search Spotify for songs
        * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
        
2. Bands in Town for concerts
        * [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)
        
3. OMDB for movies.
        *[OMDB API](http://www.omdbapi.com)
        

### Instructions

1. Navigate to the root of your project and run `npm init -y` &mdash; this will initialize a `package.json` file for your project. The `package.json` file is required for installing third party npm packages and saving their version numbers. If you fail to initialize a `package.json` file, it will be troublesome, and at times almost impossible for anyone else to run your code after cloning your project.

2. Make a `.gitignore` file and add the following lines to it. This will tell git not to track these files, and thus they won't be committed to Github.

```
node_modules
.DS_Store
.env
```

3. Make a JavaScript file named `keys.js`.

* Inside keys.js your file will look like this:

```js
console.log('this is loaded');

exports.spotify = {
id: process.env.SPOTIFY_ID,
secret: process.env.SPOTIFY_SECRET
};
```

4. Next, create a file named `.env`, add the following to it, replacing the values with your API keys (no quotes) once you have them:

```js
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

```

* This file will be used by the `dotenv` package to set what are known as environment variables to the global `process.env` object in node. These are values that are meant to be specific to the computer that node is running on, and since we are gitignoring this file, they won't be pushed to github &mdash; keeping our API key information private.

* If someone wanted to clone your app from github and run it themselves, they would need to supply their own `.env` file for it to work.

5. Make a file called `random.txt`.

* Inside of `random.txt` put the following in with no extra characters or white space:

* spotify-this-song,"I Want it That Way"

6. Make a JavaScript file named `liri.js`.

7. At the top of the `liri.js` file, add code to read and set any environment variables with the dotenv package:

```js
require("dotenv").config();
```

8. Add the code required to import the `keys.js` file and store it in a variable.

```js
var keys = require("./keys.js");
```

* You should then be able to access your keys information like so

```js
var spotify = new Spotify(keys.spotify);
```

## Your app will be able to do these commands:

* `concert-this`

* `spotify-this-song`

* `movie-this`

* `do-what-it-says`

### CONCERT

1. `node liri.js concert-this <artist/band name here>`

* Name of the venue

* Venue location

* Date of the Event (use moment to format this as "MM/DD/YYYY")

![Demo](https://github.com/NaomiMae/liri-node-app/blob/master/Images/Concert.png)

2. `node liri.js spotify-this-song '<song name here>'`

* Artist(s)

* The album that the song is from

* The song's name

* A preview link of the song from Spotify


![Demo](https://github.com/NaomiMae/liri-node-app/blob/master/Images/Partition.png)

* If no song is provided then your program will default to "The Sign" by Ace of Base.

![Demo](https://github.com/NaomiMae/liri-node-app/blob/master/Images/song.png)


3. `node liri.js movie-this '<movie name here>'`

* This will output the following information to your terminal/bash window:

```
* Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Rotten Tomatoes Rating of the movie.
* Country where the movie was produced.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.
```

![Demo](https://github.com/NaomiMae/liri-node-app/blob/master/Images/frozen.png)


* If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

![Demo](https://github.com/NaomiMae/liri-node-app/blob/master/Images/movie.png)


4. `node liri.js do-what-it-says`

* Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

![Demo](https://github.com/NaomiMae/liri-node-app/blob/master/Images/DoWhat.png)

* It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

## Total Command Line

![Demo](https://github.com/NaomiMae/liri-node-app/blob/master/Images/main.png)



