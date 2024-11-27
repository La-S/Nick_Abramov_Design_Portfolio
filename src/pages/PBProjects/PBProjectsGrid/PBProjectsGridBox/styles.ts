import { styled } from '@mui/material';

export const classes = {
  name: 'PBProjectsGridBox-ProjectName',
  dateCreatedString: 'PBProjectsGridBox-ProjectDateCreatedString',
};

const PBProjectsGridBox = styled('div')(({ theme }) => ({
  '> a': {
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
  },

}));

export default {
  PBProjectsGridBox,
};
