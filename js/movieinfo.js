$(function(){
    const page_id = get_id();
    const filtered_film_list = filterId(films, page_id);
    const chosen_movie = filtered_film_list[0] || null;
    if (chosen_movie) {
        appendChosenMovie(chosen_movie);
    } else {
        // deal with no chosen movie
    }


    function get_id(){
        return getUrlVars()["id"];
    }

    function getUrlVars(){
        const url_variables = {};
        window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            url_variables[key] = value;
        });
        return url_variables;
    }
    
    function filterId(films, page_id){
        
        const id_match = function(movie){
            return movie.id === page_id;
        };
        return films.filter(id_match);
    };
    
    function appendChosenMovie(movie){
        $("#movie_info_container").append(`
        <div class="movie col-xs-12 col-sm-4">
            <div id="${movie.id}" class="movie-block" data-year="${movie.year}" data-genre="${movie.type}" data-imdb="${movie.Imdb}" data-reels="${movie.reels}">
                    <div id="header" class="item col-xs-12 banner-block">
                    </div>

                    <div class="overlay">
                    <div class="library-welcome">
                        <h1>${movie.name}</h1>
                    </div>
                    <div class="overlay-info">
                        <h5>${movie.type} | ${movie.year} | IMDb: ${movie.imdb}/10 | ${movie.reels} Reels</h5>
                        <p>${movie.description}</p>
                    </div>
                    <div class="overlay-buttons">
                        <a href="../pages/movieinfo.html?id=${movie.id}">   
                            <div class="movie-btn" data-tooltip="More Info"><img  src="../assets/info.svg" alt="info"></div>
                        </a>
                        <a href="../pages/watchpage.html?id=${movie.id}" >    
                            <div class="movie-btn" data-tooltip="Watch Now"><img  src="../assets/play.svg" alt="play"></div>
                        </a>
                        <a href="../pages/watchlist.html">
                            <div class="movie-btn" data-tooltip="Add to Watchlist"><img src="../assets/plus.svg" alt="plus"></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        `);
        if (window.matchMedia("(min-width: 768px)").matches) {
            $(`#${movie.id}`).css("background-image", `url("${movie['img-path'] }")`);
        } else {
            $(`#${movie.id}`).css("background-image", `url("${movie['img-ban'] }")`);
        }
    };
    
});