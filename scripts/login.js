document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.getElementById("login-button");
  const registerButton = document.getElementById("register-button");

  // Simulate a login status (this should come from your backend in a real scenario)
  let isLoggedIn = false;

  // Update the buttons based on login status
  const updateButtons = () => {
    if (isLoggedIn) {
      loginButton.textContent = "Logout";
      loginButton.href = "#"; // Update the link to a logout action if needed
      registerButton.style.display = "none"; // Hide the register button
    } else {
      loginButton.textContent = "Login";
      loginButton.href = "#"; // Update the link to a login action if needed
      registerButton.style.display = "inline-block"; // Show the register button
    }
  };

  // Simulate a login/logout toggle on button click
  loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    isLoggedIn = !isLoggedIn; // Toggle login status
    updateButtons();
  });

  // Initial button update
  updateButtons();
});