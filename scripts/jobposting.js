const companies = JSON.parse(localStorage.getItem('companies')) || [];
const userEmail= localStorage.getItem('userEmail');
const jobDatabase = JSON.parse(localStorage.getItem('jobDatabase')) || [];


document.getElementById('add-language').addEventListener('click', function() {
    // Get the section where we want to add new fields
    const languageSection = document.getElementById('language-section');
    
    // Create a new div to hold the language fields and delete button
    const languageGroup = document.createElement('div');
    languageGroup.classList.add('language-group');
    
    // Create new language requirement field
    const languageField = document.createElement('div');
    languageField.classList.add('form-group');
    languageField.innerHTML = `
        <label for="languagerequirement">Language Requirement</label><br>
        <select name="languagerequirement[]" class="languagerequirement">
            <option selected>Select Language</option>
            <option value="english">English</option>
            <option value="german">German</option>
        </select>
    `;
    
    // Create new proficiency level field
    const proficiencyField = document.createElement('div');
    proficiencyField.classList.add('form-group');
    proficiencyField.innerHTML = `
        <label for="proficiencylevel">Proficiency Level</label><br>
        <select name="proficiencylevel[]" class="proficiencylevel" required>
            <option value="" selected>Select Proficiency Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
        </select>
    `;
    
    // Create the delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Language';
    deleteButton.classList.add('delete-language');
    
    // Add an event listener to the delete button to remove the group
    deleteButton.addEventListener('click', function() {
        languageSection.removeChild(languageGroup);
    });
    
    // Append language and proficiency fields to the languageGroup div
    languageGroup.appendChild(languageField);
    languageGroup.appendChild(proficiencyField);
    languageGroup.appendChild(deleteButton);
    
    // Append the whole languageGroup to the languageSection
    languageSection.appendChild(languageGroup);
});

document.addEventListener('DOMContentLoaded', () => {
    const company = companies.find(company => company.contactEmail === userEmail);
    const companyName = document.getElementById('companyname');
    companyName.value = company.companyName;

    document.getElementById('actual-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const jobTitle = document.getElementById('jobtitle').value;
        const jobdescription = document.getElementById('jobdescription').value;
        const keyresponsibilities = document.getElementById('keyresponsibilities').value;
        const professionalskills = document.getElementById('professionalskills').value;
        const educationlevel = document.getElementById('educationlevel').value;
        
        const languages = document.querySelectorAll('.languagerequirement');
        const proficiencyLevels = document.querySelectorAll('.proficiencylevel');
    
        let englishRequired = false;
        let englishLevel = '';
    
        let germanRequired = false;
        let germanLevel = '';
        console.log('aqui');
    
        for (let i = 0; i < languages.length; i++) {
    
            if(languages[i].value === 'english') {
                englishRequired = true;
                englishLevel = proficiencyLevels[i].value;
            } 
    
            if (languages[i].value === 'german') {
                germanRequired = true;
                germanLevel = proficiencyLevels[i].value;
            }
        }
    
        const experience = document.getElementById('experience').value;
        const jobcategory = document.getElementById('jobcategory').value;
        const location = document.getElementById('location').value;
        const jobtype = document.getElementById('jobtype').value;
    
        const currentDate = new Date();
    
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const hours = String(currentDate.getHours()).padStart(2, '0');
        const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    
        const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}`;
        const newJob = {
            id: jobDatabase.length + 1,
            postingTime: formattedDate,
            company: {
                name: company.companyName,
                logo: "Canon.png",
            },
            summary: {
                category: jobcategory,
                jobType: jobtype,
                location: company.city,
            },
            description: {
                title: "Job Description",
                details: jobdescription,
            },
            responsibilities: {
                title: "Key Responsibilities",
                details: keyresponsibilities,
                list:[],
            },
            requirements: {
                title: "Professional Requirements",
                details: professionalskills,
                list:[],
            },
            tags: [jobcategory, company.city, location, jobtype],
            languages: {
                English: {
                    required: englishRequired,
                    proficiency: englishLevel,
                },
                German: {
                    required: germanRequired,
                    proficiency: germanLevel,
                },
            },
            educationLevel: educationlevel,
            experienceLevel: experience,
            locationType: location,
            overview: {
                jobTitle: jobTitle,
                jobType: jobtype,
                category: jobcategory,
                experience: experience,
                degree: educationlevel,
                gender: "All",
                location: company.city,
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.8721996638264!2d10.4515!3d51.1657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799da80ce5ea025%3A0x282d45223872c4ac!2sGermany!5e0!3m2!1sen!2sde!4v1733429318349!5m2!1sen!2sde",
            },
        }
    
        jobDatabase.push(newJob);
        localStorage.setItem('jobDatabase', JSON.stringify(jobDatabase));
        window.location.href = './jobListing_employer.html';
    });
});