document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll(".nav a");
  
  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      
      window.scrollTo({
        top: targetSection.offsetTop - 50, // Adjusted for header height
        behavior: "smooth"
      });
    });
  });

  // Active state for navigation links
  const sections = document.querySelectorAll("section");
  window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY + 100; // Offset for better highlight timing
    
    sections.forEach(section => {
      if (scrollPosition >= section.offsetTop && 
          scrollPosition < section.offsetTop + section.offsetHeight) {
        navLinks.forEach(link => link.classList.remove("active"));
        document.querySelector(`.nav a[href="#${section.id}"]`).classList.add("active");
      }
    });
  });

  // Contact Form Validation (Optional)
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", event => {
      const email = document.querySelector("#email").value.trim();
      const message = document.querySelector("#message").value.trim();
      
      if (!email || !message) {
        event.preventDefault();
        alert("Please fill out all fields before submitting.");
      }
    });
  }
});