var acceptType = "application/vnd.api+json";
var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI1ZmYzYTRjMC05OTJkLTAxMzYtNmM1MS01OWVmMzg0MTg4NjEiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTM2ODA2ODkwLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6Ii04YjU1NDI4Yy03MWMyLTQyZDgtODY5YS05NmRkY2NlMjU1MGIifQ.uT8bNfiVdcY8F9A4L9EexeR8RXp2ziKkYU4F7J5koSE";
var account_id ;
function search(){
    var inputElement = document.getElementById('searchbar');
    var name = inputElement.value;
    var reigon = $('#platform-region').find(":selected").text()
    
$.ajax({
    type: "GET",
    beforeSend: function(request) {
      request.setRequestHeader("accept", acceptType);
      request.setRequestHeader("Authorization", token);
    },
    url: "https://api.pubg.com/shards/"+reigon+"/players?filter[playerNames]="+name,
    success: function(msg) {
        console.log(msg)
        var details = msg.data[0].attributes;
        account_id = msg.data[0].id;
        var card= ''
        card += `
        <div class="movie_card" id="bright">
                <div class="info_section">
                  <div class="movie_header">
                    <h1>Player Name : <span class="player-name minutes">${details.name}</span></h1>
                    <p class="minutes">Player Console - Reigon : <span class="player-console minutes">${details.shardId}</span></p>
                    <p class="minutes">Player title : <span class="player-title minutes">${details.titleId}</span> </p>
                    <p class="minutes">Last updated : <span class="last-updated minutes">${details.updatedAt}</span> </p>
                  </div>
                
                
                </div>
                <div class="blur_back bright_back"></div>
              </div>
           
              
              <div class="matches center">
               
              </div>
              `
   
              $(".details").html(card)
        var onclickdet = ''
        var matches = msg.data[0].relationships.matches.data
        for(var i = 0;i< matches.length; i++){
           
            onclickdet += `
            <p class="border" onclick='getMatchDetails("${matches[i].id}")'>
            Match ID : ${matches[i].id}
        
            </div>
            `
            $(".matches").html(onclickdet)
        }

        getSeasonData();
    }
  });
}


function getSeasonData(){

$.ajax({
    type: "GET",
    beforeSend: function(request) {
      request.setRequestHeader("accept", acceptType);
      request.setRequestHeader("Authorization", token);
    },
    url: "https://api.pubg.com/shards/pc-na/players/"+account_id+"/seasons/division.bro.official.2018-09",
    success: function(msg) {
        console.log(msg)
        
        du1o = msg.data.attributes.gameModeStats
        du1o = JSON.stringify(du1o)
        du1o =du1o.replace("duo-fpp","duofpp")
        du1o =du1o.replace("solo-fpp","solofpp")
        du1o =du1o.replace("squad-fpp","squadfpp")
       du1o = JSON.parse(du1o)
        var duo = msg.data.attributes.gameModeStats.duo;
       var duo_fpp = du1o.duofpp;
       var solo = msg.data.attributes.gameModeStats.solo;
       var solo_fpp = du1o.solofpp;
       var squad = msg.data.attributes.gameModeStats.squad;
       var squad_fpp = du1o.squadfpp;
       console.log(duo_fpp)

        var card= ''
        card += `
      <div class="container">  
  
<table class="table table-striped">
<thead>
<tr>
  <th>Game Mode</th>
  <th>Assists</th>
  <th>Damage Dealt</th>
  <th>HeadShots</th>
  <th>Kills</th>
  <th>Longest Time Survived</th>
  <th>Losses</th>
  <th>Revives</th>
  <th>Road Kills</th>
  <th>Most Kill Per Round</th>
  <th>Rounds Played</th>
  <th>Suicides</th>
  <th>Top 10s</th>
  <th>Vehicles Destroyed</th>
  <th>Weekly Kills</th>
  <th>Wins</th>
</tr>
</thead>
<tbody>
<tr>
    <td>DUO</td>
    <td>${duo.assists}</td>
  <td>${duo.damageDealt}</td>
  <td>${duo.headshotKills}</td>
  <td>${duo.kills}</td>
  <td>${duo.longestTimeSurvived}</td>
  <td>${duo.losses}</td>
  <td>${duo.revives}</td>
  <td>${duo.roadKills}</td>
  <td>${duo.roundMostKills}</td>
  <td>${duo.roundsPlayed}</td>
  <td>${duo.suicides}</td>
  <td>${duo.top10s}</td>
  <td>${duo.vehicleDestroys}</td>
  <td>${duo.weeklyKills}</td>
  <td>${duo.wins}</td>
</tr>
   <tr>
    <td>DUO-FPP</td>
    <td>${duo_fpp.assists}</td>
  <td>${duo_fpp.damageDealt}</td>
  <td>${duo_fpp.headshotKills}</td>
  <td>${duo_fpp.kills}</td>
  <td>${duo_fpp.longestTimeSurvived}</td>
  <td>${duo_fpp.losses}</td>
  <td>${duo_fpp.revives}</td>
  <td>${duo_fpp.roadKills}</td>
  <td>${duo_fpp.roundMostKills}</td>
  <td>${duo_fpp.roundsPlayed}</td>
  <td>${duo_fpp.suicides}</td>
  <td>${duo_fpp.top10s}</td>
  <td>${duo_fpp.vehicleDestroys}</td>
  <td>${duo_fpp.weeklyKills}</td>
  <td>${duo_fpp.wins}</td>
</tr>
   <tr>
    <td>SOLO</td>
    <td>${solo.assists}</td>
  <td>${solo.damageDealt}</td>
  <td>${solo.headshotKills}</td>
  <td>${solo.kills}</td>
  <td>${solo.longestTimeSurvived}</td>
  <td>${solo.losses}</td>
  <td>${solo.revives}</td>
  <td>${solo.roadKills}</td>
  <td>${solo.roundMostKills}</td>
  <td>${solo.roundsPlayed}</td>
  <td>${solo.suicides}</td>
  <td>${solo.top10s}</td>
  <td>${solo.vehicleDestroys}</td>
  <td>${solo.weeklyKills}</td>
  <td>${solo.wins}</td>
</tr>
   <tr>
    <td>SOLO-FPP</td>
    <td>${solo_fpp.assists}</td>
  <td>${solo_fpp.damageDealt}</td>
  <td>${solo_fpp.headshotKills}</td>
  <td>${solo_fpp.kills}</td>
  <td>${solo_fpp.longestTimeSurvived}</td>
  <td>${solo_fpp.losses}</td>
  <td>${solo_fpp.revives}</td>
  <td>${solo_fpp.roadKills}</td>
  <td>${solo_fpp.roundMostKills}</td>
  <td>${solo_fpp.roundsPlayed}</td>
  <td>${solo_fpp.suicides}</td>
  <td>${solo_fpp.top10s}</td>
  <td>${solo_fpp.vehicleDestroys}</td>
  <td>${solo_fpp.weeklyKills}</td>
  <td>${solo_fpp.wins}</td>
</tr>
   <tr>
    <td>SQUAD</td>
    <td>${squad.assists}</td>
  <td>${squad.damageDealt}</td>
  <td>${squad.headshotKills}</td>
  <td>${squad.kills}</td>
  <td>${squad.longestTimeSurvived}</td>
  <td>${squad.losses}</td>
  <td>${squad.revives}</td>
  <td>${squad.roadKills}</td>
  <td>${squad.roundMostKills}</td>
  <td>${squad.roundsPlayed}</td>
  <td>${squad.suicides}</td>
  <td>${squad.top10s}</td>
  <td>${squad.vehicleDestroys}</td>
  <td>${squad.weeklyKills}</td>
  <td>${squad.wins}</td>
</tr>
   <tr>
    <td>SQUAD-FPP</td>
    <td>${squad_fpp.assists}</td>
  <td>${squad_fpp.damageDealt}</td>
  <td>${squad_fpp.headshotKills}</td>
  <td>${squad_fpp.kills}</td>
  <td>${squad_fpp.longestTimeSurvived}</td>
  <td>${squad_fpp.losses}</td>
  <td>${squad_fpp.revives}</td>
  <td>${squad_fpp.roadKills}</td>
  <td>${squad_fpp.roundMostKills}</td>
  <td>${squad_fpp.roundsPlayed}</td>
  <td>${squad_fpp.suicides}</td>
  <td>${squad_fpp.top10s}</td>
  <td>${squad_fpp.vehicleDestroys}</td>
  <td>${squad_fpp.weeklyKills}</td>
  <td>${squad_fpp.wins}</td>
</tr>
</tbody>
</table>
</div>
        `
        
        $(".season-details").html(card)

    }
  });

}










  function getMatchDetails(matchID){
  $.ajax({
      type: "GET",
      beforeSend: function(request) {
        request.setRequestHeader("accept", acceptType);
        request.setRequestHeader("Authorization", token);
      },
      url: "https://api.pubg.com/shards/pc-na/matches/"+matchID,
      success: function(msg) {
  
        console.log(msg)
      }
    });
}