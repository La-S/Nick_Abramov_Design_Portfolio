import { styled } from '@mui/material';

export const classes = {
  overviewContainer: 'PBProject-OverviewContainer',
  dateCreated: 'PBProject-DateCreated',
  name: 'PBProject-Name',
  description: 'PBProject-Description',
  mainImage: 'PBProject-MainImage',
};

const PBProjectContainer = styled('div')(({ theme }) => ({
  padding: '0 60px',

  [`.${classes.overviewContainer}`]: {
    [`.${classes.dateCreated}`]: {
      textAlign: 'center',
      fontFamily: theme.fonts.main,
      fontSize: 16,
      fontWeight: 200,
      color: theme.textColors.secondary,
      margin: 0,
      marginTop: 20,
    },

    [`.${classes.name}`]: {
      margin: 0,
      marginTop: 40,
      textAlign: 'center',
      padding: '0 5%',
      fontFamily: theme.fonts.main,
      fontSize: 32,
      color: theme.textColors.main,
      textTransform: 'uppercase',
    },

    [`.${classes.description}`]: {
      margin: 0,
      marginTop: 40,
      padding: '0 15%',
      textAlign: 'center',
    },

    [`.${classes.mainImage}`]: {
      width: '100%',
      margin: 0,
      marginTop: 40,
    },
  },


  [theme.breakpoints.down('tablet')]: {
    padding: '0 21px',

    [`.${classes.overviewContainer}`]: {
      [`.${classes.dateCreated}`]: {
        marginTop: 20,
      },

      [`.${classes.name}`]: {
        marginTop: 20,
        padding: 0,
      },

      [`.${classes.description}`]: {
        fontSize: 16,
        marginTop: 20,
        padding: 0,
      },

      [`.${classes.mainImage}`]: {
        marginTop: 20,
      },
    },
  },
}));

export default {
  PBProjectContainer,
};
