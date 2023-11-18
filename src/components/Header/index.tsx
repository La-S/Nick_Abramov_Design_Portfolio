import React from 'react';
import S from './styles';

const Header = (): JSX.Element => {
  return (
    <S.Header>
      <S.NewProjectLink to="/">Start a project</S.NewProjectLink>
    </S.Header>
  );
};

export default Header;
