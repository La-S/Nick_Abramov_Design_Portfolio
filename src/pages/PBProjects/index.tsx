import React, { useContext, useEffect, useState } from 'react';
import S, { classes } from './styles';
import { Link } from 'react-router-dom';
import PBProjectsGrid from './PBProjectsGrid';
import { GlobalContext } from '../../contexts/global';
import usePBProjects from '../../hooks/usePBProjects';
import { Box, Typography } from '@mui/material';
import { executeCallbackOnMediaCollectionLoad } from '../../utils/loadingUtils';

const ABOUT_PAGE_PATH = '/about';
const LOADING_DELAY = 2500;

const PBProjectsPage = (): JSX.Element => {
  const {
    pBProjects,
    ...pBProjectsResponse
  } = usePBProjects({ summary: true });
  const {
    pageLoadingState: [isPageLoading, setIsPageLoading],
  } = useContext(GlobalContext);
  const [isLoadingDelayActive, setIsLoadingDelayActive] = useState(true);
  const [areImagesLoaded, setAreImagesLoaded] = useState(false);

  useEffect(() => {
    if (!pBProjectsResponse.isFetched && !isPageLoading) {
      setIsPageLoading(true);
      return;
    }

    if (!isPageLoading
      || pBProjectsResponse.isLoading
      || isLoadingDelayActive
      || !areImagesLoaded
    ) return;

    setIsPageLoading(false);
  }, [pBProjectsResponse.isLoading, isLoadingDelayActive]);

  useEffect(() => {
    setTimeout(() => setIsLoadingDelayActive(false), LOADING_DELAY);
  }, []);

  useEffect(() => {
    if (pBProjectsResponse.isLoading) return;

    const mediaToLoad: Array<HTMLImageElement | HTMLVideoElement> = Array.from(
      document.querySelectorAll('.Loadable-Image'),
    );
    executeCallbackOnMediaCollectionLoad(mediaToLoad, () => {
      setAreImagesLoaded(true);
    });
  }, [pBProjects]);

  return (
    <S.PBProjectsPage>
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
      <PBProjectsGrid />

      {!pBProjectsResponse.isLoading && pBProjects.length === 0 ? (
        <Box className="No-Photo-Blog-Projects-Box">
          <Typography variant="h5">No projects added to the blog yet</Typography>
        </Box>
      ) : (
        <></>
      )}
    </S.PBProjectsPage>
  );
};

export default PBProjectsPage;
