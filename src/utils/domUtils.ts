export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior:'smooth',
  });
};

export const trackElementVisibility = (element: HTMLElement | null) => {
  if (!element) return false;

  const { top, left, bottom, right } = element.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;

  const isInView = ((top > 0 && top < innerHeight) ||
    (bottom > 0 && bottom < innerHeight)) &&
    ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth));

  return isInView;
};

export const hideScrollbarOnLoading = (isPageLoading: boolean) => {
  const htmlEl = document.getElementsByTagName('html')[0];

  if (!htmlEl) return;

  if (isPageLoading) {
    htmlEl.style.overflow = 'hidden';
  } else {
    htmlEl.style.overflow = '';
  }
};
