import { styled, AppBar, Box } from '@mui/material';
import { List as BurgerIcon } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

const Header = styled(AppBar)(({ theme }) => ({
  height: '85px',
  padding: '20px 68px',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: theme.componentColors.backgroundMain,
  boxShadow: 'none',

  [theme.breakpoints.down('tablet')]: {
    height: '75px',
    padding: '25px',
  },
}));

const NewProjectLink = styled(Link)(({ theme }) => ({
  fontFamily: theme.fonts.secondary,
  textDecorationColor: theme.textColors.underline,
  textDecorationThickness: '2px',
  textUnderlineOffset: '2.75px',

  transition: 'color 0.2s ease-in-out',
  '&:hover': {
    color: theme.textColors.underline,
  },

  [theme.breakpoints.down('tablet')]: {
    display: 'none',
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  width: '335px',
  height: '46px',

  [theme.breakpoints.down('tablet')]: {
    width: '209px',
    height: '28px',
  },
}));

const Burger = styled(BurgerIcon)(({ theme }) => ({
  width: '48px',
  height: '42px',

  '*': {
    color: theme.textColors.main,
  },

  [theme.breakpoints.down('tablet')]: {
    width: '41px',
    height: '35px',
  },
}));

export default {
  NewProjectLink,
  Header,
  LogoContainer,
  Burger,
};
