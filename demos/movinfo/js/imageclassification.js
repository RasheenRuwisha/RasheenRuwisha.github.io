let mobilenet;

let puffin;
var inputElement = document.getElementById('input')

function readURL(input) {

    if (input.files && input.files[0]) {
      var reader = new FileReader();
  
      reader.onload = function(e) {
        puffin = createImg(e.target.result,imageReady);
        puffin.hide()
        mobilenet = ml5.imageClassifier('MobileNet',modelReady);
      }
  
      reader.readAsDataURL(input.files[0]);
    }
  }

 
function modelReady(){
        console.log("model is ready")
        mobilenet.predict(puffin,gotResults);
}

function imageReady(){
    image(puffin,0,0,width,height)
}

function gotResults(error,results){
    if(error){
        console.error("Error")
    }else{
        console.log(results)
        let label = results[0].className;
        let prob = results[0].probability;
        fill(0);
        textSize(20);
        createP("The MobileNet model labeled this ⤴ as a " +label)
        createP("With a confidence of" +prob)
    }
}

function setup(){
    createCanvas(400,300);
    background(0);
    inputElement.onchange = function(event) {
        readURL(this)
          
    }
    
  
}