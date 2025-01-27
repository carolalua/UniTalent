document.addEventListener("DOMContentLoaded", () => {
  const jobsContainer = document.getElementById("jobs-container");

  // Function to sort and retrieve the most recent jobs
  const getRecentJobs = (jobDatabase, limit = 5) => {
    // Sort jobs by posting time (newest first)
    const sortedJobs = jobDatabase.sort((a, b) => new Date(b.postingTime) - new Date(a.postingTime));
    // Return the top `limit` jobs
    return sortedJobs.slice(0, limit);
  };


// Function to render jobs
const renderJobs = (jobs) => {
  jobsContainer.innerHTML = ""; // Clear previous content

  jobs.forEach((job) => {
    const jobCard = document.createElement("div");
    jobCard.classList.add("job-card");

    jobCard.innerHTML = `
      <div class="recent-jobs-container">
        <div class="job-listing">
          <div class="job-listing-top">
            <span class="posted-time p1">${getRelativeTime(job.postingTime)}</span>
          </div>

          <div class="job-listing-middle">
            <div class="job-logo">
              <img src="./images/${job.company.logo}" alt="${job.company.name} logo" class="company-logo" />
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
              <button class="p3" onclick="window.open('./pages/jobdisplay.html?id=${job.id}', '_blank')">Job Details</button>
            </div>
          </div>
        </div>
      </div>
    `;
    jobsContainer.appendChild(jobCard);
  });
};


  // Fetch the first 5 recent jobs
  const recentJobs = getRecentJobs(jobDatabase, 5);
  renderJobs(recentJobs);

  // Update dashboard statistics
  const companiesEmployers = JSON.parse(localStorage.getItem("companies")) || [];
  const companies = jobDatabase.map((job) => job.company.name);
  const uniqueCompanies = new Set(companies);

  const jobsNumber = document.getElementById("jobs-number");
  jobsNumber.textContent = jobDatabase.length;

  const compNumber = document.getElementById("companies-number");
  compNumber.textContent = uniqueCompanies.size;

  const empNumber = document.getElementById("employers-number");
  empNumber.textContent = companiesEmployers.length;

  // Utility function to calculate relative time
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




// Targeting the container for category cards
const categoryGrid = document.querySelector(".category-grid");

// Calculate dynamic job counts by category
const categories = jobDatabase.reduce((acc, job) => {
  const categoryName = job.summary.category;
  if (!acc[categoryName]) {
    acc[categoryName] = { icon: "", name: categoryName, jobCount: 0 };
  }
  acc[categoryName].jobCount += 1;
  return acc;
}, {
  "IT": { icon: "💻", name: "IT", jobCount: 0 },
  "Administration": { icon: "📁", name: "Administration", jobCount: 0 },
  "Commerce": { icon: "🛍️", name: "Commerce", jobCount: 0 },
  "Construction": { icon: "🏗️", name: "Construction", jobCount: 0 },
  "Tourism": { icon: "🏨", name: "Tourism", jobCount: 0 },
  "Education": { icon: "🎓", name: "Education", jobCount: 0 },
  "Financial": { icon: "💰", name: "Financial", jobCount: 0 },
  "Transport": { icon: "🚌", name: "Transport", jobCount: 0 },
});

// Convert categories to an array for iteration
const categoriesArray = Object.values(categories);

// Dynamically generating category cards
categoryGrid.innerHTML = ""; // Clear existing content
categoriesArray.forEach(category => {
  const categorySlug = category.name.toLowerCase().replace(/\s+/g, '-'); // Convert category name to slug
  const categoryCard = `
    <a href="./pages/jobs.html?category=${categorySlug}" class="category-link">
      <div class="category-card">
        <div class="category-icon">${category.icon}</div>
        <h3 class="category-name">${category.name}</h3>
        <span class="job-count">${category.jobCount} jobs</span>
      </div>
    </a>
  `;
  categoryGrid.innerHTML += categoryCard;
});


/// Testimonials Data Array
const testimonials = [
  {
    stars: 5,
    phrase: "Amazing services",
    text: "This website made my internship search so much easier. I found a perfect opportunity that fits my schedule and aligns with my career goals. Highly recommend it for any...",
    image: "images/testi_001.jpg",
    name: "Ezra Smith",
    position: "IT Audit, Internship",
  },
  {
    stars: 5,
    phrase: "Everything simple",
    text: "I was impressed by how user-friendly this site is! Within days, I secured a tutoring job that works with my classes. The support team was incredibly helpful throughout the...",
    image: "images/testi_002.jpg",
    name: "Shweta Singh",
    position: "Tutoring, Part-time",
  },
  {
    stars: 5,
    phrase: "Awesome, thank you!",
    text: "This platform opened up so many job options for me, from remote gigs to on-campus roles. I not only found a great job, but also made valuable connection for...",
    image: "images/testi_003.jpg",
    name: "Markus Müller",
    position: "Online Marketing, Working student",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const testimonialsContainer = document.querySelector(".testi-row-cards");

  const renderTestimonials = () => {
    testimonials.forEach((testimonial) => {
      const testimonialCard = document.createElement("div");
      testimonialCard.classList.add("testi-card", "card");

      testimonialCard.innerHTML = `
        <div class="testi-card star">
          ${'<i class="fa-solid fa-star"></i>'.repeat(testimonial.stars)}
        </div>
        <div class="testi-card phrase">
          <h4>${testimonial.phrase}</h4>
        </div>
        <div class="testi-card-text">
          ${testimonial.text}
        </div>
        <div class="testi-card-profile">
          <div class="testi-card personpic">
            <img src="${testimonial.image}" alt="${testimonial.name}">
          </div>
          <div class="testi-card-person">
            <div class="testi-card personname">
              ${testimonial.name}
            </div>
            <div class="testi-card personposition">
              ${testimonial.position}
            </div>
          </div>
        </div>
      `;

      testimonialsContainer.appendChild(testimonialCard);
    });
  };

  renderTestimonials();
});


/// Event Listener to Search Bar
document.addEventListener("DOMContentLoaded", () => {
  const titleInput = document.getElementById("job-title");
  const locationInput = document.getElementById("locations");
  const searchButton = document.querySelector(".button-search");

  const triggerSearch = () => {
    const titleValue = titleInput.value.trim();
    const locationValue = locationInput.value.trim();
    const categoryValue = document.getElementById("category").value.trim();

    const searchParams = new URLSearchParams({
      "job-title": titleValue,
      locations: locationValue,
      category: categoryValue,
    });

    window.location.href = `pages/jobs.html?${searchParams.toString()}`;
  };

  // Event listener for the search button
  searchButton.addEventListener("click", triggerSearch);

  // Add Enter key listener to search inputs
  const searchInputs = [titleInput, locationInput];
  searchInputs.forEach((input) => {
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault(); // Prevent the default form submission behavior
        triggerSearch(); // Trigger the search
      }
    });
  });
});