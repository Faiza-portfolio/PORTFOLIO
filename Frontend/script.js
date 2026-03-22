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

        fetch('https://portfolio-lf7i.onrender.com/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                document.querySelector('.contact-form-box').innerHTML = '<h3 style="color:#243B4A;text-align:center;padding:30px;background:#d0e4ec;border-radius:8px;border:2px solid #243B4A;font-size:1.1rem;">✅ Thank you! Your message has been sent successfully!</h3>';
            }
        })
        .catch(() => {
            alert('Error sending message. Please try again.');
        });
    });
});