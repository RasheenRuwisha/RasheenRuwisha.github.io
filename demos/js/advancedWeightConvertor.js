document.getElementById('output').style.visibility = 'hidden';

var convertor;

convertor = $('input[name=optradio]:checked').val();
    console.log(convertor)


function changeConversionType(){
    convertor = $('input[name=optradio]:checked').val();
    console.log(convertor)
    if(convertor == 'pounds'){
        $('#lbsInput').val('')
        $('#lbsInput').attr('placeholder','Enter Pounds....');
    }else if(convertor == 'kg'){
        $('#lbsInput').val('')
        $('#lbsInput').attr('placeholder','Enter Kilograms....')
    }else if(convertor == 'grams'){
        $('#lbsInput').val('')
        $('#lbsInput').attr('placeholder','Enter Grams....')
    }else if(convertor == 'ounces'){
        $('#lbsInput').val('')
        $('#lbsInput').attr('placeholder','Enter Ounces....')
    }
}



document.getElementById('lbsInput').addEventListener('input',function(e){
    let lbs = e.target.value;
    if(convertor == 'pounds'){    
        document.getElementById('output').style.visibility = 'visible';
        document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;
        document.getElementById('kgOutput').innerHTML = lbs/2.2046;
        document.getElementById('ozOutput').innerHTML = lbs*16;
   }else if(convertor == 'kg'){
        $('#lbsInput').attr('placeholder','Enter Kilograms....')
        document.getElementById('kg').innerHTML = 'Pounds';
        document.getElementById('output').style.visibility = 'visible';
        document.getElementById('gramsOutput').innerHTML = lbs*1000;
        document.getElementById('kgOutput').innerHTML = lbs*2.20462;
        document.getElementById('ozOutput').innerHTML = lbs*35.274;
   }else if(convertor == 'grams'){
        document.getElementById('grams').innerHTML = 'Pounds';
        document.getElementById('output').style.visibility = 'visible';
        document.getElementById('gramsOutput').innerHTML = lbs*0.00220462;
        document.getElementById('kgOutput').innerHTML = lbs*0.001;
        document.getElementById('ozOutput').innerHTML = lbs*0.035274;
   }else if(convertor == 'ounces'){
        document.getElementById('ounces').innerHTML = 'Pounds';
        document.getElementById('output').style.visibility = 'visible';
        document.getElementById('gramsOutput').innerHTML = lbs*28.3495;
        document.getElementById('kgOutput').innerHTML = lbs*0.0283495;
        document.getElementById('ozOutput').innerHTML = lbs*0.0625;
   }

})
