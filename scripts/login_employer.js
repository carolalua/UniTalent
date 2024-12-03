const companies = JSON.parse(localStorage.getItem('companies')) || [];

document.getElementById('login-company').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', user.email);
        localStorage.setItem('userType', 'company');
        window.location.href = '../index.html';
    } else {
        alert('Invalid username or password');
    }
});