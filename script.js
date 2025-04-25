const toggleSwitch = document.getElementById("mode-toggle");
const body = document.body;
const icon = document.querySelector(".icon");

if (localStorage.getItem("mode") === "dark") {
    body.classList.add("dark-mode");
    toggleSwitch.classList.add("active");
    icon.textContent = "🌙";
} else {
    body.classList.add("light-mode");
    icon.textContent = "🌞";
}


toggleSwitch.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
    this.classList.toggle("active");

    
    icon.textContent = body.classList.contains("dark-mode") ? "🌙" : "🌞";

    
    localStorage.setItem("mode", body.classList.contains("dark-mode") ? "dark" : "light");
});



document.getElementById("CV-button").addEventListener("click", function() {
    var link = document.createElement("a");
    link.href = "Assets/MyCV.pdf"; 
    link.download = "CV.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});