document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const jobId = parseInt(urlParams.get("id"), 10); // Parse the ID as an integer

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

  // Populate job details if a valid job is found
  populateJobDetails(job);
});

// Function to display an error message on the page
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

// Example: Get job by ID from the database
function getJobById(id) {
  return jobDatabase.find(job => job.id === id);
}



function getRelativeTime(postingTime) {
    const now = new Date(); // Current time
    const posted = new Date(postingTime); // Convert postingDate to Date object
    const differenceInSeconds = Math.floor((now - posted) / 1000); // Difference in seconds
  
    if (differenceInSeconds < 60) {
        return `${differenceInSeconds} seconds ago`;
    } else if (differenceInSeconds < 3600) {
        const minutes = Math.floor(differenceInSeconds / 60);
        return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
    } else if (differenceInSeconds < 86400) {
        const hours = Math.floor(differenceInSeconds / 3600);
        return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    } else {
        const days = Math.floor(differenceInSeconds / 86400);
        return `${days} day${days !== 1 ? "s" : ""} ago`;
    }
  }

// Populate the page with job details
function populateJobDetails(job) {
    if (!job) {
        console.error("Job not found!");
        return;
    }

    // Calculate the relative posting time
    const relativeTime = getRelativeTime(job.postingTime);

    // Posting time
    document.querySelector(".postingtime").textContent = relativeTime;

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
    const responsibiliesDetailsContainer = document.querySelector("#reponsibilites-details"); // For paragraph
    const responsibiliesListContainer = document.querySelector("#reponsibilites-list"); // For list items

    // Populate the paragraph
    responsibiliesDetailsContainer.textContent = job.responsibilities.details;

    // Clear existing list items (if any) to avoid duplicates
    responsibiliesListContainer.innerHTML = "";

    // Populate the list
    job.responsibilities.list.forEach(req => {
        const listItem = document.createElement("li");
        listItem.textContent = req;
        responsibiliesListContainer.appendChild(listItem);
    });

    // Requirements
    const requirementDetailsContainer = document.querySelector("#requirements-details"); // For paragraph
    const requirementListContainer = document.querySelector("#requirements-list"); // For list items

    // Populate the paragraph
    requirementDetailsContainer.textContent = job.requirements.details;

    // Clear existing list items (if any) to avoid duplicates
    requirementListContainer.innerHTML = "";

    // Populate the list
    job.requirements.list.forEach(req => {
        const listItem = document.createElement("li");
        listItem.textContent = req;
        requirementListContainer.appendChild(listItem);
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

    // Map
    const mapIframe = document.querySelector("#map iframe");
    if (job.overview.mapUrl) {
        mapIframe.src = job.overview.mapUrl;
        mapIframe.style.display = "block"; // Ensure iframe is visible
    } else {
        console.error("Map URL is missing or invalid in the job object!");
        mapIframe.src = ""; // Clear the iframe source if no valid URL is available
        mapIframe.style.display = "none"; // Hide iframe if no URL is present
    }
}


