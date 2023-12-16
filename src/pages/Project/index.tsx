import React from 'react';
import { useParams } from 'react-router-dom';
import useProject from '../../hooks/useProject';
import S from './styles';

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
        </>
      )}
    </S.ProjectContainer>
  );
};

export default Project;
