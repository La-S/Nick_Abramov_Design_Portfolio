import { styled } from '@mui/material';
import FlipMove from 'react-flip-move';

const Grid = styled(FlipMove)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  position: 'relative',
  padding: '0',

  div: {
    width: '50%',
    height: '33vw',
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
