// Mjuk scrollning till sektioner
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Lägg till event listeners för navigationslänkar
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);

        // Stäng hamburgermenyn
        if (window.innerWidth < 992) {
            document.querySelector('.navbar-toggler').click();
        }
    });
});

// Fade in the hero logo
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.hero-logo').style.opacity = 1;
});
