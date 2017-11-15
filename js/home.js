$(function(){
    $('.owl-carousel').owlCarousel({
        items:1,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        autoplaySpeed:500,
        nav:false,
        dotsEach:1
    });
    


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
                            <h5>${movie.type} | ${movie.year} | IMDb: ${movie.imdb}/10 | 4 Reels</h5>
                            <p>${movie.description}</p>
                        </div>
                        <div class="overlay-buttons">
                            <a href="../pages/more_info.html?id=${movie.id}">   
                                <div class="movie-btn" data-tooltip="More Info"><img  src="../assets/info.svg" alt="info"></div>
                            </a>
                            <a href=",,/pages/watchpage_test.html?id=${movie.id}" >    
                                <div class="movie-btn" data-tooltip="Watch Now"><img  src="../assets/play.svg" alt="play"></div>
                            </a>
                            <a href="#">
                                <div id="swap" class="movie-btn" data-tooltip="Add to Watchlist"><img src="../assets/plus.svg" alt="plus"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            `);
            if (window.matchMedia("(min-width: 768px)").matches) {
                $(`#${movie.id}`).css("background-image", `url(${movie['imgPath'] })`);
              } else {
                $(`#${movie.id}`).css("background-image", `url("${movie['imgBan'] }")`);
              }
        }
    }
    const most_recent_movies = getMostRecentMovies(3);
    appendMostRecentMovies(most_recent_movies);
    
    
    $("#swap").click(function(){
        
        if($(this).data("tooltip") === "Add to Watchlist"){
            $(this).attr({"data-tooltip": "Remove from Watchlist"});
            $(this).children("img").css({"transform" : "rotate(45deg)"});
        };
        
        
        
        
    });
});




