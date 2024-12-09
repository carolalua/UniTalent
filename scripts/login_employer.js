const companies = JSON.parse(localStorage.getItem('companies')) || [];

document.getElementById('login-company').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const company = companies.find(company => company.contactEmail === email && company.password === password);

    if (company) {
        localStorage.setItem('loggedInUser', company.contactPerson.match(/[a-z]+/i)[0]);
        localStorage.setItem('userType', 'company');
        localStorage.setItem('userEmail', company.contactEmail);
        window.location.href = '../index.html';
    } else {
        alert('Invalid username or password');
    }
});