document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple validation (username and password are not empty)
        if (username.trim() === '' || password.trim() === '') {
            errorMessage.textContent = 'Please enter both username and password.';
        } else {
            // Here you can perform further login logic like sending data to server or checking against a database
            // For demonstration purposes, just show a success message
            alert('Login successful!'); // Replace this with your actual login logic
            // Reset the form
            loginForm.reset();
            // Clear any error messages
            errorMessage.textContent = '';
        }
    });
});
