// Grab the toggle button
const toggleBtn = document.getElementById("theme-toggle");

// On click, toggle dark/light mode
toggleBtn.onclick = () => {
    document.body.classList.toggle("light");

    // Update button text
    if (document.body.classList.contains("light")) {
        toggleBtn.textContent = "🌞 Light Mode";
    } else {
        toggleBtn.textContent = "🌙 Dark Mode";
    }
};
