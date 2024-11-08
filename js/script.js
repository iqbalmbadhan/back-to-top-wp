document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");
    const circle = backToTopButton.querySelector(".progress-ring-circle");
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    // Set up the circle progress style
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;

    function setProgress(percent) {
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
    }

    window.addEventListener("scroll", function () {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.min((scrollTop / docHeight) * 100, 100);

        // Show the button after scrolling a bit
        if (scrollTop > 200) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }

        // Update the circular progress bar
        setProgress(scrollPercent);
    });

    // Smooth scroll to top on button click
    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
