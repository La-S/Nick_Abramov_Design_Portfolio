import React from 'react';

import S from './styles';
import ProjectBox from './ProjectBox';
// TODO: Hardcoded for the duration of UI development. Replace with dynamic data later.
import Project1Img from '../../../assets/images/projects/project1.jpeg';
import Project2Img from '../../../assets/images/projects/project2.jpeg';
import Project3Img from '../../../assets/images/projects/project3.jpeg';
import { Project } from '../../../types/data/project';

interface Props {
  sortCategory: null | string;
}

const ProjectsGrid = ({ sortCategory }: Props): JSX.Element => {
  const rawProjects = [
    { name: 'name1', category: 'Web design', imagePath: Project1Img, dateCreated: 1617140584 },
    { name: 'name2', category: 'Branding', imagePath: Project2Img, dateCreated: 1677140584 },
    { name: 'name3', category: 'Illustration', imagePath: Project3Img, dateCreated: 1687140584 },
    { name: 'name4', category: 'Web design', imagePath: Project2Img, dateCreated: 1637140584 },
    { name: 'name5', category: 'Branding', imagePath: Project1Img, dateCreated: 1657140584 },
    { name: 'name6', category: 'Web design', imagePath: Project2Img, dateCreated: 1587140584 },
    { name: 'name7', category: 'Web design', imagePath: Project1Img, dateCreated: 1547140584 },
    { name: 'name8', category: 'Web design', imagePath: Project3Img, dateCreated: 1697140584 },
  ];
  const projects = (() => {
    let sorted: Array<Project> = [];
    const unsorted = rawProjects.filter((project) => {
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
      {projects.map(({ name, category, imagePath }) => (
        <ProjectBox key={name} category={category} imagePath={imagePath} />
      ))}
    </S.Grid>
  );
};

export default ProjectsGrid;
