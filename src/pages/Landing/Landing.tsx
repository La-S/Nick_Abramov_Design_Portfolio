import React, { useState } from 'react';
import S from './styles';
import { Box, ButtonBase, Typography } from '@mui/material';
import ProjectsGrid from './ProjectsGrid';
import type { Project } from '../../types/data/project';
import useProjects from '../../hooks/useProjects';

const getProjectCategories = (projects: Array<Project>): Array<string> => {
  const allCategoryValues = projects.map((project) => project.category);
  const uniqueCategories = Array.from(new Set(allCategoryValues));
  return uniqueCategories;
};

const Landing = (): JSX.Element => {
  const [sortCategory, setSortCategory] = useState<null | string>(null);
  const { projects } = useProjects({ summary: true });
  const categories = getProjectCategories(projects);

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
