import '../styles/modern-normalize.css'
import '../styles/style.css';
import '../styles/components/1_header.css';
import '../styles/components/2_hero.css';
import '../styles/components/3_about_me.css';
import '../styles/components/4_sources.css';
import '../styles/components/5_toolbox.css';
import '../styles/components/6_spotlight.css';
import '../styles/components/7_projects.css';
import '../styles/components/8_contact.css';
import '../styles/utilities.css';


import initHeaderScrollEffect from './utils/header_disappearance';
import marqueeStop from './utils/marquee_stop';
import initProjectFilters from './utils/project_filtering';
import stopSpinEffects from './utils/spinning_stop';
import initMobileNavToggle from './utils/mobile_nav';
import highlightActiveLink from './utils/header_intersections';
import darkMode from './utils/dark-mode';
import scrollReveal from './utils/scroll-reveal';


initHeaderScrollEffect();
marqueeStop();
initProjectFilters();
stopSpinEffects();
initMobileNavToggle();
highlightActiveLink();
darkMode();
scrollReveal();


