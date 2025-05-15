document.addEventListener("DOMContentLoaded", () => {
    function displayGreeting() {
      const hour = new Date().getHours();
      let greeting = hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";
      document.getElementById("greeting").textContent = `${greeting},     Hello, I'm Joshua Jackson ,   I'm a passionate and dedicated web developer with a knack for creating dynamic, user-friendly websites that leave a lasting impression. With expertise in modern web technologies like HTML, CSS, JavaScript, and frameworks such as React and Node.js, I craft seamless digital experiences tailored to your needs..`;
    }
  
    document.getElementById("theme-toggle").addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  
    document.querySelectorAll(".toggle-details").forEach(button => {
      button.addEventListener("click", () => {
        const details = button.nextElementSibling;
        details.style.display = details.style.display === "none" ? "block" : "none";
      });
    });
  
    document.getElementById("contact-form")?.addEventListener("submit", function(event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const message = document.getElementById("message").value;
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\d{10}$/;
  
      if (!name || !email || !message) {
        document.getElementById("form-feedback").textContent = "Please fill all required fields.";
        return;
      }
      if (!emailRegex.test(email)) {
        document.getElementById("form-feedback").textContent = "Please enter a valid email.";
        return;
      }
      if (phone && !phoneRegex.test(phone)) {
        document.getElementById("form-feedback").textContent = "Please enter a valid 10-digit phone number.";
        return;
      }
  
      document.getElementById("form-feedback").textContent = "Form submitted successfully!";
      this.reset();
    });
  
    document.getElementById("survey-form")?.addEventListener("submit", function(event) {
      event.preventDefault();
      const rating = document.querySelector("input[name='rating']:checked");
      const comments = document.getElementById("comments").value;
  
      if (!rating || !comments) {
        document.getElementById("survey-feedback").textContent = "Please complete all required fields.";
        return;
      }
  
      document.getElementById("survey-feedback").textContent = "Thank you for your feedback!";
      this.reset();
    });
  
    document.querySelectorAll("input, textarea").forEach(input => {
      input.addEventListener("focus", () => {
        input.style.border = "2px solid #333";
      });
      input.addEventListener("blur", () => {
        input.style.border = "";
      });
    });
  
    displayGreeting();
  });