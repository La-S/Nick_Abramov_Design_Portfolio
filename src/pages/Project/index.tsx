import React, { useContext, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { useParams } from 'react-router-dom';
import useProject from '../../hooks/useProject';
import BoxUnderline from '../../components/BoxUnderline';
import ProjectGalleryGrid from './ProjectGalleryGrid';
import S from './styles';
import { GlobalContext } from '../../contexts/global';
import { executeCallbackOnMediaCollectionLoad } from '../../utils/loadingUtils';
import ProjectNavBar from './ProjectNavBar';

const MAX_LOADING_DELAY = 2500;
const markdownTest = `
  - Description bullet 1
  - Description bullet 2
  - Description bullet 3
`;

const Project = () => {
  const {
    pageLoadingState: [isPageLoading, setIsPageLoading],
  } = useContext(GlobalContext);
  const { projectId } = useParams();
  const { project, ...projectResponse } = useProject(projectId || '');
  const [isLoadingDelayActive, setIsLoadingDelayActive] = useState(true);
  const [areImagesLoaded, setAreImagesLoaded] = useState(false);

  useEffect(() => {
    if (!isPageLoading || projectResponse.isLoading || isLoadingDelayActive || !areImagesLoaded) return;

    setIsPageLoading(false);
  }, [projectResponse.isLoading, isLoadingDelayActive, areImagesLoaded]);

  useEffect(() => {
    setIsLoadingDelayActive(true);

    setTimeout(() => {
      setIsLoadingDelayActive(false);
    }, MAX_LOADING_DELAY);
  }, [projectId]);

  useEffect(() => {
    if (projectResponse.isLoading) return;

    const mediaToLoad: Array<HTMLImageElement | HTMLVideoElement> = Array.from(
      document.querySelectorAll('.Loadable-Image'),
    );
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
          <Markdown
            className='Project-Description-Box'
            rehypePlugins={[rehypeRaw]}
          >
            {markdownTest}
          </Markdown>
        </Box>
      </S.ProjectOverview>
      <ProjectGalleryGrid gallery={project?.gallery || []} isGallerySpaced={project.isGallerySpaced} />
      <ProjectNavBar project={project} />
    </S.ProjectContainer>
  );
};

export default Project;
