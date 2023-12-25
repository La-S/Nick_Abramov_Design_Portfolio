import { styled, Box } from '@mui/material';

const AdminProjectsGridBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('tablet')]: {},
}));

export default {
  AdminProjectsGridBox,
};
