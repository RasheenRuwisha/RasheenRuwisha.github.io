
ScrollReveal().reveal('.text', { delay: 500 });



(function(){
    emailjs.init("user_vEK09wPvU925opYFgwEwa");
 })();



 

function yes(  ) {

    var templateParams = {
      mood: "Good",
      to_name: "Rasheen",
      news: "YES",
      message:"Well you got what you wanted! treat her right now you dumb fuck. Don't mess it up and break her heart.She's an awesome person!",
    
    };
 
    
    emailjs.send('service_z9rwegw', 'template_z2lxr4u', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       document.body.innerHTML = '<div id="tsparticles" class="center"> Yaay, Ill probably call you when I see this!</div>';

       loadConfettiPreset(tsParticles);

tsParticles.load("tsparticles", {
  preset: "confetti",
});


    }, function(error) {
       console.log('FAILED...', error);
    });

    
  };



function no(  ) {

    var templateParams = {
      mood: "Bad",
      to_name: "Rasheen",
      news: "NO",
      message:"Well you tried, don't treat her any different than you used to! She's an awesome person!",
    
    };
 
    
    emailjs.send('service_z9rwegw', 'template_z2lxr4u', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       document.body.innerHTML = '<div class="center"> Hope we can stay friends!</div>';

    }, function(error) {
       console.log('FAILED...', error);
    });
  };