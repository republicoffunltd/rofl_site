document.addEventListener("DOMContentLoaded", function() {
    const scrollArrows = document.getElementById('scroll-arrows');

    // Create the first arrow
    const arrow1 = document.createElement('div');
    arrow1.classList.add('arrow');
    arrow1.innerHTML = '&#9660;'; // Unicode for down arrow

    // Create the second arrow
    const arrow2 = document.createElement('div');
    arrow2.classList.add('arrow');
    arrow2.innerHTML = '&#9660;'; // Unicode for down arrow

    // Append arrows to the scroll-arrows container
    scrollArrows.appendChild(arrow1);
    scrollArrows.appendChild(arrow2);
});

document.addEventListener("DOMContentLoaded", function() {
    const backToTopButton = document.getElementById('back-to-top');

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Smooth scrolling to top when the button is clicked
    backToTopButton.addEventListener('click', function(event) {
        event.preventDefault();
        const header = document.getElementById('header');
        header.scrollIntoView({ behavior: 'smooth' });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll('.navbar a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Remove active class from all links
            navbarLinks.forEach(navlink => {
                navlink.classList.remove('active');
            });

            // Add active class to the clicked link
            this.classList.add('active');
        });
    });
});