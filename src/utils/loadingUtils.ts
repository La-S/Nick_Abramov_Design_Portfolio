export const executeCallbackOnMediaCollectionLoad = (loadableElements: Array<HTMLImageElement | HTMLVideoElement>, callback: () => void) => {
  const imageLoadPromises = loadableElements.map((loadable) => new Promise((resolve) => {
    loadable.onload = () => resolve('element loaded!');
  }));
  Promise.all(imageLoadPromises).then(() => callback());
};
