const companies = JSON.parse(localStorage.getItem('companies')) || [];
const userEmail= localStorage.getItem('userEmail');
const jobDatabase = JSON.parse(localStorage.getItem('jobDatabase')) || [];

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const jobId = parseInt(urlParams.get("id"), 10);

    if (isNaN(jobId)) {
        // Invalid or missing job ID
        console.error("Invalid or missing job ID in URL.");
        displayError("Invalid job link! Please check the URL.");
        return; 
    }
    const job = getJobById(jobId);
    if (!job) {
        // No job found for the given ID
        console.error("Job not found for ID:", jobId);
        displayError("Job not found! Please check the link.");
        return;
    }

    document.getElementById('jobtitle').value = job.overview.jobTitle;
    document.getElementById('jobdescription').value = job.description.details;
    document.getElementById('keyresponsibilities').value = job.responsibilities.details;
    document.getElementById('professionalskills').value = job.requirements.details;
    document.getElementById('educationlevel').value = job.educationLevel;
    document.getElementById('experience').value = job.experienceLevel;
    document.getElementById('jobcategory').value = job.overview.category;
    document.getElementById('location').value = job.locationType;
    document.getElementById('jobtype').value = job.overview.jobType;
    document.getElementById('status').value = job.status || 'Open';

    let position = 0;
    const englishRequirement = job.languages.English.required;
    const englishProficiency = job.languages.English.proficiency;
    const germanRequirement = job.languages.German.required;
    const germanProficiency = job.languages.German.proficiency;
    
    if(englishRequirement && germanRequirement) {
        addFieldLanguage();
    }

    const languages = document.querySelectorAll('.languagerequirement');
    const proficiencyLevels = document.querySelectorAll('.proficiencylevel');

    if(englishRequirement) {
        languages[position].value = 'english';
        proficiencyLevels[position].value = englishProficiency;
        position = position+1;
    }

    if(germanRequirement) {
        languages[position].value = 'german';
        proficiencyLevels[position].value = germanProficiency;
    }

    document.getElementById('add-language').addEventListener('click', function() {
        addFieldLanguage();
    });

    const company = companies.find(company => company.contactEmail === userEmail);
    const companyName = document.getElementById('companyname');
    companyName.value = company.companyName;

    document.getElementById('actual-form').addEventListener('submit', function(e) {
        e.preventDefault();
        job.overview.jobTitle = document.getElementById('jobtitle').value;
        job.description.details = document.getElementById('jobdescription').value;
        job.responsibilities.details = document.getElementById('keyresponsibilities').value;
        job.description.details = document.getElementById('professionalskills').value;
        job.educationLevel = document.getElementById('educationlevel').value;
        job.overview.degree = document.getElementById('educationlevel').value;

        const languages = document.querySelectorAll('.languagerequirement');
        const proficiencyLevels = document.querySelectorAll('.proficiencylevel');
    
        let englishRequired = false;
        let englishLevel = '';
    
        let germanRequired = false;
        let germanLevel = '';

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

        job.languages.English.required = englishRequired;
        job.languages.English.proficiency = englishLevel;
        job.languages.German.required = germanRequired;
        job.languages.German.proficiency = germanLevel;

        job.overview.experience = document.getElementById('experience').value;
        job.experienceLevel = document.getElementById('experience').value;
        let index = job.tags.indexOf(job.overview.category);
        if (index !== -1) {
            job.tags[index] = document.getElementById('jobcategory').value;
        }
        job.overview.category = document.getElementById('jobcategory').value;
        job.summary.category = document.getElementById('jobcategory').value;
        index = job.tags.indexOf(job.locationType);
        if (index !== -1) {
            job.tags[index] = document.getElementById('location').value;
        }
        job.locationType = document.getElementById('location').value;
        index = job.tags.indexOf(job.summary.jobType);
        if (index !== -1) {
            job.tags[index] = document.getElementById('jobtype').value;
        }
        job.summary.jobType = document.getElementById('jobtype').value;
        job.overview.jobType = document.getElementById('jobtype').value;
        job.status = document.getElementById('status').value;
    
        localStorage.setItem('jobDatabase', JSON.stringify(jobDatabase));
        window.location.href = './jobListing_employer.html';
    });
});

function getJobById(id) {
    return jobDatabase.find(job => job.id === id);
}

function addFieldLanguage() {
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
            const languages = document.querySelectorAll('.languagerequirement');
            if (languages.length === 2) {
                document.getElementById('add-language').style.display = 'none';
            } else {
                document.getElementById('add-language').style.display = 'block';
            }
        });
        
        // Append language and proficiency fields to the languageGroup div
        languageGroup.appendChild(languageField);
        languageGroup.appendChild(proficiencyField);
        languageGroup.appendChild(deleteButton);
        
        // Append the whole languageGroup to the languageSection
        languageSection.appendChild(languageGroup);
        
        const languages = document.querySelectorAll('.languagerequirement');
        if (languages.length === 2) {
            document.getElementById('add-language').style.display = 'none';
        } else {
            document.getElementById('add-language').style.display = 'block';
        }
}