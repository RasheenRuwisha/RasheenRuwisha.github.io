var prev_id;

$('#main').scroll(function(){

    var element_width = 400;
    var offset = $('#content').offset();
    var positive =  Math.abs(offset.left)
    var divided = positive / element_width;
    var round = Math.round(divided);

    var current_element = $('#content').children().eq(round);
    var id = current_element.attr('id');

    if(id != prev_id){
        prev_id = id;
        alert(id);
    }

});
