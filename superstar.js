// Get the toggle button
var toggleBtn = document.getElementById('theme-toggle');

// When the button is clicked
toggleBtn.addEventListener('click', function() {
    // If body currently has "light" class, remove it (switch to dark)
    if (document.body.className === "light") {
        document.body.className = "";
        toggleBtn.textContent = "🌙 Dark Mode";
    } 
    // Otherwise, add "light" class (switch to light)
    else {
        document.body.className = "light";
        toggleBtn.textContent = "☀️ Light Mode";
    }
});
