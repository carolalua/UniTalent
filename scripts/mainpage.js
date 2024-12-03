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



// Category Data Array
const categories = [
  { icon: "💻", name: "IT", jobCount: 1254 },
  { icon: "📁", name: "Administration", jobCount: 816 },
  { icon: "🛍️", name: "Commerce", jobCount: 2082 },
  { icon: "🏗️", name: "Construction", jobCount: 1520 },
  { icon: "🏨", name: "Hotels & Tourism", jobCount: 1022 },
  { icon: "🎓", name: "Education", jobCount: 1496 },
  { icon: "💰", name: "Financial", jobCount: 1529 },
  { icon: "🚌", name: "Transport", jobCount: 1244 }
];

// Targeting the container for category cards
const categoryGrid = document.querySelector(".category-grid");

// Dynamically generating category cards
categories.forEach(category => {
  const categoryCard = `
    <div class="category-card">
      <div class="category-icon">${category.icon}</div>
      <h3 class="category-name">${category.name}</h3>
      <span class="job-count">${category.jobCount} jobs</span>
    </div>
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