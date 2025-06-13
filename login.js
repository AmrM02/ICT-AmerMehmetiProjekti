document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
  
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Stop normal form submission
  
      if (loginForm.checkValidity()) {
       
        window.location.href = "home.html"; 
      } else {
        loginForm.reportValidity(); // Show built-in validation UI
      }
    });
  });
  