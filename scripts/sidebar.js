

document.addEventListener('DOMContentLoaded', () => {
    const companies = JSON.parse(localStorage.getItem('companies')) || [];
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userType = localStorage.getItem('userType');
    const userName = localStorage.getItem('loggedInUser');    
    const userEmail= localStorage.getItem('userEmail');

    const userNameId = document.getElementById('user-name');
    const userEmailId = document.getElementById('user-email'); 

    userEmailId.innerHTML = userEmail;
    
    if(userType === 'student') {
        const student = users.find(user => user.email === userEmail);
        userNameId.innerHTML = userName + ' ' + student.lastName;
    }

    if(userType ==='company') {
        const company = companies.find(company => company.contactEmail === userEmail);
        userNameId.innerHTML = company.contactPerson;
    }
});