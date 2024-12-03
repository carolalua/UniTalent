const users = JSON.parse(localStorage.getItem('users')) || [];

document.getElementById('register-student').addEventListener('submit', function(e) {
    e.preventDefault();
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone-student').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert('Username already exists');
        return;
    }

    const newUser = { firstName, lastName, email, telephone, password};
    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));

    window.location.href = './login_student.html';
});
