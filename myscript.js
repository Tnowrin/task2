document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const fullName = document.getElementById('full_name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm_password');
    const phoneNumber = document.getElementById('phone_number');

    form.addEventListener('submit', function (event) {
        // Clear any previous error messages
        const errorMessage = document.getElementById('error-message');
        if (errorMessage) {
            errorMessage.remove();
        }

        let errors = [];

        // Validate Full Name (Alphabets only)
        if (!/^[A-Za-z\s]+$/.test(fullName.value)) {
            errors.push('Full Name must contain only alphabets.');
        }

        // Validate Email Format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            errors.push('Please enter a valid email address.');
        }

        // Validate Password (Minimum 8 characters)
        if (password.value.length < 8) {
            errors.push('Password must be at least 8 characters long.');
        }

        // Validate Password and Confirm Password match
        if (password.value !== confirmPassword.value) {
            errors.push('Passwords do not match.');
        }

        // Validate Phone Number (Numeric only)
        if (!/^\d+$/.test(phoneNumber.value)) {
            errors.push('Phone Number must be numeric.');
        }

        // If there are errors, prevent submission and show messages
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
