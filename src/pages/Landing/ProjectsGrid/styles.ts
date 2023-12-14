import { styled, Box } from '@mui/material';

const Grid = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',

  div: {
    width: '50%',
    height: '33vw',

    transition: 'all 0.3s linear',
  },

  [theme.breakpoints.down('tablet')]: {
    div: {
      width: '100%',
      height: '65vw',
    },
  },

  [theme.breakpoints.up(1600)]: {
    div: {
      width: 'calc(100% / 3)',
      height: '425px',
    },
  },
}));

export default {
  Grid,
};
