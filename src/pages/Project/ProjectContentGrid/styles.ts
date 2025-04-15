import { styled, Box } from '@mui/material';
import type { ProjectContentRow } from '../../../types/data/project';
import { responsive } from '../../../utils/styleUtils';

const ProjectContentGrid = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
}));

const ProjectContentRow = styled(Box, {
  shouldForwardProp: (propName) => propName !== 'cellAmount' && propName !== 'isContentSpaced',
})<{
  cellAmount: ProjectContentRow['cellAmount'];
  isContentSpaced: boolean;
}>(({ theme, cellAmount, isContentSpaced }) => ({
  display: 'flex',
  width: '100%',

  '.ProjectContent-Grid-Cell': {
    height: '100%',
    width: `calc(100% / ${cellAmount})`,

    '.Project-Content-Markdown-Container': {
      ...responsive({
        default: {
          padding: 16
        },
        tablet: {
          padding: 30,
        },
      }),

      '.Project-Content-Markdown': {
        '*': {
          fontFamily: theme.fonts.main,
        },

        'h1, h2, h3, h4, h5, h6': {
          marginTop: 0,
        },

        h1: responsive({
          default: { marginBottom: 32 },
          tablet: { marginBottom: 48 },
        }),
        h2: responsive({
          default: { marginBottom: 28 },
          tablet: { marginBottom: 40 },
        }),
        h3: responsive({
          default: { marginBottom: 24 },
          tablet: { marginBottom: 32 },
        }),
        h4: responsive({
          default: { marginBottom: 20 },
          tablet: { marginBottom: 28 },
        }),
        h5: responsive({
          default: { marginBottom: 16 },
          tablet: { marginBottom: 24 },
        }),
        h6: responsive({
          default: { marginBottom: 14 },
          tablet: { marginBottom: 20 },
        }),

        'p, span': {
          ...responsive({
            default: {
              fontSize: 18,
            },
            tablet: {
              fontSize: 24,
            },
          }),
        },
      },

      '&.--has-neighbors': {
        ...responsive({
          default: {
            padding: '0 16px',
          },
          tablet: {
            padding: '0 30px',
          },
        }),
      },
    },

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

    ...(isContentSpaced && {
      marginRight: '7.5px',

      '&:last-of-type': {
        marginRight: 0,
      },
    }),
  },

  ...(isContentSpaced && {
    marginBottom: '7.5px',
  }),

  [theme.breakpoints.down('tablet')]: {
    '.ProjectContent-Grid-Cell': {
      ...(cellAmount === 4 && { width: '50%' }),
    },
  },
}));

export default {
  ProjectContentGrid,
  ProjectContentRow,
};
