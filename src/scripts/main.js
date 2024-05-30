const inputs = document.querySelectorAll('.form-input');
inputs.forEach(input => {
    input.addEventListener('focus', function () {
        this.parentNode.querySelector('.form-label').classList.add('focused');
    });
    input.addEventListener('blur', function () {
        if (this.value === '') {
            this.parentNode.querySelector('.form-label').classList.remove('focused');
        }
    });
    input.addEventListener('input', function () {
        if (this.value !== '') {
            this.parentNode.querySelector('.form-label').classList.add('filled');
        } else {
            this.parentNode.querySelector('.form-label').classList.remove('filled');
        }
    });
});


document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('password-confirmation').value;
    const errorMessage = document.getElementById('error-message');

    if (password !== confirmPassword) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
    }
});
