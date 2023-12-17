import { styled } from '@mui/material/styles';

const ThemeMenu = styled('ul')(({ theme }) => ({
  position: 'absolute',
  top: '100%',
  right: 0,
  padding: '5px 0',
  margin: 0,
  width: '150px',
  listStyle: 'none',
  backgroundColor: theme.componentColors.themeSwitchBackground,
  border: `2px solid ${theme.textColors.tertiary}`,
  borderRadius: '5px 0 5px 5px',

  li: {
    margin: '2.5px 0',

    '&.Selected': {
      backgroundColor: theme.textColors.tertiary,
    },
  },

  [theme.breakpoints.down('tablet')]: {},
}));

export default {
  ThemeMenu,
};
