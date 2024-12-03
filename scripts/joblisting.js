const jobs = [
  {
    title: "Forward Security Director",
    company: "Bauch, Schuppe and Schulist Co",
    location: "Berlin",
    category: "Hotels & Tourism",
    hoursPerWeek: 40,
    postedTime: "10 min ago",
    companyLogo: "images/tiktok-png.png",
  },
  {
    title: "Marketing Coordinator",
    company: "Acme Corp",
    location: "Hamburg",
    category: "Marketing",
    hoursPerWeek: 20,
    postedTime: "30 min ago",
    companyLogo: "images/Slack.png",
  },
  {
    title: "Software Development Intern",
    company: "Tech Solutions Ltd",
    location: "Munich",
    category: "IT & Software",
    hoursPerWeek: 30,
    postedTime: "1 hour ago",
    companyLogo: "images/mercedes-benz-logo.png",
  },
  {
    title: "Data Analyst Assistant",
    company: "Insight Analytics",
    location: "Stuttgart",
    category: "Data Analysis",
    hoursPerWeek: 25,
    postedTime: "2 hours ago",
    companyLogo: "images/Microsoft_logo.svg.png",
  },
  {
    title: "Customer Support Representative",
    company: "Global Services Inc.",
    location: "Frankfurt",
    category: "Customer Service",
    hoursPerWeek: 15,
    postedTime: "3 hours ago",
    companyLogo: "images/Slack.png",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const jobsContainer = document.getElementById("jobs-container");

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
          <span class="posted-time p1">${job.postedTime}</span>
          </div>

          <div class="job-listing-middle">
            <div class="job-logo">
              <img src="${job.companyLogo}" alt="${job.company} logo" class="company-logo" />
            </div>

            <div class="job-title-company">
              <h3 class="h3">${job.title}</h3>
              <p class="p1">${job.company}</p>
            </div>
          </div>

          <div class="job-listing-bottom">
            <div class="job-detail-items">
              <div class="job-detail-item p1"><i class="fas fa-briefcase"></i> ${job.category}</div>
              <div class="job-detail-item p1"><i class="fas fa-clock"></i> ${job.hoursPerWeek} hours per week</div>
              <div class="job-detail-item p1"><i class="fas fa-map-marker-alt"></i> ${job.location}</div>
            </div>
            <div class="action-button">
              <button class="p3">Job Details</button>
            </div>
          </div>
        </div>
      </div>
        
      `;
      jobsContainer.appendChild(jobCard);
    });
  };

  renderJobs(jobs);
});