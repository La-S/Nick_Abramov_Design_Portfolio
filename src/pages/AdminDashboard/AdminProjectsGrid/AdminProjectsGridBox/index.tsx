import React from 'react';
import S from './styles';
import type { Project } from '../../../../types/data/project';

interface Props {
  project: Project;
}

const AdminProjectsGridBox = ({ project }: Props): JSX.Element => {
  return (
    <S.AdminProjectsGridBox>
      {JSON.stringify(project, null, 2)}
    </S.AdminProjectsGridBox>
  );
};

export default AdminProjectsGridBox;
