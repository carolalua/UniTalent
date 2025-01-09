const users = JSON.parse(localStorage.getItem('users')) || [];

const phonenumber = document.querySelector('#telephone-student');
const phoneInput = window.intlTelInput(phonenumber, {
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    initialCountry: "de",
});

let telephone = '';

phonenumber.addEventListener('blur', function() {
    telephone = phoneInput.getNumber();
});

document.getElementById('register-student').addEventListener('submit', function(e) {
    e.preventDefault();
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
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
