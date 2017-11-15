$(function(){

    // $(function() {
    //     $("input").autocomplete({
    //         source:[films.type]
    //     }); 
    // });
    
    $(function appendAllMovies()
    {
        $(films).each(function(){
            $("#all_movie_container").append(`
            <div class="movie col-xs-12 col-sm-4">
                <div id="container-${this.id}" class="movie-block" data-year="${this.year}" data-genre="${this.type}" data-imdb="${this.Imdb}" data-reels="${this.reels}">
                    <div class="overlay">
                        <div class="overlay-name">
                            <h4>${this.name}</h4>
                        </div>
                        <div class="overlay-info">
                            <h5>${this.type} | ${this.year} | IMDb: ${this.imdb}/10 | ${this.reels} Reels</h5>
                            <p>${this.description}</p>
                        </div>
                        <div class="overlay-buttons">
                            <a href="../pages/more_info.html?id=${this.id}">   
                                <div class="movie-btn" data-tooltip="More Info"><img  src="../assets/info.svg" alt="info"></div>
                            </a>
                            <a href="../pages/watchpage.html?id=${this.id}" >    
                                <div class="movie-btn" data-tooltip="Watch Now"><img  src="../assets/play.svg" alt="play"></div>
                            </a>
                            
                                <div class="movie-btn add_to_watchlist" data-tooltip="Add to Watchlist"><img src="../assets/plus.svg" alt="plus"></div>
                            
                        </div>
                    </div>
                </div>
            </div>
            `);

            if (window.matchMedia("(min-width: 768px)").matches) {
                $(`#container-${this.id}`).css("background-image", `url(${this['imgPath'] })`);
              } else {
                $(`#container-${this.id}`).css("background-image", `url("${this['imgBan'] }")`);
              }
            
        });
    });

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

        function getGenreChoice() {
            return $("#genre option:selected").text();
        }
        function getDateRange() {
            const string_indexes = $("#ex16b").val().split(',');
            const years = [1000, 1980, 1990, 2000, 2010, 3000];
            const range_array = [years[string_indexes[0]], years[string_indexes[1]]];
            return range_array;
        }
        function getIndieReelRating() {
            return parseInt($("input[name=reels]:checked").val()) || 0;
        }
        function getImdbRating() {
            return parseFloat($("input[name=imdb]:checked").val()) || 0;
        }
        // films is an array of film objects
        // genre is a string
        // indie_reel_rating is an integer
        // imdb rating is a double
        // start and end years are integers
        function filterFilms(films, genre, indie_reel_rating, imdb_rating, start_year, end_year) {
            const genre_match = function (movie) {
                return movie.type === genre;
            };
            const falls_within_year_range = function (movie) {
                const movie_year = parseInt(movie.year);
                return (movie_year >= start_year && movie_year <= end_year);
            };
            const i_r_rating_match = function (movie) {
                return parseInt(movie.reels) >= indie_reel_rating;
            };
            const imdb_rating_match = function (movie) {
                return parseFloat(movie.imdb) >= imdb_rating;
            };
            const filtered_films = films
                                            .filter(genre_match)
                                            .filter(falls_within_year_range)
                                            .filter(i_r_rating_match)
                                            .filter(imdb_rating_match);
            return filtered_films;
        }

        function hideAllMovies() {
            $(films).each(function() {
                $("#container-"+this.id).fadeOut();
            });
        }
        function unhideMatchingMovies(filtered_films) {
            $(filtered_films).each(function() {
                $("#container-"+this.id).fadeIn();
            });
        }
        

        $("#filter").click(function(){
            const genre_choice = getGenreChoice();
            const date_range = getDateRange();
            const start_year = date_range[0];
            const end_year = date_range[1];
            const indie_reel_rating = getIndieReelRating();
            const imdb_rating = getImdbRating();
            //record each choice
            //filter according to the choices
            //filterFilms(films, genre, indie_reel_rating, imdb_rating, start_year, end_year)
            const filtered_films = filterFilms(films,genre_choice,indie_reel_rating,imdb_rating,start_year,end_year);
            
            console.log(filtered_films);
            hideAllMovies();
            unhideMatchingMovies(filtered_films);
            //use filtered films array to append data
        })


});
