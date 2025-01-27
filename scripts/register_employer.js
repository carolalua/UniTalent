const companies = JSON.parse(localStorage.getItem('companies')) || [];

const phonenumber = document.querySelector('#telephone-company');
const phoneInput = window.intlTelInput(phonenumber, {
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    initialCountry: "de",
});

let telephoneCompany = '';

phonenumber.addEventListener('blur', function() {
    telephoneCompany = phoneInput.getNumber();
});

document.getElementById('register-company').addEventListener('submit', function(e) {
    e.preventDefault();
    const companyName = document.getElementById('company-name').value;
    const contactPerson = document.getElementById('contact-person').value;
    const city = document.getElementById('city').value;
    const contactEmail = document.getElementById('contact-email').value;
    const postalCode = document.getElementById('postal-code').value;
    //const telephone = document.getElementById('telephone-company');
    const street = document.getElementById('street').value;
    const logoFile = document.getElementById('logo').files[0];
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

    const saveCompanyData = (logo) => {
        const newCompany = { companyName, contactPerson, city, contactEmail, postalCode, telephoneCompany, 
            telephoneCompany, street, logo, houseNumber, vatNumber, website, password};
        companies.push(newCompany);

        localStorage.setItem('companies', JSON.stringify(companies));
        window.location.href = './login_employer.html';
    };

    if (logoFile) {
        const reader = new FileReader();
        reader.onloadend = function() {
            const logo = reader.result; // This will be the base64 encoded image
            saveCompanyData(logo); // Now save company data along with the logo
        };
        reader.readAsDataURL(logoFile); // Convert the image to a base64 string
    } else {
        saveCompanyData(null); 
    }
});
