const companies = JSON.parse(localStorage.getItem('companies')) || [];

document.getElementById('register-company').addEventListener('submit', function(e) {
    e.preventDefault();
    const companyName = document.getElementById('company-name').value;
    const contactPerson = document.getElementById('contact-person').value;
    const city = document.getElementById('city').value;
    const contactEmail = document.getElementById('contact-email').value;
    const postalCode = document.getElementById('postal-code').value;
    const telephoneCompany = document.getElementById('telephone-company').value;
    const street = document.getElementById('street').value;
    const logo = document.getElementById('logo').value;
    const houseNumber = document.getElementById('house-number').value;
    const vatNumber = document.getElementById('vat-number').value;
    const password = document.getElementById('password').value;
    const website = document.getElementById('website').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    const existingUser = companies.find(company => company.companyName === companyName);
    if (existingUser) {
        alert('Already has an account');
        return;
    }

    const newCompany = { companyName, contactPerson, city, contactEmail, postalCode, telephoneCompany, 
        telephoneCompany, street, logo, houseNumber, vatNumber, website, password};
    companies.push(newCompany);

    localStorage.setItem('companies', JSON.stringify(companies));

    window.location.href = './login_employer.html';
});
