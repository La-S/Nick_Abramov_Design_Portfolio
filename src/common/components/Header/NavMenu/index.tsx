import React from 'react';
import S from './styles';
import { NavMenuProps } from './props';
import Nav from '../../Nav';

const NavMenu = ({ openState }: NavMenuProps): JSX.Element => {
  const [, setOpen] = openState;

  return (
    <S.NavMainContainer openState={openState} onClick={() => setOpen(false)}>
      <Nav />
    </S.NavMainContainer>
  );
};

export default NavMenu;
