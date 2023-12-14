import React, { useState } from 'react';
import S from './styles';
import { Box, ButtonBase, Typography } from '@mui/material';
import ProjectsGrid from './ProjectsGrid';

const Landing = (): JSX.Element => {
  const [sortCategory, setSortCategory] = useState<null | string>(null);
  const categories = [
    'Web design',
    'Branding',
    'Illustration',
  ];
  console.log(sortCategory);

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
                <Typography className={sortCategory === category ? 'Active' : ''}>
                  {`#${category}`}
                </Typography>
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
