$(document).ready(function() {
    if(!$('#myCanvas').tagcanvas({
        textColour:"#fff",
        outlineThickness:0.5,
        outlineColour:'#FE0853',
        maxSpeed:0.06,
        freezeActive:true,
        shuffleTags:true,
        shape:'sphere',
        zoom:0.9,
        noSelect:true,
        textFont:null,
        pinchZoom:true,
        freezeDecel:true,
        fadeIn:3000,
        initial:[0.3,-0.1],
        depth:1.4},
        'tags','start')) {
      // something went wrong, hide the canvas container
      $('#myCanvasContainer').hide();
    }
  });