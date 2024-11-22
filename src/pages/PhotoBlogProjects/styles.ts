import { styled } from '@mui/material';

export const classes = {
  headingTextBox: 'PhotoBlogProjects-HeadingTextBox',
};

const PhotoBlogProjectsPage = styled('div')(({ theme }) => ({
  // 32 21
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

  [theme.breakpoints.down('tablet')]: {
    padding: '0 19px',

    [`.${classes.headingTextBox}`]: {
      padding: '21px 0 45px 0',

      p: {
        fontSize: 20,
      },
    },
  },
}));

export default {
  PhotoBlogProjectsPage,
};
