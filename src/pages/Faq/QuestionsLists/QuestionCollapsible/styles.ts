import { styled, ButtonBase, Box } from '@mui/material';

const Container = styled('li')(({ theme }) => ({
  marginBottom: '35px',

  [theme.breakpoints.down('tablet')]: {
    marginBottom: '30px',
  },
}));

const QuestionButton = styled(ButtonBase)<{ expanded: boolean }>(({ theme, expanded }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  width: '100%',
  minHeight: '55px',
  color: theme.textColors.main,
  borderBottom: `2px solid ${expanded ? theme.textColors.tertiary : theme.componentColors.questionUnderline}`,
  transition: 'all 0.3s ease-in-out',

  [theme.breakpoints.down('tablet')]: {
    minHeight: '30px',
  },
}));

const QuestionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  minHeight: '30px',
  marginTop: '7px',
  marginBottom: '18px',

  '.MuiTypography-root': {
    alignSelf: 'flex-end',
    textAlign: 'left',
    marginLeft: '15px',
    fontFamily: theme.fonts.main,
    fontSize: '24px',
    color: theme.textColors.main,
  },

  svg: {
    alignSelf: 'flex-end',
    width: '23px',
    height: '23px',
    fill: theme.textColors.secondary,
  },

  [theme.breakpoints.down('tablet')]: {
    alignItems: 'center',
    minHeight: '20px',
    marginTop: '0',
    marginBottom: '10px',

    '.MuiTypography-root': {
      alignSelf: 'unset',
      fontSize: '16px',
      marginLeft: '10px',
    },

    svg: {
      alignSelf: 'unset',
      width: '18px',
      height: '18px',
    },
  },
}));

const AnswerContainer = styled(Box)(({ theme }) => ({ 
  '.MuiTypography-root': {
    marginTop: '15px',
    fontFamily: theme.fonts.main,
    fontSize: '20px',
    color: theme.textColors.main,
  },

  [theme.breakpoints.down('tablet')]: {
    '.MuiTypography-root': {
      marginTop: '10px',
      fontSize: '14px',
    },
  },
}));

export default {
  Container,
  QuestionButton,
  QuestionContainer,
  AnswerContainer,
};
