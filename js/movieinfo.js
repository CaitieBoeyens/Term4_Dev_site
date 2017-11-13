$(function(){
    
    function get_id(){
        var id = getUrlVars()["id"];
        return (id);
    }
    
    
    
    function getUrlVars(){
        
        var vars = {};
        
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            
            vars[key] = value;
            
        });
        
        return vars;
    }
    
    console.log(get_id());
    
    
    function filterId(films, page_id){
        
        const id_match = function(movie){
            return movie.id === page_id;
        };
            
            const filtered_id = films.filter(id_match);
            
            return filtered_id;
    };
    
    $(window).load(function(){
        const page_id = get_id();
        const filtered_id = filterId(films, page_id);
        
        debugger;
        
        console.log(filtered_id);
        
        
    });
    
    
    
    
    $(function correctMovies()
    {
        $(films).each(function(){
            $("movie_info_container").append(`
            <div class="movie col-xs-12 col-sm-4">
                <div id="${filtered_id.id}" class="movie-block" data-year="${filtered_id.year}" data-genre="${filtered_id.type}" data-imdb="${filtered_id.Imdb}" data-reels="${filtered_id.reels}">
                    <div class="overlay">
                        <div class="overlay-name">
                            <h4>${filtered_id.name}</h4>
                        </div>
                        <div class="overlay-info">
                            <h5>${filtered_id.type} | ${filtered_id.year} | IMDb: ${filtered_id.Imdb}/10 | ${filtered_id.reels} Reels</h5>
                            <p>${filtered_id.description}</p>
                        </div>
                        <div class="overlay-buttons">
                            <a href="../pages/movieinfo.html?id=${filtered_id.id}">   
                                <div class="movie-btn" data-tooltip="More Info"><img  src="../assets/info.svg" alt="info"></div>
                            </a>
                            <a href="../pages/watchpage.html?id=${filtered_id.id}" >    
                                <div class="movie-btn" data-tooltip="Watch Now"><img  src="../assets/play.svg" alt="play"></div>
                            </a>
                            <a href="../pages/watchlist.html">
                                <div class="movie-btn" data-tooltip="Add to Watchlist"><img src="../assets/plus.svg" alt="plus"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            `)});

            if (window.matchMedia("(min-width: 768px)").matches) {
                $(`#${filtered_id.id}`).css("background-image", `url("${filtered_id['img-path'] }")`);
              } else {
                $(`#${filtered_id.id}`).css("background-image", `url("${filtered_id['img-ban'] }")`);
              }
            
        });
    
   
});