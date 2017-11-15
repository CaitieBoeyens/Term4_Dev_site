$(function(){
    attachAddToWatchlistClickHandler();
});
function attachAddToWatchlistClickHandler() {
    $(".add_to_watchlist").click(function(){
        
        if($(this).attr("data-tooltip") === "Add to Watchlist"){
            $(this).attr("data-tooltip", "Remove from Watchlist");
            $(this).children("img").css("transform", "rotate(45deg)");
        } else {
            $(this).attr("data-tooltip", "Add to Watchlist");
            $(this).children("img").css("transform", "rotate(0deg)");
        }
    });
}