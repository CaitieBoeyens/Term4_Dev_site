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
                <div id="${this.id}" class="movie-block" data-year="${this.year}" data-genre="${this.type}" data-imdb="${this.Imdb}" data-reels="${this.reels}">
                    <div class="overlay">
                        <div class="overlay-name">
                            <h4>${this.name}</h4>
                        </div>
                        <div class="overlay-info">
                            <h5>${this.type} | ${this.year} | IMDb: ${this.Imdb}/10 | ${this.reels} Reels</h5>
                            <p>${this.description}</p>
                        </div>
                        <div class="overlay-buttons">
                            <a href="">   
                                <div class="movie-btn" data-tooltip="More Info"><img  src="../assets/info.svg" alt="info"></div>
                            </a>
                            <a href="" >    
                                <div class="movie-btn" data-tooltip="Watch Now"><img  src="../assets/play.svg" alt="play"></div>
                            </a>
            
                                <div id="${this.id}" class="movie-btn" data-tooltip="Add to Watchlist"><img src="../assets/plus.svg" alt="plus"></div>
                            
                        </div>
                    </div>
                </div>
            </div>
            `);

            if (window.matchMedia("(min-width: 768px)").matches) {
                $(`#${this.id}`).css("background-image", `url("${this['img-path'] }")`);
              } else {
                $(`#${this.id}`).css("background-image", `url("${this['img-ban'] }")`);
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
    
    
    
        
    
    
    
    
  /* if(localStorage){
        $(document).ready(function(){
            
            
            $("#film1").each(function(){
                
                $(this).click(function(){
                
                    $(this).children("img").css({"transform" : "rotate(45deg)"});
                    $(this).attr("data-tooltip", "Remove from Watchlist");
                    
            
                    var index = $(this).parent("overlay-buttons").parent("overlay").parent(".movie-block").attr("id");
            
                    localStorage.setItem("numberFilm", index);
            
                    console.log(index);
                
                });
                
            });  
        });
        
        
    };*/
    
    
        
        
    });
    
