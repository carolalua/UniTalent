const companies = JSON.parse(localStorage.getItem('companies')) || [];
const userEmail = localStorage.getItem('userEmail');
const company = companies.find(company => company.contactEmail === userEmail);

document.addEventListener("DOMContentLoaded", () => {
    const emailUser = document.getElementById('email-user');

    if(company) {
        emailUser.textContent = company.contactEmail;
    }
});

document.getElementById('form-email').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email-update').value;
    
    if (company) {
        company.contactEmail = email;
        localStorage.setItem('companies', JSON.stringify(companies));
        localStorage.setItem('userEmail', email);
        email.value = '';
        window.location.href = '../pages/settings_employer.html';
    }
});

document.getElementById('form-password').addEventListener('submit', function(event) {
    event.preventDefault();
    const oldPassword = document.getElementById('old-password').value;
    const newPassword = document.getElementById('new-password').value;

    if (oldPassword === company.password) {
        if (company) {
            company.password = newPassword;
            localStorage.setItem('companies', JSON.stringify(companies));
            oldPassword.value = '';
            newPassword.value = '';
        }
        window.location.href = '../pages/settings_employer.html';
    } else {
        alert('Your old password is wrong');
    }
});