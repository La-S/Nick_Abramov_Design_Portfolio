import { styled, AppBar, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = styled(AppBar)(({ theme }) => ({
  height: '85px',
  padding: '20px 68px',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: theme.backgroundColors.main,
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

  [theme.breakpoints.down('tablet')]: {
    display: 'none',
  },
}));

// TODO: Update once the svg is provided
const LogoContainer = styled(Box)(({ theme }) => ({
  img: {
    height: '45.5px',

    [theme.breakpoints.down('tablet')]: {
      height: '28px',
    },
  },
}));

export default {
  NewProjectLink,
  Header,
  LogoContainer,
};
