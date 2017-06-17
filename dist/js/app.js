//$(document).ready(function() {

  //audiojs.events.ready(function() {
    //var as = audiojs.createAll();
  //});

//});


$(document).ready(function(){
   
   $('.welcome-block__hamburger').click(function(){
       $(this).toggleClass('welcome-block__hamburger--active');
       $('.welcome-block__menu').toggleClass('welcome-block__menu--show')
   });
   
});
