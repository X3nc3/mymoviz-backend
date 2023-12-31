var express = require("express");
var router = express.Router();

const APIKEY = process.env.KEY_API;

router.get("/movies", (req, res) => {
  fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=fr-FR`
  )
    .then((response) => response.json())
    .then((findMovies) => {
      if (findMovies.results.length > 0) {
        res.json({ movies: findMovies.results });
      } else {
        res.json({ error: "Not movies find!" });
      }
    });
});

module.exports = router;
