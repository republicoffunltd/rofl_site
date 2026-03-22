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
            const href = this.getAttribute('href');
            
            // Check if the link is to a different page
            if (href.includes('.html')) {
                // Allow default behavior for cross-page links
                return;
            }
            
            // For same-page links, prevent default and smooth scroll
            event.preventDefault();
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }

            // Remove active class from all links
            navbarLinks.forEach(navlink => {
                navlink.classList.remove('active');
            });

            // Add active class to the clicked link
            this.classList.add('active');
        });
    });
});
