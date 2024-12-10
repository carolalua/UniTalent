document.addEventListener("DOMContentLoaded", () => {
  const jobListingsContainer = document.getElementById("job-listings");
  const paginationContainer = document.querySelector(".pagination");
  const resetButton = document.getElementById("reset-filters");

  const jobsPerPage = 5; // Number of jobs per page
  let currentPage = 1; // Start on the first page
  let filteredJobs = [...jobDatabase]; // Initialize with all jobs

  const filterInputs = document.querySelectorAll(
    "#filter-input, #education-level, #category, #experience-level, #semester, input[name='proficiency-level'], input[name='location'], input[type='checkbox']"
  );

  // Render initial jobs and pagination
  renderJobs(filteredJobs);
  renderPagination(filteredJobs);

  // Event listeners for filters
  filterInputs.forEach((input) => {
    input.addEventListener("input", applyFilters);
    input.addEventListener("change", applyFilters);
  });

  // Reset filters and re-render all jobs
  resetButton.addEventListener("click", () => {
    // Clear all inputs
    document.getElementById("filter-input").value = "";
    document.getElementById("education-level").value = "";
    document.getElementById("category").value = "";
    document.getElementById("experience-level").value = "";
    document.getElementById("semester").value = "";

    // Reset checkboxes and radio buttons
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      checkbox.checked = false;
    });
    document.querySelector('input[name="proficiency-level"][value="any"]').checked = true;
    document.querySelectorAll('input[name="location"]').forEach((radio) => {
      radio.checked = false;
    });

    // Reset page and re-render
    filteredJobs = [...jobDatabase];
    currentPage = 1;
    renderJobs(filteredJobs);
    renderPagination(filteredJobs);
  });

  // Apply filters and update the results
  function applyFilters() {
    const titleInput = document.getElementById("filter-input").value.toLowerCase();
    const educationLevel = document.getElementById("education-level").value;
    const category = document.getElementById("category").value;
    const experienceLevel = document.getElementById("experience-level").value;
    const semester = document.getElementById("semester").value;
    const englishRequired = document.getElementById("english").checked;
    const germanRequired = document.getElementById("german").checked;
    const proficiencyLevel = document.querySelector('input[name="proficiency-level"]:checked').value;
    const location = document.querySelector('input[name="location"]:checked')?.value || "";

    filteredJobs = jobDatabase.filter((job) => {
      if (titleInput && !job.overview.jobTitle.toLowerCase().includes(titleInput) && !job.company.name.toLowerCase().includes(titleInput)) {
        return false;
      }
      if (educationLevel && job.requirements.degree !== educationLevel) return false;
      if (category && job.summary.category.toLowerCase() !== category) return false;
      if (experienceLevel && job.overview.experience !== experienceLevel) return false;
      if (semester && job.requirements.semester !== semester) return false;
      if (englishRequired && !job.requirements.languages.includes("english")) return false;
      if (germanRequired && !job.requirements.languages.includes("german")) return false;
      if (proficiencyLevel !== "any" && job.requirements.proficiency !== proficiencyLevel) return false;
      if (location && job.summary.location.toLowerCase() !== location) return false;

      return true; // Include job if all filters pass
    });

    currentPage = 1; // Reset to the first page after filtering
    renderJobs(filteredJobs);
    renderPagination(filteredJobs);
  }

  // Render job listings in the container (with pagination)
  function renderJobs(jobs) {
    jobListingsContainer.innerHTML = ""; // Clear existing listings

    if (jobs.length === 0) {
      jobListingsContainer.innerHTML = "<p>No jobs match your search criteria.</p>";
      return;
    }

    const startIndex = (currentPage - 1) * jobsPerPage;
    const endIndex = Math.min(startIndex + jobsPerPage, jobs.length);

    jobs.slice(startIndex, endIndex).forEach((job) => {
      const jobListing = document.createElement("div");
      jobListing.className = "job-listing";

      jobListing.innerHTML = `
        <div class="job-listing-top">
          <span class="posted-time p1">${job.postingTime}</span>
        </div>
        <div class="job-listing-middle">
          <div class="job-logo">
            <img src="${job.company.logo}" alt="${job.company.name} Logo">
          </div>
          <div class="job-title-company">
            <h3 class="h3">${job.overview.jobTitle}</h3>
            <p class="p1">${job.company.name}</p>
          </div>
        </div>
        <div class="job-listing-bottom">
          <div class="job-detail-items">
            <div class="job-detail-item p1"><i class="fal fa-briefcase"></i> ${job.summary.category}</div>
            <div class="job-detail-item p1"><i class="fal fa-clock"></i> ${job.summary.jobType}</div>
            <div class="job-detail-item p1"><i class="fal fa-map-marker-alt"></i> ${job.summary.location}</div>
          </div>
          <div class="action-button">
            <button class="p3" onclick="window.open('./jobdisplay.html?id=${job.id}', '_blank')">Job Details</button>
          </div>
        </div>
      `;

      jobListingsContainer.appendChild(jobListing);
    });
  }

  // Render pagination buttons
  function renderPagination(jobs) {
    paginationContainer.innerHTML = ""; // Clear existing pagination

    const totalPages = Math.ceil(jobs.length / jobsPerPage);
    if (totalPages <= 1) return; // No pagination needed for one page

    if (currentPage > 1) {
      const prevButton = document.createElement("button");
      prevButton.className = "pagination-btn prev";
      prevButton.textContent = "< Previous";
      prevButton.addEventListener("click", () => {
        currentPage--;
        renderJobs(jobs);
        renderPagination(jobs);
      });
      paginationContainer.appendChild(prevButton);
    }

    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("button");
      pageButton.className = `pagination-btn ${i === currentPage ? "active" : ""}`;
      pageButton.textContent = i;
      pageButton.addEventListener("click", () => {
        currentPage = i;
        renderJobs(jobs);
        renderPagination(jobs);
      });
      paginationContainer.appendChild(pageButton);
    }

    if (currentPage < totalPages) {
      const nextButton = document.createElement("button");
      nextButton.className = "pagination-btn next";
      nextButton.textContent = "Next >";
      nextButton.addEventListener("click", () => {
        currentPage++;
        renderJobs(jobs);
        renderPagination(jobs);
      });
      paginationContainer.appendChild(nextButton);
    }
  }
});