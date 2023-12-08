import React, { useState } from 'react';
import S from './styles';
import { ButtonBase, Typography } from '@mui/material';

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
      <S.SortBarContainer>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <ButtonBase onClick={() => setSortCategory(category)} disableRipple>
                <Typography className={sortCategory === category ? 'Active' : ''}>
                  {`#${category}`}
                </Typography>
              </ButtonBase>
            </li>
          ))}
        </ul>
      </S.SortBarContainer>
    </S.LandingContainer>
  );
};

export default Landing;
