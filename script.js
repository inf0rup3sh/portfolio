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



// For Scrool Animation 

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    observer.observe(section);
});




const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

        


// HAnd Gesture pointer

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        cursor.innerHTML = '<i class="fa-solid fa-hand-pointer"></i>';
    });
    button.addEventListener('mouseleave', () => {
        cursor.innerHTML = '<i class="fa-solid fa-arrow-pointer"></i>';
    });
});

//Text Pointer

document.querySelectorAll('input, textarea').forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.innerHTML = '<i class="fa-solid fa-i"></i>';
    });
    element.addEventListener('mouseleave', () => {
        cursor.innerHTML = '<i class="fa-solid fa-arrow-pointer"></i>';
    });
});

//  pre-loader


const text = "FOLIO";
const speed = 150; // Speed in milliseconds per letter
let index = 0;
const secondPart = document.getElementById("second-part");
const preloader = document.getElementById("preloader");

function typeEffect() {
    if (index < text.length) {
        secondPart.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    } else {
        setTimeout(() => {
            preloader.style.transition = "opacity 1s ease-out"; // Smooth fade
            preloader.style.opacity = "0"; // Start fade-out
            
            setTimeout(() => {
                preloader.style.display = "none"; // Remove from DOM after fade
                document.getElementById("website-content").style.display = "block"; // Show website
            }, 1000); // Match fade duration
        }, 500); // Brief delay before fading
    }
}

window.onload = typeEffect;

document.body.style.overflow = "hidden"; // Disable scrolling

setTimeout(() => {
    document.body.style.overflow = "auto"; // Enable scrolling after preloader
}, 2000); // Adjust timing based on animation
