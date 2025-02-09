function setup(){
    createCanvas(400,400)
    angleMode(DEGREES)
}

function draw(){
    background("#2a2a2a")
    translate(200,200)
    rotate(-90 )

    let hr = hour();
    let mn = minute();
    let sc = second();


    // strokeWeight(4);
    // stroke(255)
    // noFill()
    // ellipse(200,200,300,300)

    strokeWeight(8);
    noFill();
    stroke(255,100,150);
    let  secondsAngle = map(sc,0,60,0,360);
    arc(0,0,300,300,0,secondsAngle);

    stroke(150,100,255);
    let  minuteAngle = map(mn,0,60,0,360);
    arc(0,0,280,280,0,minuteAngle);

    stroke(150,255,100);
    let  hourAngle = map(hr % 12,0,12,0,360);
    arc(0,0,260,260,0,hourAngle);


    push();
    rotate(secondsAngle);
    stroke(255,100,150);
    line(0,0,100,0);
    pop();

    push();
    rotate(minuteAngle);
    stroke(150,100,255);
    line(0,0,75,0);
    pop();

    push();
    rotate(hourAngle);
    stroke(150,255,100);
    line(0,0,50,0);
    pop();
}