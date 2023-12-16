import { styled, Box } from '@mui/material';
import { HEADER_DESKTOP_HEIGHT, HEADER_MOBILE_HEIGHT } from '../../components/Header/styles';

const ProjectContainer = styled(Box)(({ theme }) => ({
  '.Main-Image': {
    width: '100%',
    objectFit: 'cover',
    maxHeight: `min(calc(100vh - ${HEADER_DESKTOP_HEIGHT}px), 750px)`,
  },

  [theme.breakpoints.down('tablet')]: {
    maxHeight: `min(calc(100vh - ${HEADER_MOBILE_HEIGHT}px), 750px)`,
  },
}));

export default {
  ProjectContainer,
};
