window.addEventListener('load', init);

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');


const levels={
    easy:5,
    medium:3,
    hard:2
}
var currentLevel= levels.easy;
    level = $('input[name=optradio]:checked').val();
    console.log(level)
    seconds.innerHTML = currentLevel;
function changeLevel(){
    level = $('input[name=optradio]:checked').val();
    console.log(level)
    if(level == 'easy'){
        currentLevel = levels.easy;
        seconds.innerHTML = currentLevel;
   }else if(level == 'medium'){
        currentLevel = levels.medium;
        seconds.innerHTML = currentLevel;
   }else if(level == 'hard'){
        currentLevel = levels.hard;
        seconds.innerHTML = currentLevel;
   }

   console.log(currentLevel)
}




let time  = currentLevel;
let score = 0;
let isPlaying;






const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
  ];

  
function init(){
   showWord(words);
   wordInput.addEventListener('input',startMatch)
   setInterval(countdown,1000)
   setInterval(checkStatus,50)
}

function startMatch(){
    if(matchWords()){
       isPlaying = true;
       time = currentLevel+1;
       showWord(words);
       wordInput.value='';
       score++;
    }
    if(score === -1){
        scoreDisplay.innerHTML = 0
    }else{
        scoreDisplay.innerHTML = score;
    }
   
}

function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'correct';
        return true;
    }else{
        message.innerHTML = '';
        return false;
    }
}

function showWord(words){
    const randIndex = Math.floor(Math.random()*words.length);
    currentWord.innerHTML =  words[randIndex]
}

function countdown(){
    if(time > 0){
        time--;
    }else if(time === 0){
        isPlaying = false;
    }

    timeDisplay.innerHTML = time; 
}

function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'Game Over'
        score = -1
    }
}

