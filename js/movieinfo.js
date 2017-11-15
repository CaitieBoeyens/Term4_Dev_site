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
        $("#main-body").append(`
        
        <div  class="banner container-fluid">
        
             <div id="header" class="col-xs-12 banner-block">
                 
                 <img src="${movie.imgBan}" alt="IndieReel">
                 
             </div> 
        
        </div><!--BANNER-->

    
     
        <div class="container content">
            
            <div class="movie-title col-xs-12">
                
                <h1>${movie.name}</h1>
                
            </div>
            <div id="info-container">
            
                <div class="row">
                    
                    <div class="rating col-xs-8 col-xs-offset-2 col-md-4 col-md-offset-1" id="reels">
                        
                        <h5>Indie Reel Rating</h5>
                        
                            <img src="${movie.reelRating}" alt="reel rating">
                        
                    </div>
                    
                    <div class="rating col-xs-12 col-md-4 col-md-offset-1" id="imdb">
                        
                            <h5>IMDb Rating</h5>
                            
                            <img src="${movie.stars}" alt="imdb rating">									
                        
                    </div>

                </div>
                <div class="row text-img-info">

                    <div class="hidden-xs hidden-sm col-md-3 movie-poster">
                        <img src="${movie.imgPath}" alt="movie poster">
                    </div>
                    
                    <div class="col-xs-12 col-xs-offset-0 col-sm-offset-0 col-md-offset-1 col-md-8" id="description">
                    
                        <h6>  ${movie.type} 	| 	${movie.year} 	| 	IMDb: ${movie.imdb}/10 	| 	${movie.reels} Reels </h6>
        
                            <p>	Director: ${movie.director}	</p>
                        
                            
                            <p>	Cast: ${movie.cast} </p>	
                                
                                
                            <p>${movie.description}</p>

                            
                            <a href="../pages/library.html">   
                                <div class="movie-btn" data-tooltip="Back to Library"><img  src="../assets/back.svg" alt="back"></div>
                            </a>
                            
                                <div class="movie-btn add_to_watchlist" data-tooltip="Add to Watchlist"><img src="../assets/plus.svg" alt="plus"></div>
                            
                            <a href="../pages/watchpage.html?id=${movie.id}" >    
                                <div class="movie-btn" data-tooltip="Watch Now"><img  src="../assets/play.svg" alt="play"></div>
                            </a>
                        
                    </div><!--description-->
                    
                </div> <!--ROW2-->
            </div>

                
        </div>
        `)
    };
});