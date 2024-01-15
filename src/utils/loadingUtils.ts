import { QueryClient, QueryKey } from '@tanstack/react-query';

export const executeCallbackOnMediaCollectionLoad = (
  loadableElements: Array<HTMLImageElement | HTMLVideoElement>,
  callback: () => void,
) => {
  const MAX_WAIT_TIME = 5000;
  setTimeout(() => callback(), MAX_WAIT_TIME);
  const filteredLoadableElements = loadableElements.filter((loadable) => {
    if ('complete' in loadable && loadable.complete) {
      return false;
    }
    if ('readyState' in loadable && loadable.readyState >= 4) {
      return false;
    }

    return true;
  });
  if (filteredLoadableElements.length === loadableElements.length) {
    callback();
    return;
  }

  const imageLoadPromises = filteredLoadableElements.map(
    (loadable) =>
      new Promise((resolve) => {
        loadable.onload = () => resolve('element loaded!');

        if ('oncomplete' in loadable) {
          loadable.oncomplete = () => resolve('element loaded!');
        }
      }),
  );
  Promise.all(imageLoadPromises).then(() => callback());
};

export const checkIfCachedQueryDataExists = (queryClient: QueryClient, queryKey: QueryKey) => {
  const cachedQueryEntry = queryClient.getQueryData(queryKey);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const cachedQueryEntryData = cachedQueryEntry?.data;

  return !!cachedQueryEntryData;
};
