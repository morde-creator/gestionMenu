document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registrationForm");
  
    registrationForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Get the values from the registration form
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      // Perform client-side validation (if needed)
  
      // Save email and password in localStorage (you can adjust this as per your needs)
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
    });
  });
  