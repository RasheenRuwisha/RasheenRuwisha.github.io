var token = "34a6434f5060453e917110821181709"
var forecast = [];
function getWeather(city){
    // var name = $("#name").val()
    // alert(name)
    $.ajax({
        type: "GET",
        url: "https://api.apixu.com/v1/forecast.json?key="+token+"&q="+city+"&days=7",
        success: function(msg) {
         forecast = msg.forecast.forecastday;
            var output = '';
            var forecasts = '';
            output += 
            `
            
            <div class="weather-icon row">
          <img src="http:${msg.current.condition.icon}">
        </div>
        <h1 class="temp-c row">${msg.current.temp_c}C</h1>
        <h5 class="condition row">${msg.current.condition.text}</h5>
        <h5 class="condition row">Feels Like : ${msg.current.feelslike_c}</53>
        <h5 class="condition row">  <i class="wi wi-wind-beaufort-0"></i>   ${msg.current.wind_kph}</h5>
        <h5 class="condition row">  <i class="wi wi-humidity"></i>   ${msg.current.humidity}</h5>
        <h3 class="location-name row">${msg.location.name}</h3>
        <h5 class="location-country row">${msg.location.country} - ${msg.location.tz_id}</h5>
            `


            for(var i = 0;i<forecast.length;i++){
                var array = forecast[i].date.split("-")
                forecasts+=
                `
                <div class="forecast-item" onclick="getSingle("${forecast[i]}")">
          <div class="day">
            <h4>${forecast[i].date}</h4>
            <h6>${getMonth(forecast[i].date)} ${array[2]} </h6>
          </div>
          <div class="forecast">
            <img style="float:left;" src="https:${forecast[i].day.condition.icon}"> ${forecast[i].day.mintemp_c}C - ${forecast[i].day.maxtemp_c}C 
            <h6>${forecast[i].day.condition.text}</h6>
          </div>
        </div>
                `
            }
          console.log(msg)
            $(".weather-forecast").html(forecasts)
          $(".current-weather").html(output)
        }
      });
}

getWeather("Moratuwa")

function getMonth(date){
    var month;
    var array = date.split("-")
    if(array[1] == "01"){
        month = "Jan"
    }else if(array[1] == "02"){
        month = "Feb"
    }else if(array[1] == "03"){
        month = "Mar"
    }else if(array[1] == "04"){
        month = "Apr"
    }else if(array[1] == "05"){
        month = "May"
    }else if(array[1] == "06"){
        month = "Jun"
    }else if(array[1] == "07"){
        month = "Jul"
    }else if(array[1] == "08"){
        month = "Aug"
    }else if(array[1] == "09"){
        month = "Sept"
    }else if(array[1] == "10"){
        month = "Oct"
    }else if(array[1] == "11"){
        month = "Nov"
    }else if(array[1] == "12"){
        month = "Dec"
    }

    return month
}



function searchCity(){
    var searchbar = $("#searchVal").val();
    getWeather(searchbar);
}

function getSingle(index){
    
}