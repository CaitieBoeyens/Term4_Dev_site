$(function(){
    $(".add_to_watchlist").click(function(){
        
        if($(this).data("tooltip") == "Add to Watchlist"){
            $(this).attr("data-tooltip", "Remove from Watchlist");
            $(this).children("img").css("transform", "rotate(45deg)");

        } ;
        
        
        
        
    });
});