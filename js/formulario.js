const inputs = document.querySelectorAll('.form-content input, .form-content textarea');

        inputs.forEach(input => {
            input.addEventListener('input', () => {
                if (input.value.trim() !== '') {
                    input.nextElementSibling.style.top = '0';
                    input.nextElementSibling.style.left = '15px';
                    input.nextElementSibling.style.fontSize = '16px';
                    input.nextElementSibling.style.padding = '0 2px';
                    input.nextElementSibling.style.backgroundColor = '#87a5ff';
                } else {
                    input.nextElementSibling.style.top = '50%';
                    input.nextElementSibling.style.left = '15px';
                    input.nextElementSibling.style.fontSize = '20px';
                    input.nextElementSibling.style.padding = '0';
                    input.nextElementSibling.style.backgroundColor = 'transparent';
                }
            });
        });