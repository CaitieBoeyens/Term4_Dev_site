$(function() {
    
    $(function appendAllMovies()
    {
        $(films).each(function(){
            $("#.mightLikeBody").append(`
            <div class="movie col-xs-12 col-sm-12">
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
                            <a href="">
                                <div class="movie-btn" data-tooltip="Add to Watchlist"><img src="../assets/plus.svg" alt="plus"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            `);
            $(`#${this.id}`).css("background-image", `url("${this['img-path'] }")`);
        });
    });

    
});