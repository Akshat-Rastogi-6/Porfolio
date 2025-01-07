// your_config.js
emailjs.init({publicKey : 'uRaOggD5yN0CVZl2O'});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get values from the form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    // Send email using EmailJS
    emailjs.send("service_2ic6gc9", "template_nwyiq7y", {
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

  document.getElementById("hire-button").addEventListener("click", function() {
    document.getElementById("message").value = "I'm interested in hiring you. Please contact me!";
    document.getElementById("contact-form").scrollIntoView({ behavior: 'smooth' });
  });
  
