import React, { useContext, useEffect, useState } from 'react';
import S from './styles';
import { Box, ButtonBase, Typography } from '@mui/material';
import ProjectsGrid from './ProjectsGrid';
import type { Project } from '../../types/data/project';
import useProjects from '../../hooks/useProjects';
import { GlobalContext } from '../../contexts/global';
import { executeCallbackOnMediaCollectionLoad } from '../../utils/loadingUtils';

const LOADING_DELAY = 2500;

const getProjectCategories = (projects: Array<Project>): Array<string> => {
  const allCategoryValues = projects.map((project) => project.category);
  const uniqueCategories = Array.from(new Set(allCategoryValues));
  return uniqueCategories;
};

const Landing = (): JSX.Element => {
  const {
    pageLoadingState: [isPageLoading, setIsPageLoading],
  } = useContext(GlobalContext);
  const [sortCategory, setSortCategory] = useState<null | string>(null);
  const { projects, ...projectResponse } = useProjects({ summary: true });
  const categories = getProjectCategories(projects);
  const [isLoadingDelayActive, setIsLoadingDelayActive] = useState(true);
  const [areImagesLoaded, setAreImagesLoaded] = useState(false);

  useEffect(() => {
    if (!isPageLoading || projectResponse.isLoading || isLoadingDelayActive || !areImagesLoaded) return;

    setIsPageLoading(false);
  }, [projectResponse.isLoading, isLoadingDelayActive]);

  useEffect(() => {
    setTimeout(() => setIsLoadingDelayActive(false), LOADING_DELAY);
  }, []);

  useEffect(() => {
    if (projectResponse.isLoading) return;

    const mediaToLoad: Array<HTMLImageElement | HTMLVideoElement> = Array.from(
      document.querySelectorAll('.Loadable-Image'),
    );
    executeCallbackOnMediaCollectionLoad(mediaToLoad, () => {
      setAreImagesLoaded(true);
    });
  }, [projects]);

  return (
    <S.LandingContainer>
      <Box className="SortBar-Container">
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <ButtonBase
                onClick={() => {
                  if (sortCategory === category) setSortCategory(null);
                  else setSortCategory(category);
                }}
                disableRipple
              >
                <Typography className={sortCategory === category ? 'Active' : ''}>{`#${category}`}</Typography>
              </ButtonBase>
            </li>
          ))}
        </ul>
      </Box>

      <Box className="ProjectGrid-Container">
        <ProjectsGrid sortCategory={sortCategory} />
      </Box>
    </S.LandingContainer>
  );
};

export default Landing;
