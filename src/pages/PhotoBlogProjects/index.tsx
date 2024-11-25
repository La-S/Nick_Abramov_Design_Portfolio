import React, { useContext, useEffect, useState } from 'react';
import S, { classes } from './styles';
import { Link } from 'react-router-dom';
import PhotoBlogProjectsGrid from './PhotoBlogProjectsGrid';
import { GlobalContext } from '../../contexts/global';
import usePhotoBlogProjects from '../../hooks/usePhotoBlogProjects';
import { Box, Typography } from '@mui/material';
import { executeCallbackOnMediaCollectionLoad } from '../../utils/loadingUtils';

const ABOUT_PAGE_PATH = '/about';
const LOADING_DELAY = 2500;

const PhotoBlogProjectsPage = (): JSX.Element => {
  const {
    photoBlogProjects,
    ...photoBlogProjectsResponse
  } = usePhotoBlogProjects({ summary: true });
  const {
    pageLoadingState: [isPageLoading, setIsPageLoading],
  } = useContext(GlobalContext);
  const [isLoadingDelayActive, setIsLoadingDelayActive] = useState(true);
  const [areImagesLoaded, setAreImagesLoaded] = useState(false);

  useEffect(() => {
    if (!isPageLoading
      || photoBlogProjectsResponse.isLoading
      || isLoadingDelayActive
      || !areImagesLoaded
    ) return;

    setIsPageLoading(false);
  }, [photoBlogProjectsResponse.isLoading, isLoadingDelayActive]);

  useEffect(() => {
    setTimeout(() => setIsLoadingDelayActive(false), LOADING_DELAY);
  }, []);

  useEffect(() => {
    if (photoBlogProjectsResponse.isLoading) return;

    const mediaToLoad: Array<HTMLImageElement | HTMLVideoElement> = Array.from(
      document.querySelectorAll('.Loadable-Image'),
    );
    executeCallbackOnMediaCollectionLoad(mediaToLoad, () => {
      setAreImagesLoaded(true);
    });
  }, [photoBlogProjects]);

  return (
    <S.PhotoBlogProjectsPage>
      <div className={classes.headingTextBox}>
        <p>
          {'Photography by '}
          <Link to={ABOUT_PAGE_PATH}>
            Nick Abramov
          </Link>
          {' — '}
        </p>
        <p>life adventures and beautiful things.</p>
      </div>
      <PhotoBlogProjectsGrid />

      {!photoBlogProjectsResponse.isLoading && photoBlogProjects.length === 0 ? (
        <Box className="No-Photo-Blog-Projects-Box">
          <Typography variant="h5">No projects added to the blog yet</Typography>
        </Box>
      ) : (
        <></>
      )}
    </S.PhotoBlogProjectsPage>
  );
};

export default PhotoBlogProjectsPage;
