import React from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import useProject from '../../hooks/useProject';
import S from './styles';
import BoxUnderline from '../../components/BoxUnderline';

const Project = () => {
  const { projectId } = useParams();
  const { project, isLoading } = useProject(projectId || '');

  return (
    <S.ProjectContainer>
      {isLoading ? (
        <></>
      ) : (
        <>
          <img src={project?.mainImagePath} className='Main-Image' />
          <S.ProjectOverview>
            <Box className="Project-Title-Box">
              <Typography>
                {project?.name}
              </Typography>
              <BoxUnderline />
            </Box>
            <Box className="Project-Description-Box">
              <Typography variant='h3'>
                Project Overview
              </Typography>
              <ul>
                {project?.descriptionBulletPoints.map((descriptionBullet, i) => (
                  <li key={i}>
                    {descriptionBullet}
                    <br />
                  </li>
                ))}
              </ul>
            </Box>
          </S.ProjectOverview>
        </>
      )}
    </S.ProjectContainer>
  );
};

export default Project;
