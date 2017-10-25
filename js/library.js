$(function(){
    
    $(function appendAllMovies()
    {
        $(films).each(function(){
            $("#all_movie_container").append(`
            <div class="movie col-xs-12 col-sm-4">
                <div id="${this.id}" class="movie-block">
                    <div class="overlay">
                        <div class="overlay-name">
                            <h4>${this.name}</h4>
                        </div>
                        <div class="overlay-info">
                            <h5>${this.type} | ${this.year} | IMDb: ${this.Imdb}/10 | 4 Reels</h5>
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