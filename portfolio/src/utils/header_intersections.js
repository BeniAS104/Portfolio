/**
 * Highlights the active navigation link based on the current scroll position.
 */
function highlightActiveLink() {
    // Select all sections and navigation links
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.header__link');
  
    /**
     * Handles scroll events to update the active navigation link.
     */
    function handleScroll() {
      // Get the current scroll position (middle of the viewport)
      const scrollPosition = window.scrollY + window.innerHeight / 2;
  
      let linkActivated = false; // Flag to track if any link is activated
  
      // Iterate through each section to determine visibility
      sections.forEach(section => {
        const sectionTop = section.offsetTop; // Top position of the section
        const sectionBottom = sectionTop + section.offsetHeight; // Bottom position of the section
  
        // Check if the scroll position is within the bounds of the section
        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          // Find the corresponding navigation link for the section
          const activeLink = document.querySelector(`.header__link[href="#${section.id}"]`);
          
          if (activeLink) {
            // Remove 'activated' class from all links
            navLinks.forEach(link => link.classList.remove('activated'));
            // Add 'activated' class to the current link
            activeLink.classList.add('activated');
            
            linkActivated = true; // Set flag to true indicating a link is activated
          }
        }
      });
  
      // If no link is activated, remove 'activated' class from all links
      if (!linkActivated) {
        navLinks.forEach(link => link.classList.remove('activated'));
      }
    }
  
    // Attach the scroll event listener to the window
    window.addEventListener('scroll', handleScroll);
  }
  
  export default highlightActiveLink;
  