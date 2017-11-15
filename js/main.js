$(function(){
    $(".add_to_watchlist").click(function(){
        console.log("Hellllooooo");
        if($(this).data("tooltip") === "Add to Watchlist"){
            $(this).attr("data-tooltip", "Remove from Watchlist");
            $(this).children("img").css("transform", "rotate(45deg)");
            console.log($(this).data("tooltip"));

        } else {
            $(this).attr("data-tooltip", "Add to Watchlist");
            $(this).children("img").css("transform", "rotate(0deg)");
            console.log("lol k");
        } ;

        
        
    
        
        
    });
});