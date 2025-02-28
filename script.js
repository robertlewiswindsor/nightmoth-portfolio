document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");
    const toggleIcon = document.getElementById("toggle-icon");
    const body = document.body;

    // Check if dark mode was previously enabled
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        toggleIcon.src = "images/moth.png";
        toggleIcon.classList.add("glow");
    }

    toggleButton.addEventListener("click", function () {
        // Start the transformation: Caterpillar → Cocoon
        toggleIcon.src = "images/cocoon.png";
        toggleIcon.classList.add("shrink");

        setTimeout(() => {
            // Cocoon shakes before final transformation
            toggleIcon.classList.add("shake");
        }, 800); // Starts shaking after 0.8s

        setTimeout(() => {
            // Cocoon → Moth (final transformation)
            toggleIcon.src = "images/moth.png";
            toggleIcon.classList.remove("shrink", "shake");
            toggleIcon.classList.add("glow");

            // Toggle dark mode after full transformation
            body.classList.toggle("dark-mode");

            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
            } else {
                // Switch back to caterpillar when returning to light mode
                toggleIcon.src = "images/caterpillar.png";
                toggleIcon.classList.remove("glow");
                localStorage.setItem("theme", "light");
            }
        }, 2000); // Full transformation after 2s
    });
});

// Automatically update the copyright year
document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("year");
    yearSpan.textContent = new Date().getFullYear();
});