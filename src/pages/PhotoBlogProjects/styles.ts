import { styled } from '@mui/material';
import { HEADER_DESKTOP_HEIGHT, HEADER_MOBILE_HEIGHT } from '../../common/components/Header/styles';

export const classes = {
  headingTextBox: 'PhotoBlogProjects-HeadingTextBox',
};

const PhotoBlogProjectsPage = styled('div')(({ theme }) => ({
  padding: '0 48px',

  [`.${classes.headingTextBox}`]: {
    padding: '32px 0 37px 0',

    p: {
      fontFamily: theme.fonts.main,
      fontSize: 24,
      margin: 0,

      a: {
        textUnderlineOffset: 3,
      },

      '&:first-of-type': {
        color: theme.textColors.main
      },

      '&:nth-of-type(2)': {
        color: theme.textColors.tertiary,
      },
    },
  },

  '.No-Photo-Blog-Projects-Box': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: `calc(100vh - ${HEADER_DESKTOP_HEIGHT}px)`,

    '.MuiTypography-root': {
      position: 'relative',
      bottom: `${HEADER_DESKTOP_HEIGHT}px`,
      fontFamily: theme.fonts.main,
      fontSize: '24px',
    },
  },

  [theme.breakpoints.down('tablet')]: {
    padding: '0 19px',

    [`.${classes.headingTextBox}`]: {
      padding: '21px 0 45px 0',

      p: {
        fontSize: 20,
      },
    },

    '.No-Photo-Blog-Projects-Box': {
      height: `calc(100vh - ${HEADER_MOBILE_HEIGHT}px)`,

      '.MuiTypography-root': {
        bottom: `${HEADER_MOBILE_HEIGHT}px`,
        fontSize: '24px',
      },
    },
  },
}));

export default {
  PhotoBlogProjectsPage,
};
