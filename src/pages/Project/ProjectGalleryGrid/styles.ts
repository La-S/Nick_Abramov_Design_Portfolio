import { styled, Box } from '@mui/material';
import type { ProjectGalleryRow } from '../../../types/data/project';

const ProjectGalleryGrid = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
}));

const ProjectGalleryRow = styled(
  Box,
  { shouldForwardProp: (propName) => propName !== 'cellAmount' },
)<{ cellAmount: ProjectGalleryRow['cellAmount'] }>(({ theme, cellAmount }) => ({
  width: '100%',

  '.ProjectGallery-Grid-Cell': {
    height: '100%',
    width: `calc(100% / ${cellAmount})`,

    'img, video': {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    },

    '.iframe-container': {
      position: 'relative',
      width: '100%',
      height: 0,
      paddingBottom: '56.25%',
    },
    '.video': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
  },

  [theme.breakpoints.down('tablet')]: {
    '.ProjectGallery-Grid-Cell': {
      ...(cellAmount === 4 && { width: '50%'}),
    },
  },

  [theme.breakpoints.up('extraLarge')]: {
    width: '50%',
  },
}));


export default {
  ProjectGalleryGrid,
  ProjectGalleryRow
};
