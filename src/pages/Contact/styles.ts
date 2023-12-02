import { Box, styled } from '@mui/material';

const ContactContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('laptop')]: {
    '.Page-Title': {
      marginBottom: '40px',
    },
  },
}));

const ContactBody = styled(Box)(({ theme }) => ({
  display: 'flex',
  margin: '0 70px',
  paddingBottom: '70px',
  borderBottom: `1px solid ${theme.componentColors.inputBorder}`,

  img: {
    alignSelf: 'center',
    width: '50%',
    maxHeight: '585px',
    marginRight: '75px',
    objectFit: 'cover',
    '-webkit-user-drag': 'none',
  },

  [theme.breakpoints.down('laptop')]: {
    margin: '0',
    flexDirection: 'column',

    img: {
      order: 2,
      width: '100%',
      marginRight: '0',
    },

    form: {
      order: 1,
    },
  },
}));

export default {
  ContactContainer,
  ContactBody,
};
