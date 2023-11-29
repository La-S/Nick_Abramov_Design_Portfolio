import { Box, styled } from '@mui/material';

const ContactContainer = styled(Box)(() => ({
}));

const ContactBody = styled(Box)(({ theme }) => ({
  display: 'flex',
  margin: '0 70px',
  paddingBottom: '70px',
  borderBottom: `1px solid ${theme.componentColors.inputBorder}`,

  img: {
    width: '35vw',
    maxWidth: '550px',
    marginRight: '75px',
  },

  [theme.breakpoints.down('tablet')]: {
    margin: '0',

    img: {
      width: '100%',
      marginRight: '0',
    },
  },
}));

export default {
  ContactContainer,
  ContactBody,
};
