document.addEventListener('DOMContentLoaded', () => {
    const companies = JSON.parse(localStorage.getItem('companies')) || [];
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userType = localStorage.getItem('userType');
    const userEmail= localStorage.getItem('userEmail');
    const applications = JSON.parse(localStorage.getItem('applications')) || [];
    const studentApplications = applications.filter(application => application.email === userEmail);

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
            studentApplications.forEach(application => {
                application.email = student.email;
            });
            localStorage.setItem('applications', JSON.stringify(applications));
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
            const jobDatabase = JSON.parse(localStorage.getItem('jobDatabase')) || [];
            const jobsFilter = jobDatabase.filter(job => job.company.name === company.companyName);
            jobsFilter.forEach(job => {
                job.company.name = fullName.value;
            });
            company.companyName = fullName.value;
            company.website = website.value;
            company.telephoneCompany = phoneNumber.value;
            company.contactEmail = email.value;
            company.city = location.value;
            studentApplications.forEach(application => {
                application.companyName = company.companyName;
            });
            localStorage.setItem('jobDatabase', JSON.stringify(jobDatabase));
            localStorage.setItem('applications', JSON.stringify(applications));
            localStorage.setItem('companies', JSON.stringify(companies));
            localStorage.setItem('userEmail', company.contactEmail);
            window.location.href = '../pages/profile_employer.html';
        });

        window.onload = function() {        
            if (company && company.logo) {
                const profilePhotoImg = document.getElementById('profile-photo-img');
                profilePhotoImg.src = company.logo; // Set the base64 logo as the src
            }
        };

        document.getElementById('file-input').addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = function() {
                    // Get the base64 string of the selected image
                    const newLogo = reader.result;
    
                    // Update the image on the page
                    const profilePhotoImg = document.getElementById('profile-photo-img');
                    profilePhotoImg.src = newLogo; // Set the new image as the src of the img element
    
                    company.logo = newLogo; // Update the logo field of the company
                    localStorage.setItem('companies', JSON.stringify(companies)); // Save the updated companies array back to localStorage
                    
                    const jobDatabase = JSON.parse(localStorage.getItem('jobDatabase')) || [];
                    const jobsFilter = jobDatabase.filter(job => job.company.name === company.companyName);
                    jobsFilter.forEach(job => {
                        job.company.logo = newLogo;
                    });
                    localStorage.setItem('jobDatabase', JSON.stringify(jobDatabase));
                };
                reader.readAsDataURL(file); // Convert the image to a base64 string
            }
        });    
    }
});