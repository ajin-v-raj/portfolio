
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
  detailsElement1.addEventListener('mouseover', function() {
    // Show the detail_txt element when details is hovered
    detailTxtElement1.style.display = 'block';
  });

  detailsElement1.addEventListener('mouseout', function() {
    // Hide the detail_txt element when mouse leaves details
    detailTxtElement1.style.display = 'none';

    
  });



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
  

  

    