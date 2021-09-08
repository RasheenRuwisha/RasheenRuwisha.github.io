let fact =  document.querySelector('#fact');
let factText = document.querySelector('#factText');

let numberInput = document.querySelector('#numberInput');


function getFactAjax(){
    let number = numberInput.value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET','http://numbersapi.com/'+number);
    xhr.onload = function(){
        if(this.status == 200 && number != ''){
            fact.style.display = 'block';
            factText.innerHTML = this.responseText
        }
    }

    xhr.send();
}


function getFactFetch(){
    let number  = numberInput.value;
    fetch('http://numbersapi.com/'+number+'/math').then(response => response.text())
    .then(data =>{
        if(number != ''){
            fact.style.display = 'block';
            factText.innerHTML = data
        }
    }).catch(err => console.log(err))
}


var convertor;

convertor = $('input[name=optradio]:checked').val();
    console.log(convertor)
    numberInput.addEventListener('input',changeConversionType);
    function changeConversionType(){
        convertor = $('input[name=optradio]:checked').val();
        if(convertor == 'trivia'){
            console.log(convertor)
            let number = numberInput.value;
            let xhr = new XMLHttpRequest();
            xhr.open('GET','http://numbersapi.com/'+number);
            xhr.onload = function(){
                if(this.status == 200 && number != ''){
                    fact.style.display = 'block';
                    factText.innerHTML = this.responseText
                }
            }
        
            xhr.send();
        }else if(convertor == 'maths'){
            console.log(convertor)
            let number  = numberInput.value;
            fetch('http://numbersapi.com/'+number+'/math').then(response => response.text())
            .then(data =>{
                if(number != ''){
                    fact.style.display = 'block';
                    factText.innerHTML = data
                }
            }).catch(err => console.log(err))
        }else if(convertor == 'year'){
            console.log(convertor)
            let number  = numberInput.value;
            fetch('http://numbersapi.com/'+number+'/year').then(response => response.text())
            .then(data =>{
                if(number != ''){
                    fact.style.display = 'block';
                    factText.innerHTML = data
                }
            }).catch(err => console.log(err))
        }
    }