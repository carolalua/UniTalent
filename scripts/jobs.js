// Assuming your JS Object is called `jobDatabase`

document.addEventListener("DOMContentLoaded", function() {
  const jobListingsContainer = document.getElementById("job-listings");

  // Clear existing job listings
  jobListingsContainer.innerHTML = '';

  // Iterate through jobDatabase and create job listings dynamically
  jobDatabase.forEach(job => {
      // Create a new job listing element
      const jobListing = document.createElement("div");
      jobListing.className = "job-listing";

      // Job listing top (posted time)
      const jobListingTop = document.createElement("div");
      jobListingTop.className = "job-listing-top";
      jobListingTop.innerHTML = `<span class="posted-time p1">${job.postingTime}</span>`;
      jobListing.appendChild(jobListingTop);

      // Job listing middle (logo, title, company)
      const jobListingMiddle = document.createElement("div");
      jobListingMiddle.className = "job-listing-middle";
      jobListingMiddle.innerHTML = `
          <div class="job-logo">
              <img src="${job.company.logo}" alt="${job.company.name} Logo">
          </div>
          <div class="job-title-company">
              <h3 class="h3">${job.overview.jobTitle}</h3>
              <p class="p1">${job.company.name}</p>
          </div>
      `;
      jobListing.appendChild(jobListingMiddle);


      // Function to navigate to job details page
      function showJobDetails(job) {
        // Redirect to job display page with the job ID as a query parameter
        window.location.href = `./pages/jobdisplay.html?id=${job.id}`;
      }

      // Job listing bottom (details and button)
      const jobListingBottom = document.createElement("div");
      jobListingBottom.className = "job-listing-bottom";

      // Job detail items
      const jobDetailItems = document.createElement("div");
      jobDetailItems.className = "job-detail-items";
      jobDetailItems.innerHTML = `
          <div class="job-detail-item p1"><i class="fal fa-briefcase"></i> ${job.summary.category}</div>
          <div class="job-detail-item p1"><i class="fal fa-clock"></i> ${job.summary.jobType}</div>
          <div class="job-detail-item p1"><i class="fal fa-map-marker-alt"></i> ${job.summary.location}</div>
      `;
      jobListingBottom.appendChild(jobDetailItems);




      // Action button
      const actionButton = document.createElement("div");
      actionButton.className = "action-button";
      const detailsButton = document.createElement("button");
      detailsButton.className = "p3";
      detailsButton.textContent = "Job Details";
      detailsButton.addEventListener("click", () => {
          // Redirect to the job details page with the job ID
          window.location.href = `./jobdisplay.html?id=${job.id}`;
      });
      actionButton.appendChild(detailsButton);
      jobListingBottom.appendChild(actionButton);

      jobListing.appendChild(jobListingBottom);

      // Append the job listing to the container
      jobListingsContainer.appendChild(jobListing);
  });
});

// Function to show job details (example: show an alert or redirect to a detailed page)
function showJobDetails(job) {
  alert(`Job Title: ${job.overview.jobTitle}\nCompany: ${job.company.name}\nLocation: ${job.summary.location}`);
}
