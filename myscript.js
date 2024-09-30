document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const fullName = document.getElementById('full_name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm_password');
    const phoneNumber = document.getElementById('phone_number');

    form.addEventListener('submit', function (event) {
        
        const errorMessage = document.getElementById('error-message');
        if (errorMessage) {
            errorMessage.remove();
        }

        let errors = [];

        
        if (!/^[A-Za-z\s]+$/.test(fullName.value)) {
            errors.push('Full Name must contain only alphabets.');
        }

    
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            errors.push('Please enter a valid email address.');
        }

        
        if (password.value.length < 8) {
            errors.push('Password must be at least 8 characters long.');
        }

    
        if (password.value !== confirmPassword.value) {
            errors.push('Passwords do not match.');
        }

        
        if (!/^\d+$/.test(phoneNumber.value)) {
            errors.push('Phone Number must be numeric.');
        }

        
        if (errors.length > 0) {
            event.preventDefault(); // Prevent form submission

            // Create and display error message
            const errorDiv = document.createElement('div');
            errorDiv.id = 'error-message';
            errorDiv.style.color = 'red';
            errorDiv.style.marginBottom = '15px';
            errorDiv.innerHTML = errors.join('<br>');
            form.insertBefore(errorDiv, form.firstChild);
        }
    });
});
