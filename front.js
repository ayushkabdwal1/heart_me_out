// JavaScript file: interactive_buttons.js

// Function to handle button hover effect
function addHoverEffect(button) {
    button.addEventListener("mouseenter", () => {
      button.style.transform = "scale(1.1)";
      button.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
    });
    button.addEventListener("mouseleave", () => {
      button.style.transform = "scale(1)";
      button.style.boxShadow = "none";
    });
  }
  
  // Function to handle button click effect
  function addClickEffect(button) {
    button.addEventListener("mousedown", () => {
      button.classList.add("clicked");
    });
    button.addEventListener("mouseup", () => {
      button.classList.remove("clicked");
    });
  }
  
  // Initialize button effects
  function initializeButtonEffects() {
    const buttons = document.querySelectorAll(".hero .buttons .btn");
    buttons.forEach((button) => {
      addHoverEffect(button);
      addClickEffect(button);
    });
  }
  
  // Run the initialization after the DOM content is fully loaded
  document.addEventListener("DOMContentLoaded", initializeButtonEffects);
  