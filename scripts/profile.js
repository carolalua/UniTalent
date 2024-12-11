document.addEventListener('DOMContentLoaded', () => {
    const companies = JSON.parse(localStorage.getItem('companies')) || [];
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userType = localStorage.getItem('userType');
    const userEmail= localStorage.getItem('userEmail');

    if(userType === 'student') {
        const firstName = document.getElementById('first-name');
        const lastName = document.getElementById('last-name');
        const phoneNumber = document.getElementById('phone-number');
        const email = document.getElementById('email');

        const student = users.find(user => user.email === userEmail);
        firstName.value = student.firstName;
        lastName.value = student.lastName;
        phoneNumber.value = student.telephone;
        email.value = student.email;

        document.getElementById('save-changes').addEventListener('click', function(e) {
            student.firstName = firstName.value;
            student.lastName = lastName.value;
            student.telephone = phoneNumber.value;
            student.email = email.value;
            console.log(student.email);
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('userEmail', student.email);
            localStorage.setItem('loggedInUser', student.firstName);
            window.location.href = '../pages/profile_student.html';
        });

    }

    if(userType === 'company') {
        const fullName = document.getElementById('full-name');
        const website = document.getElementById('website');
        const phoneNumber = document.getElementById('phone-number');
        const email = document.getElementById('email');
        const location = document.getElementById('location');
        
        const company = companies.find(company => company.contactEmail === userEmail);
        fullName.value = company.companyName;
        website.value = company.website;
        phoneNumber.value = company.telephoneCompany;
        email.value = company.contactEmail;
        location.value = company.city;

        document.getElementById('save-changes').addEventListener('click', function() {
            company.companyName = fullName.value;
            company.website = website.value;
            company.telephoneCompany = phoneNumber.value;
            company.contactEmail = email.value;
            company.city = location.value;
            localStorage.setItem('companies', JSON.stringify(companies));
            localStorage.setItem('userEmail', company.contactEmail);
            window.location.href = '../pages/profile_employer.html';
        });
    }
});