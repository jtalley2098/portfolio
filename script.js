function ready(){
    // Select the necessary elements
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navToggleIcon = document.querySelector('.nav-toggle-icon');
    
    // Add a click event listener to the nav toggle button
    navToggle.addEventListener('click', function() {
      // Toggle the 'show' class on the nav links
      navLinks.classList.toggle('show');
    
      // Toggle the 'open' class on the nav toggle icon
      navToggleIcon.classList.toggle('open');
    });
    
      
    document.addEventListener("DOMContentLoaded", ready);
      
    }
    