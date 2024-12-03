import { styled } from '@mui/material';
import type { PBProjectGalleryRow } from '../../../types/data/pBProject';

export const classes = {
  container: 'PBProject-GallerySectionsContainer',
  sectionContainer: 'PBProject-GallerySectionContainer',
  title: 'PBProject-GallerySectionTitle',
  description: 'PBProject-GallerySectionDescription',
  rowsContainer: 'PBProject-GallerySectionRowsContainer',
  row: 'PBProject-GallerySectionRow',
  cell: 'PBProject-GallerySectionCell',
};

const PBProjectGalleryGrid = styled('div')(({ theme }) => ({
  [`.${classes.sectionContainer}`]: {
    [`.${classes.title}`]: {
      margin: 0,
      marginTop: 40,
      fontSize: 24,
      fontFamily: theme.fonts.secondary,
      color: theme.textColors.main,
    },

    [`.${classes.description}`]: {
      margin: 0,
      marginTop: 40,
      fontSize: 18,
      fontFamily: theme.fonts.main,
      color: theme.textColors.main,
    },

    [`.${classes.rowsContainer}`]: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: 0,
      marginTop: 40,
      gap: 40,
    },
  },

  [theme.breakpoints.down('tablet')]: {
    [`.${classes.sectionContainer}`]: {
      [`.${classes.title}`]: {
        marginTop: 20,
      },

      [`.${classes.description}`]: {
        marginTop: 20,
      },

      [`.${classes.rowsContainer}`]: {
        marginTop: 20,
        gap: 20,
      },
    },
  },
}));

const PBProjectGalleryRow = styled('div', {
  shouldForwardProp: (propName) => propName !== 'cellAmount',
})<{
  cellAmount: PBProjectGalleryRow['cellAmount'];
}>(({ theme, cellAmount }) => ({
  display: 'flex',
  width: '100%',
  gap: 40,

  [`.${classes.cell}`]: {
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
      height: '100%',
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
    gap: 20,

    [`.${classes.cell}`]: {
      ...(cellAmount === 4 && { width: '50%' }),
    },
  },
}));

export default {
  PBProjectGalleryGrid,
  PBProjectGalleryRow,
};
