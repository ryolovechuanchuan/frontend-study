const form = document.getElementById('registerForm');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmInput = document.getElementById('confirmPassword');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmError = document.getElementById('confirmError');

const success = document.getElementById('successMessage');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const confirm = confirmInput.value.trim();

  nameError.innerText = '';
  emailError.innerText = '';
  passwordError.innerText = '';
  confirmError.innerText = '';
  success.innerText = '';

  if (name === '') {
    nameError.innerText = 'Please enter your name';
    return;
  }

  const result = email.split('@');
  if (result.length !== 2 || result[0] === '' || result[1] === '') {
    emailError.innerText = 'Please enter your email';
    return;
  }

  if (password.length < 8) {
    passwordError.innerText = 'Password must be at least 8 characters.';
    return;
  } else if (password === '') {
    passwordError.innerHTML = 'Password is required.';
  }

  if (confirm !== password) {
    confirmError.innerText = 'Passwords do not match.';
    return;
  }

  success.innerText = 'Validation successful';
});
