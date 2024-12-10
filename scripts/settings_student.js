const users = JSON.parse(localStorage.getItem('users')) || [];
const userEmail = localStorage.getItem('userEmail');
const student = users.find(student => student.email === userEmail);

document.addEventListener("DOMContentLoaded", () => {
    const emailUser = document.getElementById('email-user');
console.log('here' + student);
    if(student) {
        emailUser.textContent = student.email;
    }
});

document.getElementById('form-email').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email-update').value;
    
    if (student) {
        student.email = email;
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('userEmail', email);
        email.value = '';
        window.location.href = '../pages/settings_student.html';
    }
});

document.getElementById('form-password').addEventListener('submit', function(event) {
    event.preventDefault();
    const oldPassword = document.getElementById('old-password').value;
    const newPassword = document.getElementById('new-password').value;

    if (oldPassword === student.password) {
        if (student) {
            student.password = newPassword;
            localStorage.setItem('users', JSON.stringify(users));
            oldPassword.value = '';
            newPassword.value = '';
        }
        window.location.href = '../pages/settings_employer.html';
    } else {
        alert('Your old password is wrong');
    }
});