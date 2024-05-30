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