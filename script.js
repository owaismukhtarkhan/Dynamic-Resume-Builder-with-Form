// Grab references to form and output area
var form = document.getElementById('resume-form');
var resumeOutput = document.getElementById('resume-output');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page refresh
    // Capture input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var degree = document.getElementById('degree').value;
    var institute = document.getElementById('institute').value;
    var year = document.getElementById('year').value;
    var position = document.getElementById('position').value;
    var company = document.getElementById('company').value;
    var duration = document.getElementById('duration').value;
    var skills = document.getElementById('skills').value;
    // Validate required fields
    // if (!name || !email || !degree || !institute || !year || !position || !company || !duration || !skills) {
    //     alert('Please fill in all fields.');
    //     return;
    // }
    // Generate resume HTML content
    resumeOutput.innerHTML = "\n        <h3>Personal Information</h3>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n\n        <h3>Education</h3>\n        <p><strong>Degree:</strong> ").concat(degree, "</p>\n        <p><strong>Institute:</strong> ").concat(institute, "</p>\n        <p><strong>Year:</strong> ").concat(year, "</p>\n\n        <h3>Work Experience</h3>\n        <p><strong>Position:</strong> ").concat(position, "</p>\n        <p><strong>Company:</strong> ").concat(company, "</p>\n        <p><strong>Duration:</strong> ").concat(duration, "</p>\n\n        <h3>Skills</h3>\n        <p>").concat(skills.split(',').map(function (skill) { return skill.trim(); }).join(', '), "</p>\n    ");
});
