
var convertor;

convertor = $('input[name=optradio]:checked').val();
    console.log(convertor)


function changeConversionType(){
    convertor = $('input[name=optradio]:checked').val();
    if(convertor == 'Fare'){
        console.log(convertor)
        $('#farInput').val('')
        document.getElementById('main-conv').innerHTML = '&deg;F';
        document.getElementById('primary-conv').innerHTML = '<span id="farToCel"></span>&deg;C';
        document.getElementById('secondary-conv').innerHTML = '<span id="farToKel"></span>&deg;K';
        $('#farInput').attr('placeholder',"Enter Degree In Farenheit")
    }else if(convertor == 'Cel'){
        console.log(convertor)
        $('#farInput').val('')
        document.getElementById('main-conv').innerHTML = '&deg;C';
        document.getElementById('primary-conv').innerHTML = '<span id="farToCel"></span>&deg;F';
        document.getElementById('secondary-conv').innerHTML = '<span id="farToKel"></span>&deg;K';
        $('#farInput').attr('placeholder',"Enter Degree In Celcius")
    }else if(convertor == 'Kel'){
        console.log(convertor)
        $('#farInput').val('')
        document.getElementById('main-conv').innerHTML = '&deg;K';
        document.getElementById('primary-conv').innerHTML = '<span id="farToCel"></span>&deg;C';
        document.getElementById('secondary-conv').innerHTML = '<span id="farToKel"></span>&deg;F';
        $('#farInput').attr('placeholder',"Enter Degree In Kelvin")
    }
}


document.getElementById('farInput').addEventListener('input', function(e) {
    let lbs = e.target.value;
    if(convertor == 'Fare'){
        document.getElementById('farToCel').innerHTML = ((5/9)*((lbs*1)-32));
        document.getElementById('farToKel').innerHTML = ((5/9)*((lbs*1)+459.67))
   }else if(convertor == 'Cel'){
        document.getElementById('farToCel').innerHTML = ((lbs*1.8) + 32);
        document.getElementById('farToKel').innerHTML = ( (lbs*1) + 273.15);
   }else if(convertor == 'Kel'){
    document.getElementById('farToCel').innerHTML =  ((lbs*1)-273.15);
    document.getElementById('farToKel').innerHTML = ( 1.8*((lbs*1)-273) + 32);
}

})
