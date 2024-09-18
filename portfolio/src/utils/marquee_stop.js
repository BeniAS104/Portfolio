const marqueeStop = () => {
  const toolboxWrapper = document.querySelector('.toolbox_wrapper');
  const tools = document.querySelectorAll('.tool');

  toolboxWrapper.addEventListener('mouseover', () => {
    tools.forEach(tool => {
      tool.style.animationPlayState = 'paused';  
    });
  });

  toolboxWrapper.addEventListener('mouseout', () => {
    tools.forEach(tool => {
      tool.style.animationPlayState = 'running';  
    });
  });
};

export default marqueeStop;
