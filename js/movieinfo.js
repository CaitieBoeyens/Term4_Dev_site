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
        
            <div id="${movie.id}-container">
                <div class="banner container-fluid hidden-sm-hidden-xs">

                    <div id="${movie.id}" class="item header col-xs-12 banner-block">
                        
                    </div>
                </div>

                    <div class="container content">
                    <div class="library-welcome col-xs-12">
                        <h1>${movie.name}</h1>
                    </div>
                    <div class="filters col-xs-12">

                        <div class="row">

                        </div>

                        <div class="row">

                            <div class="col-xs-12 col-md-6 col-md-offset-3" id="description>
                                <h6>${movie.type} | ${movie.year} | IMDb: ${movie.imdb}/10 | ${movie.reels} Reels</h6>
                                <p>${movie.description}</p>
                            </div>
                    
                        </div>
                    </div>
        </div>
        `);
        

                '$(`#${this.id}`).css("background-image", `url("${this['img-ban'] }")`
    };
    
});