$(function(){

console.log("ready");

$("#swap1").click(function(){
    $(this).parent(".overlay-buttons").parent(".overlay").parent(".movie-block1").parent("#poster1").fadeOut(400, function(){
           $(this).remove();
        });
       });

       $("#swap2").click(function(){
        $(this).parent(".overlay-buttons").parent(".overlay").parent(".movie-block2").parent("#poster2").fadeOut(400, function(){
               $(this).remove();
            });
           });

           $("#swap3").click(function(){
            $(this).parent(".overlay-buttons").parent(".overlay").parent(".movie-block3").parent("#poster3").fadeOut(400, function(){
                   $(this).remove();
                });
               });
               $("#swap4").click(function(){
                $(this).parent(".overlay-buttons").parent(".overlay").parent(".movie-block4").parent("#poster4").fadeOut(400, function(){
                       $(this).remove();
                    });
                   });
$("#swap5").click(function(){
    $(this).parent(".overlay-buttons").parent(".overlay").parent(".movie-block5").parent("#poster5").fadeOut(400, function(){
            $(this).remove();
                });
    });

    

    
       
});