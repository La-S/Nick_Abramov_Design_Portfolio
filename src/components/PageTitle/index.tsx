import React from 'react';
import S from './styles';
import { TypographyProps } from '@mui/material';

const PageTitle = ({ children }: TypographyProps): JSX.Element => (
  <S.PageTitle variant='h2'>{children}</S.PageTitle>
);

export default PageTitle;
