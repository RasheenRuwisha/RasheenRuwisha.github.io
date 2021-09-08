var acceptType = "application/json"
var token = "0PfhI6lMH3mshxjZ2Nb4XamK8PDip1xeFLGjsnTSdSxiRy5D68"

function generateImage(){
    var name = $("#name").val()
    $.ajax({
        type: "GET",
        beforeSend: function(request) {
          request.setRequestHeader("accept", acceptType);
          request.setRequestHeader("X-Mashape-Key", token);
        },
        url: "https://robohash.p.mashape.com/index.php?text="+name,
        success: function(msg) {
            $(".image").append('<img src="https://robohash.org/'+name+'">')
          console.log(msg)
        }
      });
}
