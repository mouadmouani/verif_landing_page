document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#contact form');
    form.addEventListener('submit', function(event) {
        const name = form.querySelector('input[name="name"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const message = form.querySelector('textarea[name="message"]').value.trim();

        if (!name || !email || !message) {
            event.preventDefault();
            alert('Please fill out all fields before submitting.');
        }
    });
});
