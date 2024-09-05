
// Alert on contact form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    // Optionally, you can reset the form
    this.reset();
});

// Change background color of website on project title click
document.querySelectorAll('.project-title').forEach(function(title) {
    title.addEventListener('click', function(e) {
        const titleText = e.target.textContent;
        switch (titleText) {
          case 'Video Editing':
            document.body.style.backgroundColor = 'rgba(255, 0, 0, 0.5)'; // red
            break;
          case 'Photo Editing':
            document.body.style.backgroundColor = 'rgba(0, 255, 0, 0.5)'; // green
            break;
          case 'Gaming':
            document.body.style.backgroundColor = 'rgba(0, 0, 255, 0.5)'; // blue
            break;
          default:
            document.body.style.backgroundColor = ''; // reset to default
        }
    });
});