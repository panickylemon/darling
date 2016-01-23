$(document).ready(function() {

    var owl = $("#owl-demo");

    owl.owlCarousel({
        items : 3, //10 items above 1000px browser width
        //responsiveBaseWidth : ".slider"
        responsive : false
    });

    // Custom Navigation Events
    $(".next").click(function(){
        owl.trigger('owl.next');
    });
    $(".prev").click(function(){
        owl.trigger('owl.prev');
    });
    $(".play").click(function(){
        owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
    });
    $(".stop").click(function(){
        owl.trigger('owl.stop');
    })

});