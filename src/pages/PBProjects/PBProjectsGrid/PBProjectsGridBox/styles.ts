import { styled } from '@mui/material';

export const classes = {
  root: 'PBProjectsGridBox',
  name: 'PBProjectsGridBox-ProjectName',
  dateCreatedString: 'PBProjectsGridBox-ProjectDateCreatedString',
};

const PBProjectsGridBox = styled('div')(({ theme }) => ({
  '> a': {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    textDecoration: 'none',

    p: {
      display: 'flex',
      justifyContent: 'flex-end',
      flexWrap: 'wrap',
      margin: '7px 0 0 0',
      fontSize: 18,

      [`.${classes.name}`]: {
        marginRight: 5,
        fontFamily: theme.fonts.secondary,
        color: theme.textColors.main,
        textTransform: 'uppercase',
      },

      [`.${classes.dateCreatedString}`]: {
        marginLeft: 'auto',
        fontFamily: theme.fonts.main,
        color: theme.textColors.tertiary,
      },
    },

    img: {
      objectFit: 'cover',
      flexGrow: 1,
    },
  },

  [theme.breakpoints.down('tablet')]: {
    '> a': {
      p: {
        margin: '6px 0 0 0',
        fontSize: 16,
      },
    },
  },
}));

export default {
  PBProjectsGridBox,
};
