// your_config.js
emailjs.init('kUb7DHGBGSoC_P7J4');

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get values from the form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    // Send email using EmailJS
    emailjs.send("service_zo4fhia", "template_7vwux1c", {
      from_name: name,
      from_email: email,
      message: message
    })
    .then(function(response) {
      console.log('Email sent successfully', response);
      alert('Your message has been sent successfully!');
      // Optionally, clear the form fields after successful submission
      document.getElementById('contact-form').reset();
    }, function(error) {
      console.error('Email sending failed', error);
      alert('An error occurred while sending your message. Please try again later.');
    });
  });
  
