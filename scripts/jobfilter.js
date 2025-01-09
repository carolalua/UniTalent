const jobDatabase = JSON.parse(localStorage.getItem('jobDatabase')).filter(job => job.status !== "Closed");

document.addEventListener("DOMContentLoaded", () => {
  const jobListingsContainer = document.getElementById("job-listings");
  const paginationContainer = document.querySelector(".pagination");
  const resetButton = document.getElementById("reset-filters");
  const jobCountElement = document.getElementById("job-count");
  const topCompanySection = document.getElementById("top-company"); // Top companies section

  const jobsPerPage = 5; // Number of jobs per page
  let currentPage = 1; // Start on the first page

  // Get search parameters from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const searchTitle = urlParams.get("job-title")?.toLowerCase() || "";
  const searchLocation = urlParams.get("locations")?.toLowerCase() || "";
  const selectedCategory =
    urlParams.get("category")?.toLowerCase() === "select category"
      ? ""
      : urlParams.get("category")?.toLowerCase() || "";

  console.log({ searchTitle, searchLocation, selectedCategory }); // Debugging URL parameters

  // Helper function to convert category name to slug format
  const toSlug = (name) => name.toLowerCase().replace(/\s+/g, "-");

  // Initial filter based on search parameters
  const tagFilter = urlParams.get("tag")?.toLowerCase() || ""; // Get the tag parameter from the URL

  let filteredJobs = jobDatabase.filter((job) => {
    const matchesTitle =
      !searchTitle ||
      job.overview.jobTitle.toLowerCase().includes(searchTitle) ||
      job.company.name.toLowerCase().includes(searchTitle);

    const matchesLocation =
      !searchLocation || job.summary.location.toLowerCase().includes(searchLocation);

    const matchesCategory =
      !selectedCategory || job.summary.category.toLowerCase() === selectedCategory;

    const matchesTag =
      !tagFilter || job.tags.some((tag) => tag.toLowerCase() === tagFilter);

    return matchesTitle && matchesLocation && matchesCategory && matchesTag;
  });

  document.getElementById('filter-input').value = searchTitle;
  document.getElementById('category').value = selectedCategory;

  // Sort jobs and render them initially
  filteredJobs.sort((a, b) => new Date(b.postingTime) - new Date(a.postingTime));
  renderJobs(filteredJobs);
  renderPagination(filteredJobs);
  updateJobCount(filteredJobs.length);


  // Sort filtered jobs by posting time
  filteredJobs.sort((a, b) => new Date(b.postingTime) - new Date(a.postingTime));

  // Render jobs and pagination
  renderJobs(filteredJobs);
  renderPagination(filteredJobs);
  updateJobCount(filteredJobs.length);

  


  // Event listeners for filters
  const filterInputs = document.querySelectorAll(
    "#filter-input, #education-level, #experience-level, #category, input[name='location'], input[type='checkbox'], input[name='proficiency-level']"
  );
  filterInputs.forEach((input) => {
    input.addEventListener("input", () => applyFilters()); // Apply filters dynamically
    input.addEventListener("change", () => applyFilters()); // Handle select, checkbox, and radio inputs
  });

  // Language checkboxes and proficiency radios
  const languageCheckboxes = document.querySelectorAll("#english, #german");
  const proficiencyRadios = document.querySelectorAll("input[name='proficiency-level']");

  // Function to update proficiency radio buttons based on language selection
  const updateProficiencyRadios = () => {
    const anyLanguageSelected = Array.from(languageCheckboxes).some((cb) => cb.checked);
    if (!anyLanguageSelected) {
      // Uncheck all proficiency radios if no language is selected
      proficiencyRadios.forEach((radio) => (radio.checked = false));
    } else {
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

  // Reset filters
  resetButton.addEventListener("click", () => {
    // Clear all input values
    document.getElementById("filter-input").value = "";
    document.getElementById("education-level").value = "";
    document.getElementById("experience-level").value = "";
    document.getElementById("category").value = "";
  // Reset checkboxes
  languageCheckboxes.forEach((checkbox) => (checkbox.checked = false));
    proficiencyRadios.forEach((radio) => (radio.checked = false));
    document.querySelectorAll('input[name="location"]').forEach((radio) => (radio.checked = false));
    filteredJobs = [...jobDatabase].sort((a, b) => new Date(b.postingTime) - new Date(a.postingTime));
    currentPage = 1;
    renderJobs(filteredJobs);
    renderPagination(filteredJobs);
    updateJobCount(filteredJobs.length);
    topCompanySection.style.display = "block"; // Show the top companies section on reset
  });

  function applyFilters() {
    const titleInput = document.getElementById("filter-input").value.toLowerCase();
    const educationLevel = document.getElementById("education-level").value;
    const experienceLevel = document.getElementById("experience-level").value;
    const category = document.getElementById("category").value.toLowerCase();
    const locationType = document.querySelector('input[name="location"]:checked')?.value.toLowerCase();
    const englishRequired = document.getElementById("english").checked;
    const germanRequired = document.getElementById("german").checked;
    const proficiencyLevel = document.querySelector('input[name="proficiency-level"]:checked')?.value || "any";

    filteredJobs = jobDatabase.filter((job) => {
      const matchesTitle =
        !titleInput ||
        job.overview.jobTitle.toLowerCase().includes(titleInput) ||
        job.company.name.toLowerCase().includes(titleInput);

      const matchesLocationType = !locationType || job.locationType.includes(locationType);

      const matchesCategory = !category || job.summary.category.toLowerCase() === category;

      const matchesEducationLevel = !educationLevel || job.educationLevel.includes(educationLevel);

      const matchesExperienceLevel = !experienceLevel || job.experienceLevel.includes(experienceLevel);

      const matchesLanguage = (() => {
        let languageMatch = true;

        if (englishRequired) {
          const english = job.languages?.English;
          if (!english || !english.required || (proficiencyLevel !== "any" && english.proficiency?.toLowerCase() !== proficiencyLevel.toLowerCase())) {
            languageMatch = false;
          }
        }
        if (germanRequired) {
          const german = job.languages?.German;
          if (!german || !german.required || (proficiencyLevel !== "any" && german.proficiency?.toLowerCase() !== proficiencyLevel.toLowerCase())) {
            languageMatch = false;
          }
        }
        return languageMatch;
      })();

      return matchesTitle && matchesLocationType && matchesCategory && matchesEducationLevel && matchesExperienceLevel && matchesLanguage;
    });

    currentPage = 1;
    renderJobs(filteredJobs);
    renderPagination(filteredJobs);
    updateJobCount(filteredJobs.length);
  }



  // Top company cards event listeners
  document.querySelectorAll(".top-company-card").forEach((card) => {
    card.addEventListener("click", () => {
      const companyName = card.querySelector("h3").textContent.trim();
      console.log("Clicked Company:", companyName);
  
      filteredJobs = jobDatabase.filter((job) => {
        console.log("Comparing:", job.company.name.trim(), "with", companyName);
        return job.company.name.trim().toLowerCase() === companyName.toLowerCase();
      });
      
      currentPage = 1;
  
      renderJobs(filteredJobs);
      renderPagination(filteredJobs);
      updateJobCount(filteredJobs.length);
  
      topCompanySection.style.display = "none"; // Hide top company section
      window.scrollTo(0, 0); // Scroll back to the top
    });
  });


  function renderJobs(jobs) {
    jobListingsContainer.innerHTML = jobs
      .slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage)
      .map(
        (job) => `
        <div class="job-listing">
          <div>${job.company.name}</div>
          <div>${job.overview.jobTitle}</div>
        </div>`
      )
      .join("");
  }

  function updateJobCount(count) {
    jobCountElement.textContent = `${count} jobs found`;
  }

  

  function renderJobs(jobs) {
    jobListingsContainer.innerHTML = "";
    if (jobs.length === 0) {
      jobListingsContainer.innerHTML = `
        <p>No jobs match your search criteria.</p>
      `;
      return;
    }
    const startIndex = (currentPage - 1) * jobsPerPage;
    const endIndex = Math.min(startIndex + jobsPerPage, jobs.length);

    jobs.slice(startIndex, endIndex).forEach((job) => {
      const relativeTime = getRelativeTime(job.postingTime);
      const jobListing = `
        <div class="job-listing">
          <div class="job-listing-top">
            <span class="posted-time p1">${relativeTime}</span>
          </div>
          <div class="job-listing-middle">
            <div class="job-logo">
              <img src="${job.company.logo.startsWith('data:image') ? job.company.logo : `../images/${job.company.logo}`}" alt="${job.company.name} Logo">
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
        </div>`;
      jobListingsContainer.innerHTML += jobListing;
    });
  }

  function renderPagination(jobs) {
    paginationContainer.innerHTML = "";
  
    const totalPages = Math.ceil(jobs.length / jobsPerPage);
    if (totalPages <= 1) return; // No pagination needed for one page
  
    const maxVisiblePages = 5; // Fixed 5 pages before ellipsis
  
    // Helper function to create a page button
    const createPageButton = (page, isActive = false) => {
      const button = document.createElement("button");
      button.textContent = page;
      button.className = `pagination-btn ${isActive ? "active" : ""}`;
      button.addEventListener("click", () => {
        currentPage = page;
        renderJobs(jobs);
        renderPagination(jobs);
        updateJobCount(jobs.length);
      });
      return button;
    };
  
    // Helper function to create ellipsis
    const createEllipsis = () => {
      const ellipsis = document.createElement("span");
      ellipsis.textContent = "...";
      ellipsis.className = "pagination-ellipsis";
      return ellipsis;
    };
  
    // Add "Previous" button
    if (currentPage > 1) {
      const prevButton = document.createElement("button");
      prevButton.className = "pagination-btn prev";
      prevButton.textContent = "❮";
      prevButton.addEventListener("click", () => {
        currentPage--;
        renderJobs(jobs);
        renderPagination(jobs);
        updateJobCount(jobs.length);
      });
      paginationContainer.appendChild(prevButton);
    }
  
    // Always show the first page
    paginationContainer.appendChild(createPageButton(1, currentPage === 1));
  
    // Left ellipsis if currentPage > maxVisiblePages
    if (currentPage > maxVisiblePages) {
      paginationContainer.appendChild(createEllipsis());
    }
  
    // Calculate visible range
    const startPage = Math.max(2, currentPage - 2);
    const endPage = Math.min(totalPages - 1, startPage + maxVisiblePages - 2);
  
    // Render visible pages
    for (let i = startPage; i <= endPage; i++) {
      paginationContainer.appendChild(createPageButton(i, currentPage === i));
    }
  
    // Right ellipsis if there are pages after the visible range
    if (endPage < totalPages - 1) {
      paginationContainer.appendChild(createEllipsis());
    }
  
    // Always show the last page
    if (totalPages > 1) {
      paginationContainer.appendChild(createPageButton(totalPages, currentPage === totalPages));
    }
  
    // Add "Next" button
    if (currentPage < totalPages) {
      const nextButton = document.createElement("button");
      nextButton.className = "pagination-btn next";
      nextButton.textContent = "❯";
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
    const diffInSeconds = Math.floor((now - posted) / 1000);
  
    if (diffInSeconds < 3600) {
      const diffInMinutes = Math.max(1, Math.floor(diffInSeconds / 60)); // Ensure at least 1 minute
      return `${diffInMinutes} minute${diffInMinutes !== 1 ? "s" : ""} ago`;
    }
    if (diffInSeconds < 86400) {
      const diffInHours = Math.floor(diffInSeconds / 3600);
      return `${diffInHours} hour${diffInHours !== 1 ? "s" : ""} ago`;
    }
    const diffInDays = Math.floor(diffInSeconds / 86400);
    return `${diffInDays} day${diffInDays !== 1 ? "s" : ""} ago`;
  }
});

function updateTopCompanyJobCounts() {
  const companyCards = document.querySelectorAll(".top-company-card");
  
  // Iterate through each company card and update job count
  companyCards.forEach((card) => {
    const companyName = card.dataset.company.trim().toLowerCase(); // Get company name
    const jobCount = jobDatabase.filter((job) => 
      job.company.name.trim().toLowerCase() === companyName
    ).length;

    // Find the open-jobs span and update its text content
    const jobCountElement = card.querySelector(".open-jobs");
    if (jobCountElement) {
      jobCountElement.textContent = `${jobCount} open job${jobCount !== 1 ? "s" : ""}`;
    }
  });
}

// Call this function after jobDatabase is loaded
updateTopCompanyJobCounts();