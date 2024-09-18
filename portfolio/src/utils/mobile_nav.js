const initMobileNavToggle = () => {
    document.addEventListener('DOMContentLoaded', () => {
      const checkbox = document.getElementById('check');
      const barsButton = document.querySelector('.header__bars');
      const closeButton = document.querySelector('.header__close');
      const mobileNav = document.querySelector('.header__menu2');
      const mobileLinks = document.querySelectorAll('.header__link2');
  
      // Toggle checkbox when clicking on buttons
      barsButton.addEventListener('click', () => {
        checkbox.checked = !checkbox.checked;
      });
  
      closeButton.addEventListener('click', () => {
        checkbox.checked = !checkbox.checked;
      });

      let isMobileNavOpen = false;

      barsButton.addEventListener('click', () => {
        isMobileNavOpen = !isMobileNavOpen;
        if (isMobileNavOpen) {
          
          document.body.style.overflowY = 'hidden';
        } else {
          
          document.body.style.overflowY = 'auto';
        }
      });
      closeButton.addEventListener('click', () => {
        isMobileNavOpen = !isMobileNavOpen;
        if (isMobileNavOpen) {
          
          document.body.style.overflowY = 'hidden';
        } else {
          
          document.body.style.overflowY = 'auto';
        }
      });

      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          isMobileNavOpen = false;
          document.body.style.overflowY = 'auto';
          checkbox.checked = !checkbox.checked;
        });
      });


    });
  };
  
  export default initMobileNavToggle;
  