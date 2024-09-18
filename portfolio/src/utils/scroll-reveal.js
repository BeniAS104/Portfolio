const scrollReveal = () => { 

ScrollReveal({ reset: false,
    distance: '60px',
    duration: 1000,
 });

 ScrollReveal().reveal(' .hero__main', {delay: 300, origin: 'top'});
 ScrollReveal().reveal(' .hero__text p', {delay: 350, origin: 'left'});
 ScrollReveal().reveal(' .hero__text hr', {delay: 350, origin: 'left'});
 ScrollReveal().reveal(' .hero__text a', {delay: 550, origin: 'left', interval: 80});
 
 ScrollReveal().reveal(' .about_me h2', {delay: 80, origin: 'left', interval: 0});
 ScrollReveal().reveal(' .about_me-wrapper', {delay: 80, origin: 'left', interval: 0});
 ScrollReveal().reveal(' .about_me-wrapper img', {delay: 80, origin: 'left', interval: 0});
 ScrollReveal().reveal(' .about_me-wrapper p', {delay: 80, origin: 'left', interval: 50});

 ScrollReveal().reveal(' .sources h2', {delay: 80, origin: 'left', interval: 0});
 ScrollReveal().reveal(' .spin_container', {delay: 80, origin: 'left', interval: 0});
 ScrollReveal().reveal(' .sources_info p', {delay: 80, origin: 'left', interval: 80});
 ScrollReveal().reveal(' .sources_info hr', {delay: 80, origin: 'left', interval: 0});

 ScrollReveal().reveal(' .toolbox h2', {delay: 80, origin: 'left', interval: 0});
 ScrollReveal().reveal(' .toolbox_wrapper', {delay: 80, origin: 'left', interval: 0});
 
 ScrollReveal().reveal(' .spotlight h2', {delay: 80, origin: 'left', interval: 0});
 ScrollReveal().reveal(' .in_spotlight', {delay: 80, origin: 'left', interval: 0});
 ScrollReveal().reveal(' .in_spotlight-info ', {delay: 80, origin: 'left', interval: 20});
 ScrollReveal().reveal(' .in_spotlight-data ', {delay: 80, origin: 'left', interval: 20});
 ScrollReveal().reveal(' .in_spotlight-data-second ', {delay: 80, origin: 'left', interval: 20});

 ScrollReveal().reveal(' .projects h2', {delay: 80, origin: 'left', interval: 0});
 ScrollReveal().reveal(' .projects_filters-wrapper button', {delay: 40, origin: 'left', interval: 30});

 ScrollReveal().reveal(' .contact h2', {delay: 80, origin: 'left', interval: 0});
 ScrollReveal().reveal(' .contact-info', {delay: 80, origin: 'left', interval: 0});
 ScrollReveal().reveal(' .triplet', {delay: 80, origin: 'left', interval: 80});
}

export default scrollReveal;