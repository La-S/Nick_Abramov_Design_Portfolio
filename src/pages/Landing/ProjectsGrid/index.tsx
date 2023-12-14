import React from 'react';

import S from './styles';
import ProjectBox from './ProjectBox';
// TODO: Hardcoded for the duration of UI development. Replace with dynamic data later.
import Project1Img from '../../../assets/images/projects/project1.jpeg';
import Project2Img from '../../../assets/images/projects/project2.jpeg';
import Project3Img from '../../../assets/images/projects/project3.jpeg';

interface Props {
  sortCategory: null | string;
}

const ProjectsGrid = ({ sortCategory }: Props): JSX.Element => {
  console.log({ sortCategory });
  const projects = [
    { name: 'name1', category: 'Web design', imagePath: Project1Img },
    { name: 'name2', category: 'Branding', imagePath: Project2Img },
    { name: 'name3', category: 'Illustration', imagePath: Project3Img },
    { name: 'name4', category: 'Web design', imagePath: Project2Img },
    { name: 'name5', category: 'Branding', imagePath: Project1Img },
    { name: 'name6', category: 'Web design', imagePath: Project2Img },
    { name: 'name7', category: 'Web design', imagePath: Project1Img },
    { name: 'name8', category: 'Web design', imagePath: Project3Img },
  ];

  return (
    <S.Grid className="Grid">
      {projects.map(({ name, category, imagePath }) => (
        <ProjectBox key={name} category={category} imagePath={imagePath} />
      ))}
    </S.Grid>
  );
};

export default ProjectsGrid;
