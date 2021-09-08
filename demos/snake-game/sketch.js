// Daniel Shiffman
// http://youtube.com/thecodingtrain
// http://codingtra.in

// Coding Challenge #115: Snake Game Redux
// https://youtu.be/OMoVcohRgZA

let snake;
let rez = 20;
let food;
let w;
let h;

let video;
let classifier;
let label = 'waiting';  

function preload(){
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/1Pw-7obag/')
}

function setup() {
  createCanvas(400, 400);

  video = createCapture(VIDEO)
  video.hide()
    classifyVideo()
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  snake = new Snake();
  foodLocation();
}

function classifyVideo(){
  classifier.classify(video,gotResults)
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }

}

function draw() {
  scale(rez);
  background(220);
  image(video,0,0)
  text(label,10,50)
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.show();


  if (snake.endGame()) {
    print("END GAME");
    background(255, 0, 0);
    noLoop();
  }

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}


function gotResults(error, results){
  if(error){
      console.log(error)
  }

  console.log(results)
  resultsDiv.html(results[0].label)

  doodleClassifier.classify(canvas, gotResults)
}