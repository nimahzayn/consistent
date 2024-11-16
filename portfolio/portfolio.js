// JavaScript to handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Display an alert with the form data (for demonstration purposes)
    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Clear the form after submission
    document.getElementById("contact-form").reset();
  });
  