import React, { useContext, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import useProject from '../../hooks/useProject';
import BoxUnderline from '../../components/BoxUnderline';
import ProjectGalleryGrid from './ProjectGalleryGrid';
import S from './styles';
import { GlobalContext } from '../../contexts/global';
import { executeCallbackOnMediaCollectionLoad } from '../../utils/loadingUtils';

const LOADING_DELAY = 1500;

const Project = () => {
  const { pageLoadingState: [isPageLoading, setIsPageLoading] } = useContext(GlobalContext);
  const { projectId } = useParams();
  const { project, ...projectResponse } = useProject(projectId || '');
  const [isLoadingDelayActive, setIsLoadingDelayActive] = useState(true);
  const [areImagesLoaded, setAreImagesLoaded] = useState(false);

  useEffect(() => {
    if (
      !isPageLoading || projectResponse.isLoading
       || isLoadingDelayActive || !areImagesLoaded
    ) return;

    setIsPageLoading(false);
  }, [projectResponse.isLoading, isLoadingDelayActive, areImagesLoaded]);

  useEffect(() => {
    setTimeout(() => setIsLoadingDelayActive(false), LOADING_DELAY);
  }, []);

  useEffect(() => {
    if (projectResponse.isLoading) return;
    
    const mediaToLoad: Array<HTMLImageElement | HTMLVideoElement> = Array.from(document.querySelectorAll('.Loadable-Image, .Loadable-Direct-Video'));
    executeCallbackOnMediaCollectionLoad(mediaToLoad, () => {
      setAreImagesLoaded(true);
    });
  }, [project]);

  return (
    <S.ProjectContainer>
      <img src={project?.mainImagePath} className="Main-Image" />
      <S.ProjectOverview>
        <Box className="Project-Title-Box">
          <Typography>{project?.name}</Typography>
          <BoxUnderline />
        </Box>
        <Box className="Project-Description-Box">
          <Typography variant="h3">Project Overview</Typography>
          <ul>
            {project?.descriptionBullets.map((descriptionBullet, i) => (
              <li key={i}>
                {descriptionBullet}
                <br />
              </li>
            ))}
          </ul>
        </Box>
      </S.ProjectOverview>
      <ProjectGalleryGrid gallery={project?.gallery || []} isGallerySpaced={project.isGallerySpaced} />
    </S.ProjectContainer>
  );
};

export default Project;
