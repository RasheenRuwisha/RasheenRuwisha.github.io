
$(window).scroll(function(){
    if(isScrolledIntoView($('#main-nav'))){
        $('.fixed-nav').css('display','none')
    }else{
        $('.fixed-nav').css('display','block')
    }
});

function isScrolledIntoView(elem){
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}