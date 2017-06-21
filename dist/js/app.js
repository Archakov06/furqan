//$(document).ready(function() {

  //audiojs.events.ready(function() {
    //var as = audiojs.createAll();
  //});

//});


$(document).ready(function(){

    function openMenu(side) {
        $('.welcome-block__side-menu--' + side).toggleClass('welcome-block__side-menu--' + side + '-show');
    }

   $('.welcome-block__hamburger').click(function(){
       $(this).toggleClass('welcome-block__hamburger--active');
       openMenu('left');
   });

    $('.welcome-block__language, .welcome-block__side-menu--right h3').click(function(){
        openMenu('right');
    }); 

    $('.welcome-block__logo-big').addClass('fadeInUp');

    $('.welcome-block__side-menu--right a').click(function(){
        var language = $(this).text();
        $('span').text(language);
        openMenu('right');
        var a = $(this).attr('data-language');
        alert(a);
   });

   
});
