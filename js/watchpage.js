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
        $("#movie-watch").append(`
        
        <div class="movieHeader well well-sm">
        <h1>${movie.name}</h1>
    </div>
    <div class="movieBody col-lg-12 col-md-12 col-sm-12 col-xs-12">
       <div id="video-container">
            <!-- Video -->
            <iframe id="video" width="100%"
                   src="${movie.vidPath}">
           </iframe>
        </div>
    </div>
                `);
        
    
    }
});





