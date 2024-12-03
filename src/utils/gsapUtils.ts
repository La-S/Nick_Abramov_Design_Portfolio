import gsap from 'gsap';

export const generateTitleTween = (cssSelector: string, scrollTriggerSelector = '') => gsap.fromTo(
  cssSelector,
  {
    opacity: 0,
    scale: 0.5,
  },
  {
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: scrollTriggerSelector,
      start: 'top 80%',
      end: 'bottom 20%',
    },
  }
);
