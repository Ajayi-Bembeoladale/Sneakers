 document.addEventListener("DOMContentLoaded", function () {
      const container = document.getElementById("container");
      const overlayBtn = document.getElementById("overlayBtn");

      overlayBtn.addEventListener("click", () => {
        container.classList.toggle("right-panel-active");
        overlayBtn.classList.remove("btnScaled");
        window.requestAnimationFrame(() => {
          overlayBtn.classList.add("btnScaled");
        });
      });

      const loggedInUser = localStorage.getItem("loggedInUser");
if (loggedInUser) {
  const userData = JSON.parse(localStorage.getItem(loggedInUser));
  if (userData) {
    displayGreeting(userData.name);
  }
}



      // Sign Up
      document.getElementById("signupForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("signupName").value.trim();
        const email = document.getElementById("signupEmail").value.trim();
        const password = document.getElementById("signupPassword").value.trim();

        if (name && email && password) {
          localStorage.setItem(email, JSON.stringify({ name, password }));
          alert("Registration successful! You can now sign in.");
        } else {
          alert("Please fill in all fields.");
        }
      });

      // Sign In
      document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value.trim();

        const storedUser = JSON.parse(localStorage.getItem(email));

        if (storedUser && storedUser.password === password) {
          displayGreeting(storedUser.name);
        } else {
          alert("Invalid login credentials.");
        }

        localStorage.setItem("loggedInUser", email); // Save login state
      });

     function displayGreeting(name) {
  const greeting = document.getElementById("userGreeting");
  const storeContent = document.getElementById("storeContent");
  const container = document.getElementById("container");

  if (greeting && storeContent && container) {
    greeting.textContent = `Hello, ${name}`;
    greeting.style.opacity = "1";
    storeContent.style.display = "block"; // Show header
    container.style.display = "none";     // Hide login/signup form
  }
}

    });