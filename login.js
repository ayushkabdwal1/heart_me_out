document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const loginButton = document.getElementById("login-btn");
  
    // Function to add the clicked effect
    function addClickEffect(element) {
      element.classList.add("clicked");
      setTimeout(() => {
        element.classList.remove("clicked");
      }, 200); // Remove effect after 200ms
    }
  
    // Handle the login form submission
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting the default way
      
      // Get email and password input values
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      // Validate input fields
      if (!email || !password) {
        alert("Please fill out both email and password!");
        return; // Stop further execution if fields are empty
      }
  
      // Here you would typically perform an API request or validation logic
      // Simulate successful login
      if (email === "user@example.com" && password === "password123") {
        alert("Login successful!");
        window.location.href = "home.html"; // Redirect to Home page after successful login
      } else {
        alert("Invalid email or password. Please try again.");
      }
    });
  
    // Add the clicked effect to the login button
    loginButton.addEventListener("click", function (event) {
      addClickEffect(event.target);
    });
  
    // Optional: Add functionality for the "Sign Up" link (for redirecting to a signup page)
    const signUpLink = document.querySelector("a[href='signup.html']");
    signUpLink.addEventListener("click", function (e) {
      e.preventDefault();
      addClickEffect(e.target); // Add click effect to link
      window.location.href = "signup.html"; // Redirect to signup page when clicked
    });
  
    // Add click effect for the form inputs when focused
    const formInputs = document.querySelectorAll('input');
    formInputs.forEach(input => {
      input.addEventListener('click', function(event) {
        addClickEffect(event.target);
      });
    });
  });
  // Define your API endpoint
const API_URL = "https://example.com/api/login"; // Replace with your API endpoint

// Add click effect to inputs and buttons
document.querySelectorAll("input, button, a").forEach((element) => {
  element.addEventListener("mousedown", () => {
    element.classList.add("clicked");
  });

  element.addEventListener("mouseup", () => {
    element.classList.remove("clicked");
  });
});

// Login form validation and API call
document.getElementById("login-form").addEventListener("submit", async function (event) {
  event.preventDefault(); // Prevent the default form submission

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const apiMessage = document.getElementById("api-message");

  // Clear previous messages
  apiMessage.textContent = "";

  if (!email || !password) {
    apiMessage.textContent = "Please fill out both fields!";
    return;
  }

  try {
    // Make a POST request to the API
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json(); // Parse the JSON response

    if (response.ok) {
      // Success: Redirect to a dashboard or home page
      apiMessage.style.color = "green";
      apiMessage.textContent = "Login successful! Redirecting...";
      setTimeout(() => {
        window.location.href = "home.html"; // Redirect
      }, 2000);
    } else {
      // Error from the server
      apiMessage.style.color = "red";
      apiMessage.textContent = result.message || "Login failed. Try again.";
    }
  } catch (error) {
    // Network or server error
    apiMessage.style.color = "red";
    apiMessage.textContent = "An error occurred. Please try again later.";
    console.error("API Error:", error);
  }
});
const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Dummy user for validation
const USER = {
  email: "user@example.com",
  password: "password123",
};

// API Endpoint
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (email === USER.email && password === USER.password) {
    res.status(200).json({ message: "Login successful!" });
  } else {
    res.status(401).json({ message: "Invalid email or password." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
