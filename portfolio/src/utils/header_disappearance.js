const initHeaderScrollEffect = () => {
  let lastScrollTop = 0;
  const header = document.querySelector('.header.container');
  const headerHeight = header.offsetHeight;

  window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > headerHeight) {
      if (scrollTop > lastScrollTop) {
        // Scrolling down, hide the header
        header.classList.add('hidden');
      } else {
        // Scrolling up, show the header
        header.classList.remove('hidden');
      }
    } else {
      // When scrolling within the header's height, always show it
      header.classList.remove('hidden');
    }

    lastScrollTop = scrollTop;
  });
};

export default initHeaderScrollEffect;
