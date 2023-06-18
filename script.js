var users = [
    { username: 'admin', password: 'password' },
    { username: 'testuser', password: 'testpassword' },
    { username: 'user3', password: 'password3' }
  ];
  
  var loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    var usernameInput = document.getElementById('username').value;
    var passwordInput = document.getElementById('password').value;
    var messageElement = document.getElementById('message');
  
    for (var i = 0; i < users.length; i++) {
      if (usernameInput === users[i].username && passwordInput === users[i].password) {
        // Successful login
        messageElement.textContent = 'Login successful!';
        messageElement.style.color = 'green';
  
        // Delay the redirection to dashboard.html by 2 seconds (2000 milliseconds)
        setTimeout(function() {
          window.location.href = 'dashboard.html'; // Redirect to dashboard.html
        }, 1000);
  
        return;
      }
    }
  
    // Failed login
    messageElement.textContent = 'Invalid username or password';
    messageElement.style.color = 'red';
  
    // Remove the invalid password message after 5 seconds (5000 milliseconds)
    setTimeout(function() {
      messageElement.textContent = '';
    }, 5000);
  });
  