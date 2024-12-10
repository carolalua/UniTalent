document.addEventListener("DOMContentLoaded", function () {
    const jobListingsContainer = document.getElementById("job-listings");
    const paginationContainer = document.querySelector(".pagination");

    const jobsPerPage = 5; // Number of jobs per page
    let currentPage = 1; // Current page

    // Function to render job listings
    function renderJobs(jobs, page = 1) {
        jobListingsContainer.innerHTML = '';

        const startIndex = (page - 1) * jobsPerPage;
        const endIndex = Math.min(startIndex + jobsPerPage, jobs.length);

        jobs.slice(startIndex, endIndex).forEach(job => {
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

    // Function to render pagination buttons
    function renderPagination(jobs) {
        paginationContainer.innerHTML = '';

        const totalPages = Math.ceil(jobs.length / jobsPerPage);

        // Add "Previous" button
        if (currentPage > 1) {
            const prevButton = document.createElement("button");
            prevButton.className = "pagination-btn prev";
            prevButton.textContent = "< Previous";
            prevButton.addEventListener("click", () => {
                currentPage--;
                renderJobs(jobs, currentPage);
                renderPagination(jobs);
            });
            paginationContainer.appendChild(prevButton);
        }

        // Add page number buttons
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement("button");
            pageButton.className = "pagination-btn";
            pageButton.textContent = i;
            if (i === currentPage) {
                pageButton.classList.add("active");
            }
            pageButton.addEventListener("click", () => {
                currentPage = i;
                renderJobs(jobs, currentPage);
                renderPagination(jobs);
            });
            paginationContainer.appendChild(pageButton);
        }

        // Add "Next" button
        if (currentPage < totalPages) {
            const nextButton = document.createElement("button");
            nextButton.className = "pagination-btn next";
            nextButton.textContent = "Next >";
            nextButton.addEventListener("click", () => {
                currentPage++;
                renderJobs(jobs, currentPage);
                renderPagination(jobs);
            });
            paginationContainer.appendChild(nextButton);
        }
    }

    // Initial render
    renderJobs(jobDatabase, currentPage);
    renderPagination(jobDatabase);
});
