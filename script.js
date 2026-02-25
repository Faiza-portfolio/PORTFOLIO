alert('JavaScript is working!');

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
        
        // Send data to backend
        fetch('http://localhost:3000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert(`Thank you, ${name}! Your message has been sent.`);
                contactForm.reset();
            } else {
                alert('Error sending message. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error sending message. Please make sure the server is running.');
        });
    });
});
