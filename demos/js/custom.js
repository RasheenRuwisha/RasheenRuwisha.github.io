
var availableTags = [];
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:8586/movie/all",
        "method": "GET",
    }

    $.ajax(settings).done(function (response) {
        for(i=0;i<response.length;i++){
            availableTags.push(response[i].title);
            console.log(availableTags);
        }

    });







$( function() {
    $( "#search" ).autocomplete({
        source: availableTags
    });
} );

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    nav : false,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:false,
            loop:true
        }
    }
});

$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

function myFunction(id) {
    location.href = "/movie/view/"+id.rowIndex;
}

function searchFunction() {
    var name = document.getElementById("search").value
    location.href = "/movie/details/"+name;
}
