import { styled, Box } from '@mui/material';
import { HEADER_DESKTOP_HEIGHT, HEADER_MOBILE_HEIGHT } from '../../../components/Header/styles';

const AdminProjectsGrid = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('tablet')]: {},
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
