document.addEventListener('DOMContentLoaded', function() {
    
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields!');
            return;
        }

        // Submit to Netlify
        const formData = new FormData(contactForm);
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString()
        })
        .then(() => {
            contactForm.innerHTML = '<h3 style="color:green;">✅ Thank you! Your message has been sent successfully!</h3>';
        })
        .catch(() => {
            alert('Error sending message. Please try again.');
        });
    });
});