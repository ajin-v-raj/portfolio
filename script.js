
  var detailsElement = document.getElementById('details');
  var detailTxtElement = document.getElementById('detail_txt');
  var detailsElement1 = document.getElementById('details1');
  var detailTxtElement1 = document.getElementById('detail_txt1');

  detailsElement.addEventListener('mouseover', function() {
    // Show the detail_txt element when details is hovered
    detailTxtElement.style.display = 'block';
  });

  detailsElement.addEventListener('mouseout', function() {
    // Hide the detail_txt element when mouse leaves details
    detailTxtElement.style.display = 'none';

    
  });
  if (window.innerWidth <= 1024) {
    window.addEventListener('scroll', function() {
        // Hide the detail_txt element when scrolling on small screens
        detailTxtElement.style.display = 'block';
  });
}
  detailsElement1.addEventListener('mouseover', function() {
    // Show the detail_txt element when details is hovered
    detailTxtElement1.style.display = 'block';
  });

  detailsElement1.addEventListener('mouseout', function() {
    // Hide the detail_txt element when mouse leaves details
    detailTxtElement1.style.display = 'none';

    
  });
  if (window.innerWidth <= 1024) {
    window.addEventListener('scroll', function() {
        // Hide the detail_txt element when scrolling on small screens
        detailTxtElement1.style.display = 'block';
  });
}



  // Get all progress bars
  var progressBars = document.querySelectorAll('.progress-bar');

  // Function to check if an element is in the viewport
  function isInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  // Function to handle scroll event
  function handleScroll() {
      progressBars.forEach(function (progressBar) {
          if (isInViewport(progressBar)) {
              progressBar.classList.add('animated');
              progressBar.style.opacity = 1; // Show the progress bar
          }
      });

      // Remove the event listener after the animation has been applied to all progress bars
      if (document.querySelectorAll('.animated').length === progressBars.length) {
          window.removeEventListener('scroll', handleScroll);
      }
  }

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);


  

       
const text = "Proficient Python Developer with a comprehensive skill set spanning Python, Django, React, MySQL, HTML5, JavaScript, Bootstrap, CSS, and AJAX.";

const container = document.getElementById("typing-container");

function typeText(index) {
            container.textContent = text.slice(0, index) + '|';
            if (index < text.length) {
                setTimeout(() => typeText(index + 1), 50); 
            } else {
                container.textContent = text; 
            }
        }

        document.addEventListener('DOMContentLoaded', function() {
            typeText(0);
        });
    

        function sendmail() {
          var name = document.getElementById('nameInput').value;
          var mail = document.getElementById('emailInput').value;
          var msg = document.getElementById('messageTextarea').value;
          var sub = 'Name: ' + name;
          var msgbody = 'Name: ' + name + '<br> Mail: ' + mail + '<br> Message: ' + msg;
      
          // Return the Promise from Email.send()
          return Email.send({
              Host: "smtp.elasticemail.com",
              Username: "ajinvrj@gmail.com",
              Password: "6C4D933A9A5AB6211D52499D2CC4B82DD195",
              To: 'ajinvrj@gmail.com',
              From: mail,
              Subject: sub,
              Body: msgbody
          }).then(
              message => {
                  if (message === 'OK') {
                      swal("Good job!", "Mail Sent Successfully!", "success");
                  } else {
                      swal("Good job!", "Mail Not Sent!", "error");
                  }
              }
          );
      }
      
      function validateForm() {
          var name = document.getElementById('nameInput').value;
          var email = document.getElementById('emailInput').value;
          var message = document.getElementById('messageTextarea').value;
      
          if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
              alert('Please fill in all required fields.');
              return false; // Prevent form submission
          }
      
          return true; // Allow form submission
      }
      
      function submitForm() {
        if (validateForm()) {
            sendmail().then(() => {
                // Optionally, you can perform additional actions after email is sent.
            });
        }
    }
    

    