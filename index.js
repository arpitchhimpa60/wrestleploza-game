const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', function() {
    if (document.body.className === "light") {
        document.body.className = "";
        toggleBtn.textContent = "🌙 Dark Mode";
    } 
    else {
        document.body.className = "light";
        toggleBtn.textContent = "☀️ Light Mode";
    }
})
