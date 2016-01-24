$(document).ready(function() {

    var owl = $("#owl-demo");

    owl.owlCarousel({
        items : 3, //10 items above 1000px browser width
        //responsiveBaseWidth : ".slider"
        responsive : false,
        autoPlay : 4000,
        loop: true,
    });

    // Custom Navigation Events
    $(".next").click(function(){
        owl.trigger('next.owl.carousel');
    });
    $(".prev").click(function(){
        owl.trigger('prev.owl.carousel');
    });

});