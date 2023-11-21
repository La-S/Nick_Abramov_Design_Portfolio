import React from 'react';
import S from './styles';
import { NavMenuProps } from './props';
import { Link } from 'react-router-dom';

const NavMenu = ({ openState }: NavMenuProps): JSX.Element => {
  const [, setOpen] = openState;

  return (
    <S.NavMainContainer openState={openState} onClick={() => setOpen(false)}>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/">faq</Link>
        </li>
        <li>
          <Link to="/">about</Link>
        </li>
        <li>
          <Link to="/">contact</Link>
        </li>
      </ul>
    </S.NavMainContainer>
  );
};

export default NavMenu;
