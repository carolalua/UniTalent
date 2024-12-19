const students = JSON.parse(localStorage.getItem('students')) || [];
const userEmail= localStorage.getItem('userEmail');
const applications = JSON.parse(localStorage.getItem('applications')) || [];

const student = students.find(student => student.email === userEmail);
const studentApplications = applications.filter(application => application.email === userEmail);

let currentPage = 1;
let pageSize = 10;

function generateJobTable() {
  const jobListBody = document.getElementById("job-application-body");
  const startIndex = (currentPage - 1) * pageSize;
  const applicationsToDisplay = studentApplications.slice(startIndex, startIndex + pageSize);

  // Clear existing rows
  jobListBody.innerHTML = "";

  applicationsToDisplay.forEach(application => {
    const row = document.createElement("tr");

    // Job Title (Roles)
    const companyApplication = document.createElement("td");
    companyApplication.textContent = application.companyName;
    row.appendChild(companyApplication);

    const role = document.createElement("td");
    role.textContent = application.role;
    row.appendChild(role);

    // Date Posted
    const datePosted = document.createElement("td");
    datePosted.textContent = application.date;
    row.appendChild(datePosted);
    jobListBody.appendChild(row);
  });

  document.getElementById("page-number").textContent = `Page ${currentPage}`;
 
  const totalPages = Math.ceil(studentApplications.length / pageSize);
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
  const totalPages = Math.ceil(studentApplications.length / pageSize);
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
