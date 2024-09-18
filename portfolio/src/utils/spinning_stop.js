const stopSpinEffects = () => {
  const flex = document.querySelector('.flex');
  const spinSpans = document.querySelectorAll('.spin_span');
  const spinSpanImages = document.querySelectorAll('.spin_image');

  spinSpans.forEach(span => {
    span.addEventListener('mouseover', () => {
      flex.style.animationPlayState = 'paused';
      
      spinSpanImages.forEach(image => {
        image.style.animationPlayState = 'paused';
      });
    });

    span.addEventListener('mouseout', () => {
      flex.style.animationPlayState = 'running';
      
      spinSpanImages.forEach(image => {
        image.style.animationPlayState = 'running';
      });
    });
  });
};

export default stopSpinEffects;
