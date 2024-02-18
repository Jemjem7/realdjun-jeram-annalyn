document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Assume validation and authentication logic here
    // For simplicity, let's assume successful login
    document.querySelector(".login-container").style.display = "none";
    document.querySelector(".navbar").style.display = "block";
    navigateTo("home"); // Navigate to the home page after login
  });
});

function navigateTo(page) {
  var pages = document.querySelectorAll(".products");
  pages.forEach(function(item) {
    item.style.display = "none";
  });
  document.getElementById(page).style.display = "block";
}
