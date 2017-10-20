$(function() {
   $('[data-toggle="popover"]').popover();

   $("#signup_button").click( (event) => {
       event.preventDefault();
       $("#login_container").fadeOut(400).promise().then( () => {
           $("#signup_container").fadeIn(400);
       });
   });
});