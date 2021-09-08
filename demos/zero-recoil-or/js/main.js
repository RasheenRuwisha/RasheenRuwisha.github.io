$(window).scroll(function(){
        if(isScrolledIntoView($('.tour-header-text-1'))){
            removeActive();
            addActive('about','about-p')
        }else if(isScrolledIntoView($('.release-header-text-1'))){
            removeActive();
            addActive('ach','ach-p')
        } else if(isScrolledIntoView($('.contact-header-text-1'))){
            removeActive();
            addActive('cont','cont-p')
        }else if(isScrolledIntoView($('.showcase-name'))){
            removeActive();
            addActive('welcome','welcome-p')
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


function removeActive(){
    var ids = ['welcome','about','ach','cont']
    var idsP = ['welcome-p','about-p','ach-p','cont-p']

    $.each( ids, function( i, val ) {
        $( "#" + val ).removeClass('progress-item-active');
    });

    $.each( idsP, function( i, val ) {
        $( "#" + val ).addClass('hidden');
    });
}

function addActive(var1,var2){
    $('#'+var1).addClass('progress-item-active')
    $('#'+var2).removeClass('hidden')
}

function toggleNav() {
}

var toggle = false;


$( "#nav-click" ).click(function() {
    if(!toggle){
        $('.nav-content').css('visibility','visible');
        $('#nav-click').text('X');
        $('.min-nav').css('background-color','#1e1e1e');
        toggle= true;
    }else{
        $('.nav-content').css('visibility','hidden');
        $('#nav-click').text('R');
        $('.min-nav').css('background-color','transparent');
        toggle= false;

    }


});
