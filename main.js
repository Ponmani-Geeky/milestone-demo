
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  const menuItems = document.querySelectorAll('.menu-has-child a');
    menuItems.forEach(item => {
      item.addEventListener('click', function(event) {
        event.preventDefault(); 
        const menuItem = this.parentElement; 
        menuItem.classList.toggle('show');

              // Toggle the 'open' class on the clicked menu item
      const isOpen = menuItem.classList.contains('open');
      document.querySelectorAll('.menu-has-child').forEach(item => item.classList.remove('open'));

      // If it was not already open, add the 'open' class
      if (!isOpen) {
        menuItem.classList.add('open');
      }

        document.querySelectorAll('.menu-has-child').forEach(otherItem => {
          if (otherItem !== menuItem) {
            otherItem.classList.remove('show');
          }
        });
      });
    });

    function loadPage(page,event) {
      event.preventDefault(); // Prevent the click from propagating to the parent // Stop the toggle menu behavior  
      const contentDiv = document.getElementById('load-content');
      
      // You can use AJAX or fetch to load different HTML pages into the content div
      fetch(page)
          .then(response => response.text())
          .then(data => {
              contentDiv.innerHTML = data;
          })
          .catch(error => {
              contentDiv.innerHTML = "Error loading page.";
          });
          event.stopPropagation();
  }
  
  // Load a default page when the app starts
  document.addEventListener('DOMContentLoaded', function() {
      loadPage('Dashboard.html',event);
  });