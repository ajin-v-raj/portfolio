
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
  

  

    