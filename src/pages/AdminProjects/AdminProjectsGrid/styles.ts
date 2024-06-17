import { styled, Box } from '@mui/material';
import { HEADER_DESKTOP_HEIGHT, HEADER_MOBILE_HEIGHT } from '../../../common/components/Header/styles';

const AdminProjectsGrid = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',

  [theme.breakpoints.down('tablet')]: {
    justifyContent: 'center',
  },
}));

const LoadingBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: `calc(100vh - ${HEADER_DESKTOP_HEIGHT}px)`,

  [theme.breakpoints.down('tablet')]: {
    height: `calc(100vh - ${HEADER_MOBILE_HEIGHT}px)`,
  },
}));

export default {
  AdminProjectsGrid,
  LoadingBox,
};
