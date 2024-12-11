document.addEventListener("DOMContentLoaded", () => {
  const jobListingsContainer = document.getElementById("job-listings");
  const paginationContainer = document.querySelector(".pagination");
  const resetButton = document.getElementById("reset-filters");
  const jobCountElement = document.getElementById("job-count");

  const jobsPerPage = 5; // Number of jobs per page
  let currentPage = 1; // Start on the first page

  // Sort jobDatabase by postingTime in descending order
  let filteredJobs = [...jobDatabase].sort((a, b) => new Date(b.postingTime) - new Date(a.postingTime));

  const filterInputs = document.querySelectorAll(
    "#filter-input, #education-level, #experience-level, #category, input[name='location'], input[type='checkbox'], input[name='proficiency-level']"
  );

  const languageCheckboxes = document.querySelectorAll("#english, #german");
  const proficiencyRadios = document.querySelectorAll("input[name='proficiency-level']");

  // Initialize proficiency level to none selected
  proficiencyRadios.forEach((radio) => {
    radio.checked = false;
  });

  // Add event listener to language checkboxes
  languageCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        // Automatically select "Any" proficiency level
        document.querySelector("input[name='proficiency-level'][value='any']").checked = true;
      } else {
        // Check if no language is selected, then deselect proficiency radios
        const anyLanguageSelected = Array.from(languageCheckboxes).some((cb) => cb.checked);
        if (!anyLanguageSelected) {
          proficiencyRadios.forEach((radio) => {
            radio.checked = false;
          });
        }
      }
    });
  });

  // Render initial jobs and pagination
  renderJobs(filteredJobs);
  renderPagination(filteredJobs);
  updateJobCount(filteredJobs.length); // Update job count initially

  // Event listeners for filters
  filterInputs.forEach((input) => {
    input.addEventListener("input", applyFilters);
    input.addEventListener("change", applyFilters); // Ensures radio buttons are updated
  });

  // Reset filters and re-render all jobs
  resetButton.addEventListener("click", () => {
    // Clear all text inputs
    document.getElementById("filter-input").value = "";
    document.getElementById("education-level").value = "";
    document.getElementById("experience-level").value = "";
    document.getElementById("category").value = "";

    // Reset checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      checkbox.checked = false;
    });

    // Reset proficiency level radio buttons
    document.querySelectorAll('input[name="proficiency-level"]').forEach((radio) => {
      radio.checked = false; // Uncheck all proficiency levels
    });

    // Reset location type radio buttons
    document.querySelectorAll('input[name="location"]').forEach((radio) => {
      radio.checked = false; // Uncheck all location types
    });

    // Reset page and re-render
    filteredJobs = [...jobDatabase].sort((a, b) => new Date(b.postingTime) - new Date(a.postingTime)); // Reapply default sort
    currentPage = 1;
    renderJobs(filteredJobs);
    renderPagination(filteredJobs);
    updateJobCount(filteredJobs.length); // Update job count on reset
  });

  // Apply filters and update the results
  function applyFilters() {
    const titleInput = document.getElementById("filter-input").value.toLowerCase();
    const educationLevel = document.getElementById("education-level").value;
    const experienceLevel = document.getElementById("experience-level").value;
    const category = document.getElementById("category").value.toLowerCase();
    const locationType = document.querySelector('input[name="location"]:checked')?.value.toLowerCase();
    const englishRequired = document.getElementById("english").checked;
    const germanRequired = document.getElementById("german").checked;
    const proficiencyLevel = document.querySelector('input[name="proficiency-level"]:checked')?.value || "any";

    filteredJobs = jobDatabase
      .filter((job) => {
        // Filter by job title or company name
        if (
          titleInput &&
          !job.overview.jobTitle.toLowerCase().includes(titleInput) &&
          !job.company.name.toLowerCase().includes(titleInput)
        ) {
          return false;
        }

        // Filter by education level
        if (educationLevel && !job.educationLevel.includes(educationLevel)) {
          return false;
        }

        // Filter by experience level
        if (experienceLevel && !job.experienceLevel.includes(experienceLevel)) {
          return false;
        }

        // Filter by category
        if (category && job.summary.category.toLowerCase() !== category) {
          return false;
        }

        // Filter by location type
        if (locationType && !job.locationType.includes(locationType)) {
          return false;
        }

        // Filter by language requirements and proficiency
        if (englishRequired || germanRequired) {
          let languageMatch = true;

          // Check English proficiency
          if (englishRequired) {
            const english = job.languages?.English;
            if (
              !english || // English is not listed
              !english.required || // English is not required
              (proficiencyLevel !== "any" && english.proficiency?.toLowerCase() !== proficiencyLevel.toLowerCase())
            ) {
              languageMatch = false;
            }
          }

          // Check German proficiency
          if (germanRequired) {
            const german = job.languages?.German;
            if (
              !german || // German is not listed
              !german.required || // German is not required
              (proficiencyLevel !== "any" && german.proficiency?.toLowerCase() !== proficiencyLevel.toLowerCase())
            ) {
              languageMatch = false;
            }
          }

          if (!languageMatch) {
            return false; // Exclude if any language mismatch
          }
        }

        return true; // Include job if it passes all filters
      })
      .sort((a, b) => new Date(b.postingTime) - new Date(a.postingTime)); // Sort filtered results by postingTime

    // Reset to the first page and re-render
    currentPage = 1;
    renderJobs(filteredJobs);
    renderPagination(filteredJobs);
    updateJobCount(filteredJobs.length); // Update job count
  }

  function updateJobCount(count) {
    if (jobCountElement) {
      jobCountElement.textContent = `${count} jobs found`;
    }
  }

  function renderJobs(jobs) {
    jobListingsContainer.innerHTML = ""; // Clear existing listings
  
    if (jobs.length === 0) {
      jobListingsContainer.innerHTML = "<p>No jobs match your search criteria.</p>";
      return;
    }
  
    const startIndex = (currentPage - 1) * jobsPerPage;
    const endIndex = Math.min(startIndex + jobsPerPage, jobs.length);
  
    jobs.slice(startIndex, endIndex).forEach((job) => {
      const relativeTime = getRelativeTime(job.postingTime); // Calculate relative time dynamically
  
      // Adjust the logo path dynamically
      const logoPath = job.company.logo.startsWith("../")
        ? job.company.logo.replace("../", "./") // Adjust for root HTML
        : job.company.logo;
  
      const jobListing = document.createElement("div");
      jobListing.className = "job-listing";
  
      jobListing.innerHTML = `
        <div class="job-listing-top">
          <span class="posted-time p1">${relativeTime}</span>
        </div>
        <div class="job-listing-middle">
          <div class="job-logo">
            <img src="${logoPath}" alt="${job.company.name} Logo">
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
        updateJobCount(jobs.length); // Update job count on page change
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
        updateJobCount(jobs.length); // Update job count on page change
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
        updateJobCount(jobs.length); // Update job count on page change
      });
      paginationContainer.appendChild(nextButton);
    }
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
});