const users = JSON.parse(localStorage.getItem('users')) || [];

document.getElementById('login-student').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', user.firstName);
        localStorage.setItem('userType', 'student');
        localStorage.setItem('userEmail', user.email);
        window.location.href = '../index.html';
    } else {
        alert('Invalid username or password');
    }
});