$(function(){
    
    console.log("Ready");
    
    $("#removal_1").on("click", function(){ 
        $(this).parent(".info").parent(".movie1").remove();
    });
    
    $("#removal2").on("click", function(){ 
        $(this).parent(".info").parent(".movie2").remove();

    });
    
    $("#removal3").on("click", function(){ 
        $(this).parent(".info").parent(".movie3").remove();

    });
    
});