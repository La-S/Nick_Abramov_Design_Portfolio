import { styled, Box } from '@mui/material';

const ProjectBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    filter: 'grayscale(100%)',

    transition: 'filter 0.3s linear, transform 0.5s ease-out',
    '&:hover': {
      filter: 'grayscale(0%)',
    },
  },

  '.Category-Name': {
    position: 'absolute',
    bottom: '15px',
    right: '30px',
    fontFamily: theme.fonts.main,
    fontSize: '20px',
    // color: theme.textColors.main,
    color: '#fff',
  },

  [theme.breakpoints.down('tablet')]: {
    img: {
      filter: 'grayscale(0%)',
    },
  },
}));

export default {
  ProjectBox,
};
