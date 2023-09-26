

const loginForm = document.querySelector('form');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.querySelector('input[name="username"]');
  const password = document.querySelector('input[name="password"]');

  if (username.value === '') {
    alert('Please enter your username.');
    return;
  }

  if (password.value === '') {
    alert('Please enter your password.');
    return;
  }

  // Submit the login form.
  this.submit();
});
