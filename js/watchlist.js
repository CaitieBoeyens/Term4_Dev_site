$(function(){

    // $(function() {
    //     $("input").autocomplete({
    //         source:[films.type]
    //     }); 
    // });
    
   // const films imported from movie-data.js
    function getMostRecentMovies(num_movies)
    {
        const most_recent = films.filter( function(el, idx) {
            return idx < num_movies;
        });
        return most_recent;
    }

    function appendMostRecentMovies(most_recent_movies)
    {
        for (const movie of most_recent_movies) {
            $("#most_recent_movie_container").append(`
            <div class="movie col-xs-12 col-sm-4">
                <div id="${movie.id}" class="recent-movie">
                    <div class="overlay">
                        <div class="overlay-name">
                            <h4>${movie.name}</h4>
                        </div>
                        <div class="overlay-info">
                            <h5>${movie.type} | ${movie.year} | IMDb: ${movie.Imdb}/10 | 4 Reels</h5>
                            <p>${movie.description}</p>
                        </div>
                        <div class="overlay-buttons">
                            <a href="">   
                                <div class="movie-btn" data-tooltip="More Info"><img  src="../assets/info.svg" alt="info"></div>
                            </a>
                            <a href="" >    
                                <div class="movie-btn" data-tooltip="Watch Now"><img  src="../assets/play.svg" alt="play"></div>
                            </a>
                            <a href="">
                                <div id="swap" class="movie-btn" data-tooltip="Add to Watchlist"><img src="../assets/plus.svg" alt="plus"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            `);
            $(`#${movie.id}`).css("background-image", `url("${movie['img-path'] }")`);
        }
    }
    const most_recent_movies = getMostRecentMovies(3);
    appendMostRecentMovies(most_recent_movies);

    // RATINGS

        // // target element
        // var el = $;

        // // current rating, or initial rating
        // var currentRating = 0;

        // // max rating, i.e. number of stars you want
        // var maxRating= 5;

        // // callback to run after setting the rating
        // var callback = function(rating) { alert(rating); };

        // // rating instance
        // var myRating = rating(el, currentRating, maxRating, callback);

        // YEAR
        
        $("#ex16b").slider({ 
            min: 0, 
            max: 6, 
            value: [0, 6],
            focus: true,
            ticks: [0, 1, 2, 3, 4, 5],
            ticks_labels: ['Past', '1980', '1990', '2000', '2010', 'Future'],
            ticks_snap_bounds: 30 });
});