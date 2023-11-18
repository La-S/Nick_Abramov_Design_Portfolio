import React from 'react';
import S from './styles';
import Logo from '../../assets/images/Logo.png';

const Header = (): JSX.Element => {
  return (
    <S.Header>
      <S.NewProjectLink to="/">Start a project</S.NewProjectLink>
      <S.LogoContainer>
        <img 
          alt='Website logo'
          src={Logo}
        />
      </S.LogoContainer>
    </S.Header>
  );
};

export default Header;
