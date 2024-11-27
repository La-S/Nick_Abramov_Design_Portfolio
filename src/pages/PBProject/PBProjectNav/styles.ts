import { styled } from '@mui/material';

export const classes = {
  root: 'PB-Project-Nav',
  returnLink: 'PB-Project-ReturnLink',
  navButtonsContainer: 'PB-Project-NavButtonsContainer',
  navButton: 'PB-Project-NavButton',
  navButtonPrev: 'PB-Project-NavButton--prev',
  navButtonNext: 'PB-Project-NavButton--next',
  navButtonDirectionText: 'PB-Project-NavButton-DirectionText',
  navButtonProjectName: 'PB-Project-NavButton-ProjectName',
};

const PBProjectNav = styled('div')(({ theme }) => ({
  marginTop: 134,
  marginBottom: 84,
  textAlign: 'center',

  [`.${classes.returnLink}`]: {
    fontSize: 24,
    fontFamily: theme.fonts.main,
    color: theme.textColors.secondary,
    textUnderlineOffset: 3,
  },

  [`.${classes.navButtonsContainer}`]: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '38px 15px',
    marginTop: 60,

    [`.${classes.navButton}`]: {
      background: 'transparent',
      border: 'none',

      a: {
        textDecoration: 'none',

        [`.${classes.navButtonDirectionText}`]: {
          fontSize: 16,
          fontFamily: theme.fonts.main,
          color: theme.textColors.secondary,
          textTransform: 'uppercase',
          letterSpacing: 1.5,
          margin: 0,
        },

        [`.${classes.navButtonProjectName}`]: {
          margin: 0,
          marginTop: 12,
          fontSize: 24,
          fontFamily: theme.fonts.main,
          color: theme.textColors.main,
          textDecoration: 'underline',
          textTransform: 'uppercase',
          textUnderlineOffset: 4,
        },
      },

      [`&.${classes.navButtonPrev}`]: {
        a: {
          textAlign: 'left',
        },
      },

      [`&.${classes.navButtonNext}`]: {
        marginLeft: 'auto',

        a: {
          textAlign: 'right',
        },
      },
    },
  },

  [theme.breakpoints.down('tablet')]: {
    marginTop: 60,
    marginBottom: 60,

    [`.${classes.returnLink}`]: {
      fontSize: 18,
    },

    [`.${classes.navButtonsContainer}`]: {
      marginTop: 40,

      [`.${classes.navButton}`]: {
        a: {
          [`.${classes.navButtonDirectionText}`]: {
            fontSize: 14,
          },

          [`.${classes.navButtonProjectName}`]: {
            marginTop: 10,
            fontSize: 20,
          },
        },
      },
    },
  },
}));

export default {
  PBProjectNav,
};
