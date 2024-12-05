// Get the job ID from URL parameters (e.g., ?id=1)
const urlParams = new URLSearchParams(window.location.search);
const jobId = parseInt(urlParams.get("id"));

// Find the job in the database
const job = jobsDatabase.find((job) => job.id === jobId);

// Populate the page with job details
if (job) {
  document.querySelector(".postingtime").innerText = job.postingTime;
  document.querySelector(".company-logo img").src = job.companyLogo;
  document.querySelector(".company-name h3").innerText = job.companyName;

  document.querySelector("#category-text").innerText = job.category;
  document.querySelector("#jobtype-text").innerText = job.jobType;
  document.querySelector("#location-text").innerText = job.location;

  document.querySelector(".description-text").innerHTML = job.description;

  document.querySelector(".reponsibilites-listing").innerHTML = job.responsibilities;

  // Updated class name to match HTML structure
  document.querySelector(".requirements-texts").innerHTML = job.requirements; // Fixed class name here
  document.querySelector(".requirements-listing ul").innerHTML = job.requirementsList
    .map((req) => `<li>${req}</li>`)
    .join("");

  document.querySelector(".tags-row").innerHTML = job.tags
    .map((tag) => `<div class="tag-box">${tag}</div>`)
    .join("");

  document.querySelector("#jobtitle .joboverview-answer").innerText = job.jobTitle;
  document.querySelector("#jobtype .joboverview-answer").innerText = job.jobType;
  document.querySelector("#category .joboverview-answer").innerText = job.category;
  document.querySelector("#experience .joboverview-answer").innerText = job.experience;
  document.querySelector("#degree .joboverview-answer").innerText = job.degree;
  document.querySelector("#gender .joboverview-answer").innerText = job.gender;
  document.querySelector("#location .joboverview-answer").innerText = job.location;

  document.querySelector("#map iframe").src = job.mapUrl;
} else {
  // If job not found, display a message or redirect
  document.querySelector(".main-container").innerHTML = "<p>Job not found.</p>";
}