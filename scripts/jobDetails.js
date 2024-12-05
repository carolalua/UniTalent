// Function to get a job by its ID
function getJobById(id) {
    return jobDatabase.find(job => job.id === id);
}

// Populate the page with job details
function populateJobDetails(job) {
    if (!job) {
        console.error("Job not found!");
        return;
    }

    // Posting time
    document.querySelector(".postingtime").textContent = job.postingTime;

    // Company details
    document.querySelector(".company-logo img").src = job.company.logo;
    document.querySelector(".company-name h3").textContent = job.company.name;

    // Summary details
    document.querySelector("#category-text").textContent = job.summary.category;
    document.querySelector("#jobtype-text").textContent = job.summary.jobType;
    document.querySelector("#location-text").textContent = job.summary.location;

    // Description
    document.querySelector(".jobdetails-description .description-text").innerHTML = `
        <p>${job.description.details}</p>
    `;

    // Responsibilities
    document.querySelector(".jobdetails-responsibilities .reponsibilites-listing").textContent =
        job.responsibilities.details;

    // Requirements
    const detailsContainer = document.querySelector("#requirements-details"); // For paragraph
    const listContainer = document.querySelector("#requirements-list"); // For list items

    // Populate the paragraph
    detailsContainer.textContent = job.requirements.details;

    // Clear existing list items (if any) to avoid duplicates
    listContainer.innerHTML = "";

    // Populate the list
    job.requirements.list.forEach(req => {
        const listItem = document.createElement("li");
        listItem.textContent = req;
        listContainer.appendChild(listItem);
    });

    // Tags
    const tagsContainer = document.querySelector(".jobdetails-tags .tags-row");
    tagsContainer.innerHTML = "";
    job.tags.forEach(tag => {
        const tagBox = document.createElement("div");
        tagBox.className = "tag-box";
        tagBox.textContent = tag;
        tagsContainer.appendChild(tagBox);
    });

    // Job Overview
    document.querySelector("#jobtitle .joboverview-answer").textContent = job.overview.jobTitle;
    document.querySelector("#jobtype .joboverview-answer").textContent = job.overview.jobType;
    document.querySelector("#category .joboverview-answer").textContent = job.overview.category;
    document.querySelector("#experience .joboverview-answer").textContent = job.overview.experience;
    document.querySelector("#degree .joboverview-answer").textContent = job.overview.degree;
    document.querySelector("#gender .joboverview-answer").textContent = job.overview.gender;
    document.querySelector("#location .joboverview-answer").textContent = job.overview.location;
}

// Example: Populate details for job with ID 1
document.addEventListener("DOMContentLoaded", () => {
    const jobId = 1; // This can be dynamically set
    const job = getJobById(jobId);
    populateJobDetails(job);
});