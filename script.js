// Get form and result container
const form = document.getElementById("registrationForm");
const result = document.getElementById("result");

// Handle form submission
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent page reload on form submission

  // Retrieve form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const gender = document.getElementById("gender").value;
  const comments = document.getElementById("comments").value;

  // Display the data
  result.innerHTML = `
    <h2>Form Submission Successful</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>Comments:</strong> ${comments || "None"}</p>
  `;
  result.style.display = "block";

  // Clear the form
  form.reset();
});
