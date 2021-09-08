var api =   "https://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=dU61KnWrs4MVc8vCE5HQpa25IzZTYr8j";
var query = "&q=rainbow"

var inputElement = document.getElementById('searchbar');
var button = document.getElementById('button')

button.onclick = function() {
    query = "&q="+ inputElement.value;
    console.log(query)
    var url = api + apiKey + query;
    loadJSON(url,gotData);
    console.log(url)
    
}
function setup(){
    noCanvas();
} 



function gotData(data){
    removeElements();
    for(var i = 0;i<data.data.length;i++){
     var img =   createImg(data.data[i].images.original.url,100,100)
    }
    console.log("done")

}

function draw(){

}
