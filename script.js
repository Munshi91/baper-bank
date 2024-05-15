document.getElementById('btn-submit').addEventListener('click', function () {
  const emailField = document.getElementById('int-email');
  const email = emailField.value;
  emailField.value = '';
  const passwordField = document.getElementById('int-pass');
  const password = passwordField.value;
  passwordField.value = '';

  if (email === 'email@gmail.com' && password === '123456') {
    window.location.href = 'bank.html';
  } else {
    alert('Invalid User');
  }
});

