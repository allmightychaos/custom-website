const tl = gsap.timeline({defaults: {duration: 0.5, ease: 'power1.out'}});
const button = document.querySelector('button');

// animate at start
tl.fromTo('.cookie-container', {scale: 0}, {scale: 1, ease: 'elastic.out(1, 0.8)', duration: 0.8})
tl.fromTo('.cookie', {opacity: 0, x:-50, rotation: '-45deg'}, {opacity: 1, x:0, rotation: '0deg'}, '<50%')
tl.fromTo('.text', {x:30, opacity: 0}, {x:0, opacity: 1}, '<')

// fade out after button click
button.addEventListener('click', () => {
  tl.to('.cookie-container', {opacity: 0, y: 100, duration: 0.5, ease: 'power1.out'})
})
