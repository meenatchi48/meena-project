// Scroll to Contact Section
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMsg = document.getElementById('formMsg');

    // Validation
    if (!name || !email || !message) {
        formMsg.textContent = 'Please fill all fields!';
        formMsg.className = 'error';
        return;
    }

    if (!email.includes('@')) {
        formMsg.textContent = 'Please enter a valid email!';
        formMsg.className = 'error';
        return;
    }

    // Success Message
    formMsg.textContent = 'Message sent successfully! Thank you.';
    formMsg.className = 'success';

    // Reset Form
    this.reset();

    // Clear message after 3 seconds
    setTimeout(() => {
        formMsg.textContent = '';
    }, 3000);
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});