// ml5.js: Classifying Drawings with DoodleNet (Template)
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/learning/ml5/9.1-doodlenet.html
// https://youtu.be/ABN_DWnM5GQ

// Template: https://editor.p5js.org/codingtrain/sketches/AHgkwgPdc
// Mouse: https://editor.p5js.org/codingtrain/sketches/6LLnGY1VY
// Video: https://editor.p5js.org/codingtrain/sketches/fxFKOn3il

let clearButton;
let canvas;
let doodleClassifier;
let resultsDiv;
let video;

function setup() {
  canvas = createCanvas(400, 400);
  clearButton = createButton('clear');
  clearButton.mousePressed(clearCanvas);
  background(255);

  resultsDiv = createDiv('model loading')
  doodleClassifier = ml5.imageClassifier('DoodleNet', modelReady)
  video = createCapture(VIDEO)
  video.hide()
}

function modelReady(){
    console.log('Model ready')
    doodleClassifier.classify(canvas, gotResults)
}

function gotResults(error, results){
    if(error){
        console.log(error)
    }

    console.log(results)
    resultsDiv.html(results[0].label)

    doodleClassifier.classify(canvas, gotResults)
}

function clearCanvas() {
  background(255);
}

function draw() {
  image(video,0 ,0, width, height)
  filter(THRESHOLD,0.7)
}
