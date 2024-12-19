const jobDatabase = JSON.parse(localStorage.getItem('jobDatabase'));
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const jobId = parseInt(urlParams.get("id"), 10);

    if (isNaN(jobId)) {
        // Invalid or missing job ID
        console.error("Invalid or missing job ID in URL.");
        displayError("Invalid job link! Please check the URL.");
        return; 
    }
  
    const job = getJobById(jobId); // Get job details by ID
    if (!job) {
        // No job found for the given ID
        console.error("Job not found for ID:", jobId);
        displayError("Job not found! Please check the link.");
        return;
    }

    // job information
    document.querySelector(".logo-container img").src = job.company.logo.startsWith('data:image') ? job.company.logo : `../images/${job.company.logo}`;
    document.querySelector(".logo-container img").alt = job.company.name;
    document.querySelector(".job-header h2").innerHTML = job.company.name;
    document.querySelector(".application-form p").innerHTML = 'Fill out the details below to apply for this job at ' + job.company.name;

    //student information
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userEmail= localStorage.getItem('userEmail');

    const student = users.find(user => user.email === userEmail);

    document.getElementById('full-name').value = student.firstName + ' ' + student.lastName;
    document.getElementById('phone').value = student.telephone;
    document.getElementById('email').value = student.email;

    document.getElementById('form-application').addEventListener('submit', function(e) {
        const date = new Date();
        // Get the day, month, and year
        const day = String(date.getDate()).padStart(2, '0'); // Pad single-digit days with a leading zero
        const month = date.toLocaleString('default', { month: 'short' }); // Get short month name
        const year = date.getFullYear(); // Get the full year

        const applications = JSON.parse(localStorage.getItem('applications')) || [];
        applications.push({
            companyName: job.company.name,
            role: job.overview.jobTitle,
            date: `${day} ${month} ${year}`,
            email: document.getElementById('email').value,
        });
        localStorage.setItem('applications', JSON.stringify(applications));
        window.close();
    });
});

function displayError(message) {
    // Select the container where job details are displayed
    const detailsContainer = document.querySelector(".job-details");
  
    // Hide or clear other parts of the page
    const mainContent = document.querySelector(".sub-grid-jobdetails"); // Replace with your main content container's class or ID
    if (mainContent) {
        mainContent.style.display = "none"; // Hide the main content
    }
  
    // Display the error message
    detailsContainer.innerHTML = `
        <div class="error-message">
            <p>${message}</p>
        </div>
    `;
    detailsContainer.style.display = "block"; // Ensure the error container is visible
}

function getJobById(id) {
    return jobDatabase.find(job => job.id === id);
}