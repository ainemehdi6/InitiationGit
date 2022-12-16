document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get the values of the username and password fields
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Validate the username and password
    if (username === 'admin' && password === 'password') {
      // If the username and password are correct, log the user in
      console.log('Logging in...');
    } else {
      // If the username and password are incorrect, display an error message
      console.log('Invalid username or password');
    }
  });
  