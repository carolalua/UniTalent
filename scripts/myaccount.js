// Get the file input for both profile section and sidebar
/*const fileInput = document.getElementById("file-input");
const profilePhotoImg = document.getElementById("profile-photo-img");
const profilePhotoText = document.getElementById("profile-photo-text");
const sidebarProfilePhoto = document.getElementById("sidebar-profile-photo");

// Add an event listener to handle file input change
fileInput.addEventListener("change", function (event) {
  const file = event.target.files[0]; // Get the selected file

  if (file) {
    // Create a URL for the selected file
    const reader = new FileReader();

    reader.onload = function (e) {
      // Set the image source to the uploaded file
      profilePhotoImg.src = e.target.result;
      sidebarProfilePhoto.src = e.target.result; // Update sidebar profile photo as well
      profilePhotoImg.style.display = "block"; // Show the image
      profilePhotoText.style.display = "none"; // Hide the text
    };

    // Read the file as a data URL
    reader.readAsDataURL(file);
  }
});*/

const jobDatabase = JSON.parse(localStorage.getItem('jobDatabase')) || [];
const companies = JSON.parse(localStorage.getItem('companies')) || [];
const userEmail= localStorage.getItem('userEmail');

const company = companies.find(company => company.contactEmail === userEmail);
const jobsCompany = jobDatabase.filter(job => job.company.name === company.companyName);

let currentPage = 1;
let pageSize = 10;

function generateJobTable() {
  const jobListBody = document.getElementById("job-list-body");
  const startIndex = (currentPage - 1) * pageSize;
  const jobsToDisplay = jobsCompany.slice(startIndex, startIndex + pageSize);

  // Clear existing rows
  jobListBody.innerHTML = "";

  jobsToDisplay.forEach(job => {
    const row = document.createElement("tr");

    // Job Title (Roles)
    const jobTitle = document.createElement("td");
    jobTitle.textContent = job.overview.jobTitle;
    row.appendChild(jobTitle);

    // Status (For simplicity, assuming all jobs are 'Open')
    const status = document.createElement("td");

    status.className = job.status === 'Open' ? 'status-open' : 'status-closed';
    status.textContent = job.status || 'Open';
    row.appendChild(status);

    // Date Posted
    const datePosted = document.createElement("td");
    datePosted.textContent = new Date(job.postingTime).toLocaleDateString();
    row.appendChild(datePosted);

    // Due Date (Use job's due date or a default)
    const dueDate = document.createElement("td");
    dueDate.textContent = "24 May 2024";  // Placeholder, replace with actual logic if needed
    row.appendChild(dueDate);

    // Job Type
    const jobType = document.createElement("td");
    //jobType.className = `job-type-${job.summary.jobType.toLowerCase()}`;
    jobType.textContent = job.summary.jobType;
    row.appendChild(jobType);

    // Applicants (Static for now, you can adjust accordingly)
    const applicants = document.createElement("td");
    applicants.textContent = "100";  // Placeholder, replace with actual number
    row.appendChild(applicants);

    // Append the row to the table body
    jobListBody.appendChild(row);
  });
  document.getElementById("page-number").textContent = `Page ${currentPage}`;
 
  const totalPages = Math.ceil(jobsCompany.length / pageSize);
  document.getElementById("prev-button").disabled = currentPage === 1;
  document.getElementById("next-button").disabled = currentPage === totalPages;

}

function updatePageSize() {
  pageSize = parseInt(document.getElementById("page-size").value);
  currentPage = 1;
  generateJobTable();
}

function goToPreviousPage() {
  if (currentPage > 1) {
    currentPage--;
    generateJobTable();
  }
}

function goToNextPage() {
  const totalPages = Math.ceil(jobsCompany.length / pageSize);
  if (currentPage < totalPages) {
    currentPage++;
    console.log(currentPage);
    generateJobTable();
  }
}

// Event listeners for pagination controls
document.getElementById("page-size").addEventListener("change", updatePageSize);
document.getElementById("prev-button").addEventListener("click", goToPreviousPage);
document.getElementById("next-button").addEventListener("click", goToNextPage);

generateJobTable();

// Call the function to generate the table when the page loads
// document.addEventListener("DOMContentLoaded", generateJobTable);
