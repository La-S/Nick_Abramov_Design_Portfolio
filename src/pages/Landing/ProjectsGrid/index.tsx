import React from 'react';

import S from './styles';
import ProjectBox from './ProjectBox';
import { Project } from '../../../types/data/project';
import useProjects from '../../../hooks/useProjects';

interface Props {
  sortCategory: null | string;
}

const ProjectsGrid = ({ sortCategory }: Props): JSX.Element => {
  const { projects } = useProjects();
  const sortedProjects = (() => {
    let sorted: Array<Project> = [];
    const unsorted = projects.filter((project) => {
      if (project.category === sortCategory) {
        sorted.push(project);
        return false;
      }

      return true;
    });
    sorted = sorted.sort((a, b) => a.dateCreated - b.dateCreated);

    return sorted.concat(unsorted);
  })();

  return (
    <S.Grid className="Grid">
      {sortedProjects.map(({ id, category, mainImagePath }) => (
        <ProjectBox key={id} id={id} category={category} imagePath={mainImagePath} />
      ))}
    </S.Grid>
  );
};

export default ProjectsGrid;
