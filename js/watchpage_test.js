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
        $("#movie-info").append(`
        
            <div class="movieHeader well well-sm">
                <h1>${movie.name}</h1>
            </div>
    

            <div class="movieBody col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div id="video-container">
                    <!-- Video -->
                    <iframe id="video" width="100%" height="500px"
                        src="${movie.vidPath}">
                </iframe>
                    <!-- Video Controls -->
                    <div id="video-controls">
                        <button type="button" id="play-pause"><img src="../assets/play.svg" width="80%"></button>
                        <input type="range" id="seek-bar" value="0">
                        
                        <button type="button" id="full-screen"><img src="../assets/fullscreen.png" width="65%"></button>
                        <input type="range" id="volume-bar" min="0" max="1" step="0.1" value="1">
                        <button type="button" id="mute"><img src="../assets/volume.png" width="85%"></button>
                    </div>
                </div>
                `);
        
    
    }
});