function showSection(sectionId) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
      section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
  }
  function showContactUs() {
    document.getElementById('contact').style.display = 'block';
}