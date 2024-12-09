document.addEventListener("DOMContentLoaded", () => {
  const jobListingsContainer = document.getElementById("job-listings");
  const paginationContainer = document.querySelector(".pagination");
  const resetButton = document.getElementById("reset-filters");
  const jobCountElement = document.getElementById("job-count");

  const jobsPerPage = 5; // Number of jobs per page
  let currentPage = 1; // Start on the first page

  // Get the category from the URL if it exists
  const urlParams = new URLSearchParams(window.location.search);
  const selectedCategory = urlParams.get("category");

  // Helper function to convert category name to slug format
  const toSlug = (name) => name.toLowerCase().replace(/\s+/g, '-');

  // Initial filter by URL category (if provided)
  let filteredJobs = [...jobDatabase].filter(
    (job) => !selectedCategory || toSlug(job.summary.category) === selectedCategory
  );

  // Sort filtered jobs by posting time
  filteredJobs.sort((a, b) => new Date(b.postingTime) - new Date(a.postingTime));

  // Render initial jobs and pagination
  renderJobs(filteredJobs);
  renderPagination(filteredJobs);
  updateJobCount(filteredJobs.length);

  // Event listeners for filters
  const filterInputs = document.querySelectorAll(
    "#filter-input, #education-level, #experience-level, #category, input[name='location'], input[type='checkbox'], input[name='proficiency-level']"
  );
  filterInputs.forEach((input) => {
    input.addEventListener("input", applyFilters);
    input.addEventListener("change", applyFilters); // For select, radio, and checkbox inputs
  });

  // Language checkboxes and proficiency radios
  const languageCheckboxes = document.querySelectorAll("#english, #german");
  const proficiencyRadios = document.querySelectorAll("input[name='proficiency-level']");

  // Function to update proficiency radio buttons based on language selection
  const updateProficiencyRadios = () => {
    const anyLanguageSelected = Array.from(languageCheckboxes).some((cb) => cb.checked);

    if (!anyLanguageSelected) {
      // Uncheck all proficiency radios if no language is selected
      proficiencyRadios.forEach((radio) => {
        radio.checked = false;
      });
    } else {
      // Set "Any" proficiency level as default if a language is selected
      const anyRadio = document.querySelector("input[name='proficiency-level'][value='any']");
      if (anyRadio) anyRadio.checked = true;
    }
  };

  // Add event listener to language checkboxes
  languageCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", updateProficiencyRadios);
  });

  // Ensure proficiency radios are updated on page load
  updateProficiencyRadios();

  // Reset filters and reload all jobs
  resetButton.addEventListener("click", () => {
    // Clear all input values
    document.getElementById("filter-input").value = "";
    document.getElementById("education-level").value = "";
    document.getElementById("experience-level").value = "";
    document.getElementById("category").value = "";

    // Reset checkboxes
    languageCheckboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });

    // Reset proficiency level radio buttons
    proficiencyRadios.forEach((radio) => {
      radio.checked = false; // Uncheck all proficiency levels
    });

    // Reset location type radio buttons
    document.querySelectorAll('input[name="location"]').forEach((radio) => {
      radio.checked = false; // Uncheck all location types
    });

    // Reset filtered jobs and re-render
    filteredJobs = [...jobDatabase].sort((a, b) => new Date(b.postingTime) - new Date(a.postingTime)); // Reapply default sort
    currentPage = 1;
    renderJobs(filteredJobs);
    renderPagination(filteredJobs);
    updateJobCount(filteredJobs.length); // Update job count on reset
  });

  // Apply filters dynamically
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
              !english || // English not listed
              !english.required || // English not required
              (proficiencyLevel !== "any" && english.proficiency?.toLowerCase() !== proficiencyLevel.toLowerCase())
            ) {
              languageMatch = false;
            }
          }

          // Check German proficiency
          if (germanRequired) {
            const german = job.languages?.German;
            if (
              !german || // German not listed
              !german.required || // German not required
              (proficiencyLevel !== "any" && german.proficiency?.toLowerCase() !== proficiencyLevel.toLowerCase())
            ) {
              languageMatch = false;
            }
          }

          if (!languageMatch) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => new Date(b.postingTime) - new Date(a.postingTime)); // Sort filtered results by postingTime

    // Reset to the first page and re-render
    currentPage = 1;
    renderJobs(filteredJobs);
    renderPagination(filteredJobs);
    updateJobCount(filteredJobs.length);
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
      const relativeTime = getRelativeTime(job.postingTime);

      const jobListing = document.createElement("div");
      jobListing.className = "job-listing";

      jobListing.innerHTML = `
        <div class="job-listing-top">
          <span class="posted-time p1">${relativeTime}</span>
        </div>
        <div class="job-listing-middle">
          <div class="job-logo">
            <img src="../images/${job.company.logo}" alt="${job.company.name} Logo">
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
        updateJobCount(jobs.length);
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
        updateJobCount(jobs.length);
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
        updateJobCount(jobs.length);
      });
      paginationContainer.appendChild(nextButton);
    }
  }

  function getRelativeTime(postingTime) {
    const now = new Date();
    const posted = new Date(postingTime);
    const differenceInSeconds = Math.floor((now - posted) / 1000);

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