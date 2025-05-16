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
    let scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
      if (scrollPosition >= section.offsetTop && 
          scrollPosition < section.offsetTop + section.offsetHeight) {
        navLinks.forEach(link => link.classList.remove("active"));
        document.querySelector(`.nav a[href="#${section.id}"]`).classList.add("active");
      }
    });
  });

  // Interactive Hero Section (Typewriter Effect)
  const tagline = document.querySelector(".tagline");
  if (tagline) {
    const text = "Creative Developer & Problem Solver";
    let index = 0;

    function typeEffect() {
      if (index < text.length) {
        tagline.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
      }
    }
    
    tagline.textContent = "";
    typeEffect();
  }

  // Subtle Animations for Sections
  const animatedSections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, { threshold: 0.5 });

  animatedSections.forEach(section => observer.observe(section));

  // Custom Cursor Effect
  const cursor = document.createElement("div");
  cursor.classList.add("custom-cursor");
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", event => {
    cursor.style.top = `${event.clientY}px`;
    cursor.style.left = `${event.clientX}px`;
  });

  // SEO Optimization - Dynamic Title Update
  document.title = "Amanda Morgan - Web Developer | Portfolio";
});