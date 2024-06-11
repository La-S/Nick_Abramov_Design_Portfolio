import { styled, Box } from '@mui/material';

const ProjectBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',

  img: {
    zIndex: 1,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    filter: 'grayscale(100%)',
    willChange: 'transform, transition',

    transition: 'filter 0.3s linear, transform 0.5s ease-out',
    '&:hover': {
      filter: 'grayscale(0%)',
    },
  },

  '.Category-Name': {
    zIndex: 2,
    position: 'absolute',
    bottom: '15px',
    right: '30px',
    fontFamily: theme.fonts.main,
    fontSize: '20px',
    color: '#fff',
    pointerEvents: 'none',
    transition: 'opacity 0.25s ease-in-out',
  },

  '.ProjectBox-Shadow': {
    zIndex: 1,
    height: '100%',
    width: '300%',
    position: 'absolute',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    boxShadow: 'inset -250px -80px 60px -7px rgba(0,0,0,0.35)',
    transition: 'opacity 0.25s ease-in-out',
  },

  '&:hover': {
    '.Category-Name': {
      opacity: 0,
    },

    '.ProjectBox-Shadow': {
      opacity: 0,
    },
  },

  [theme.breakpoints.down('tablet')]: {
    img: {
      filter: 'grayscale(0%)',
    },

    '.ProjectBox-Shadow': {
      boxShadow: 'inset -250px -40px 60px -7px rgba(0,0,0,0.35)',
    },
  },
}));

export default {
  ProjectBox,
};
