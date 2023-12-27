import { styled, Box } from '@mui/material';
import type { ProjectGalleryRow } from '../../../types/data/project';

const ProjectGalleryGrid = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
}));

const ProjectGalleryRow = styled(
  Box,
  { shouldForwardProp: (propName) => propName !== 'cellAmount' && propName !== 'isGallerySpaced' },
)<{
  cellAmount: ProjectGalleryRow['cellAmount'];
  isGallerySpaced: boolean;
}>(({ theme, cellAmount, isGallerySpaced }) => ({
  display: 'flex',
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

    ...(isGallerySpaced && {
      marginRight: '7.5px',
  
      '&:last-of-type': {
        marginRight: 0,
      },
    }),
  },

  ...(isGallerySpaced && {
    marginBottom: '7.5px',
  }),

  [theme.breakpoints.down('tablet')]: {
    '.ProjectGallery-Grid-Cell': {
      ...(cellAmount === 4 && { width: '50%' }),
    },
  },

  [theme.breakpoints.up(1550)]: {
    width: 'calc(50% - 7.5px / 2)',
    marginRight: '7.5px',

    '&:nth-of-type(2n)': {
      marginRight: 0,
    },
  },
}));

export default {
  ProjectGalleryGrid,
  ProjectGalleryRow,
};
