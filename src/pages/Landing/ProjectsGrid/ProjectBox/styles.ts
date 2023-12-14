import { styled, Box } from '@mui/material';

const ProjectBox = styled(Box)(({ theme }) => ({
  position: 'relative',

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },

  '.Category-Name': {
    position: 'absolute',
    bottom: '15px',
    right: '30px',
    fontFamily: theme.fonts.main,
    fontSize: '20px',
    color: theme.textColors.main,
  },
}));

export default {
  ProjectBox,
};
