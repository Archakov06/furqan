//$(document).ready(function() {

  //audiojs.events.ready(function() {
    //var as = audiojs.createAll();
  //});

//});


$(document).ready(function(){

    function openMenu(side) {
        $('.side-menu--' + side).toggleClass('side-menu--' + side + '-show');
    }

   $('.header__hamburger').click(function(){
       $(this).toggleClass('header__hamburger--active');
       openMenu('left');
   });

    $('.header__language, .side-menu--right h3').click(function(){
        openMenu('right');
    }); 

    $('.welcome-block__logo-big').addClass('fadeInUp');

    $('.side-menu--right a').click(function(){
        var language = $(this).text();
        $('span').text(language);
        openMenu('right');
        var a = $(this).attr('data-language');
        
   });

   
});
