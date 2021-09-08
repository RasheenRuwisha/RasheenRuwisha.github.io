const introSection = document.querySelector('.intro');
const video  = introSection.querySelector('video');
const text = introSection.querySelector('h1');
const endSection = document.querySelector('section');
const endText = endSection.querySelector('h1');

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration:4000,
    triggerElement:introSection,
    triggerHook:0
}).setPin(introSection).addTo(controller);




const textAnimation = TweenMax.fromTo(text, 3, {opacity: 1}, {opacity: 0})



const scene2 = new ScrollMagic.Scene({
    duration:3000,
    triggerElement:introSection,
    triggerHook:0
}).setTween(textAnimation).addTo(controller);


const gyroSec = document.querySelector('.hero-1');
const video2  = gyroSec.querySelector('video');
const text2 = gyroSec.querySelector('h1');
const text21 = gyroSec.querySelector('p');
const textAnimation2 = TweenMax.fromTo(text2, 5, {opacity: 0}, {opacity: 1})
const textAnimation21 = TweenMax.fromTo(text21, 2, {opacity: 1}, {opacity: 0})

const scene3 = new ScrollMagic.Scene({
    duration:3500,
    triggerElement:gyroSec,
    triggerHook:0
}).setPin(gyroSec).addTo(controller);

const gyroText = new ScrollMagic.Scene({
    duration:2500,
    triggerElement:gyroSec,
    triggerHook:0
}).setTween(textAnimation2).addTo(controller);

const gyroText2 = new ScrollMagic.Scene({
    duration:3400,
    triggerElement:gyroSec,
    triggerHook:0
}).setTween(textAnimation21).addTo(controller);

const cmSec = document.querySelector('.hero-2');
const video3  = cmSec.querySelector('video');
const text3 = cmSec.querySelector('h1');
const text31 = cmSec.querySelector('p');
const textAnimation3 = TweenMax.fromTo(text3, 3, {opacity: 0}, {opacity: 1})
const textAnimation31 = TweenMax.fromTo(text31, 3, {opacity: 1}, {opacity: 0})

const scene4 = new ScrollMagic.Scene({
    duration:3500,
    triggerElement:cmSec,
    triggerHook:0
}).setPin(cmSec).addTo(controller);

const cmText = new ScrollMagic.Scene({
    duration:4000,
    triggerElement:cmSec,
    triggerHook:0
}).setTween(textAnimation3).addTo(controller);

const cmText1 = new ScrollMagic.Scene({
    duration:2000,
    triggerElement:cmSec,
    triggerHook:0
}).setTween(textAnimation31).addTo(controller);


const fightSec = document.querySelector('.hero-3');
const video4  = fightSec.querySelector('video');
const text4 = fightSec.querySelector('p');
const textAnimation4 = TweenMax.fromTo(text4, 3, {opacity: 1}, {opacity: 0})

const scene5 = new ScrollMagic.Scene({
    duration:5000,
    triggerElement:fightSec,
    triggerHook:0
}).setPin(fightSec).addTo(controller);

const fightText = new ScrollMagic.Scene({
    duration:3000,
    triggerElement:fightSec,
    triggerHook:0
}).setTween(textAnimation4).addTo(controller);



const finalSec = document.querySelector('.hero-4');
const video5  = finalSec.querySelector('video');
const text5 = finalSec.querySelector('h1');
const textAnimation5 = TweenMax.fromTo(text5, 20, {opacity: 0}, {opacity: 1})

const scene6 = new ScrollMagic.Scene({
    duration:3000,
    triggerElement:finalSec,
    triggerHook:0
}).setPin(finalSec).addTo(controller);

const finalText = new ScrollMagic.Scene({
    duration:3000,
    triggerElement:finalSec,
    triggerHook:0
}).setTween(textAnimation5).addTo(controller);




let accelAmount = 0.1;
let scrollPos = 0;
let delay = 0;

let accelAmount1 = 0.1;
let scrollPos1 = 0;
let delay1 = 0;

let accelAmount2 = 0.1;
let scrollPos2 = 0;
let delay2 = 0;

let accelAmount3 = 0.1;
let scrollPos3 = 0;
let delay3 = 0;

let accelAmount4 = 0.1;
let scrollPos4 = 0;
let delay4 = 0;


scene.on('update' ,e =>{
    scrollPos = e.scrollPos / 500; 
})

scene3.on('update' ,e =>{
    scrollPos1 = (e.scrollPos - 6000) / 500; 
})

scene4.on('update' ,e =>{
    scrollPos2 = (e.scrollPos - 10000) / 1000; 
})

scene5.on('update' ,e =>{
    scrollPos3 = (e.scrollPos - 15000) / 250; 
})

scene6.on('update' ,e =>{
    scrollPos4 = (e.scrollPos - 21000) / 500; 
})

setInterval(() =>{
    delay += (scrollPos - delay) * accelAmount;
    console.log("1",scrollPos, delay)
    video.currentTime = delay;

    delay1 += (scrollPos1 - delay1) * accelAmount1;
    console.log("2",scrollPos1, delay1)
    video2.currentTime = delay1;

    delay2 += (scrollPos2 - delay2) * accelAmount2;
    console.log("2",scrollPos2, delay2)
    video3.currentTime = delay2;

    delay3 += (scrollPos3 - delay3) * accelAmount3;
    console.log("2",scrollPos3, delay3)
    video4.currentTime = delay3;

    delay4 += (scrollPos4 - delay4) * accelAmount4;
    console.log("2",scrollPos4, delay4)
    video5.currentTime = delay4;
}, 33.3)

