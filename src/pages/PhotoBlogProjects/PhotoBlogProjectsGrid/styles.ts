import { styled } from '@mui/material';

const PhotoBlogProjectsGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
  columnGap: 22,
  rowGap: 68,
  marginBottom: 95,

  [theme.breakpoints.down('tablet')]: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    rowGap: 60,
    marginBottom: 44,
  },
}));

export default {
  PhotoBlogProjectsGrid,
};
