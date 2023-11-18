import { styled, AppBar } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.backgroundColors.main,
}));

const NewProjectLink = styled(Link)(({ theme }) => ({
  fontFamily: theme.fonts.secondary,
}));

export default {
  NewProjectLink,
  Header,
};
