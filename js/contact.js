(function(){
    emailjs.init("user_vEK09wPvU925opYFgwEwa");
 })();


 

$( "#contact-form" ).submit(function( event ) {
    event.preventDefault();

    var templateParams = {
        name: $( "#name" ).val(),
        message: $( "#msg" ).val(),
        email:$( "#email" ).val(),
        subject:$( "#subject" ).val(),
    
    };
 
    
    emailjs.send('service_z9rwegw', 'template_2jbt1bd', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  });
