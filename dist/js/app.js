//$(document).ready(function() {

  //audiojs.events.ready(function() {
    //var as = audiojs.createAll();
  //});

//});


$(document).ready(function(){

   $('.welcome-block__hamburger').click(function(){
       $(this).toggleClass('welcome-block__hamburger--active');
       $('.welcome-block__side-menu--left').toggleClass('welcome-block__side-menu--left-show');
     
   });

    $('.welcome-block__language').click(function(){
        $(this).toggleClass('welcome-block__language--active');
        $('.welcome-block__side-menu--right').toggleClass('welcome-block__side-menu--right-show');
    }); 

    $('.welcome-block__logo-big').addClass('fadeInUp');
   
});
