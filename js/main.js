// NiceScroll
$(document).ready(
  function() {
    $("html").niceScroll({
      scrollspeed:200,
      mousescrollstep: 200,
      cursorborder: "none",
      cursorcolor: "none",
      touchbehavior: false,
      bouncescroll: true
    });
  }
);

$("body").addClass("load");

// Deatil Controls
    $(".btn-remember").click(function(){
        $(".btn-remember").toggleClass("btn-active");
    });
    $(".btn-cart").click(function(){
        $(".btn-cart").toggleClass("btn-active");
    });

// Hiding Navigation
    $("div.navbar-fixed-top").autoHidingNavbar();

// Parallax Scrolling
    $(window).scroll(function(e){
    parallax();
    });
    function parallax(){
        var scrolled = $(window).scrollTop();
            $('.hero').css('top',-(scrolled*0.0200)+'rem');
            $('.hero > div').css('top',-(scrolled*-0.005)+'rem');
            $('.hero > div ').css('opacity',1-(scrolled*.001));
    };

// Scroll to top
    $('.scrolltop').click(function(e)
    {
      $('html, body').animate({'scrollTop': 0}, 1500);
      e.preventDefault();
    });

// Arrow Collapse
    $('.collapse').on('shown.bs.collapse', function(){
      $(this).parent().find(".fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-up");
        }).on('hidden.bs.collapse', function(){
        $(this).parent().find(".fa-angle-up").removeClass("fa-angle-up").addClass("fa-angle-down");
    });

// Background-Slider
$('#carousel-hero').carousel({ interval: 5000 });

$('#carousel-impression').carousel({
  interval: 4000,
  keyboard: true
});

$('#carousel-static').carousel({ interval: 6000 });

// Nav-Search
new UISearch( document.getElementById( 'sb-search' ) );

// Background-Video
$(window).on('load resize', function() {
  if ($(window).width() > 1200) {
     $( "#hero-video" ).load( "video.html video");
  }
 else {
 }
});