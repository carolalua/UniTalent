// Get the file input for both profile section and sidebar
const fileInput = document.getElementById("file-input");
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
});
