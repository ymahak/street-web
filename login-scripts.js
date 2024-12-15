
function showRegister() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
  }

  // Function to show the login form and hide register form
  function showLogin() {
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
  }

  // Validation function to check if username contains any numbers
  function validateUsername(username) {
    // Regular expression to check if username contains numbers
    const regex = /\d/; // Matches any digit
    return !regex.test(username); // Return true if no numbers are found
  }


function login(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('loginUsername').value;

    if (!validateUsername(username)) {
      alert('Username cannot contain numbers');
      return;
    }

    // Proceed with login logic if validation passes
    alert('Login successful');
    // Perform the actual login process here
  }

  // Register function
  function register(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('registerUsername').value;

    if (!validateUsername(username)) {
      alert('Username cannot contain numbers');
      return;
    }

    // Proceed with registration logic if validation passes
    alert('Registration successful');
    // Perform the actual registration process here
  }





// Simulate login (check username and password)
function login(event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const storedUser = JSON.parse(localStorage.getItem('registeredUser'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
        // Store the logged-in user's name in localStorage and redirect to the index page
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'index.html'; // Redirect to the index page
    } else {
        alert('Incorrect username or password!');
    }
}


const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});






