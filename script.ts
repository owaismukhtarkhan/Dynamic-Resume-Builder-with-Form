// Grab references to form and output area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeOutput = document.getElementById('resume-output') as HTMLDivElement;

// Handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();  // Prevent page refresh

    // Capture input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const institute = (document.getElementById('institute') as HTMLInputElement).value;
    const year = (document.getElementById('year') as HTMLInputElement).value;
    const position = (document.getElementById('position') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const duration = (document.getElementById('duration') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    // Validate required fields
    // if (!name || !email || !degree || !institute || !year || !position || !company || !duration || !skills) {
    //     alert('Please fill in all fields.');
    //     return;
    // }

    // Generate resume HTML content
    resumeOutput.innerHTML = `
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <h3>Education</h3>
        <p><strong>Degree:</strong> ${degree}</p>
        <p><strong>Institute:</strong> ${institute}</p>
        <p><strong>Year:</strong> ${year}</p>

        <h3>Work Experience</h3>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Duration:</strong> ${duration}</p>

        <h3>Skills</h3>
        <p>${skills.split(',').map(skill => skill.trim()).join(', ')}</p>
    `;
});
