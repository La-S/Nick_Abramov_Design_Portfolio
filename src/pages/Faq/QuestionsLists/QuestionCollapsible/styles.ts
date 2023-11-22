import { styled, ButtonBase, Box } from '@mui/material';

const Container = styled('li')(() => ({
  marginBottom: '35px',
}));

const QuestionButton = styled(ButtonBase)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  width: '100%',
  height: '55px',
  color: theme.textColors.main,
  borderBottom: `2px solid ${theme.componentColors.questionUnderline}`,
}));

const QuestionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '30px',
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
}));

const AnswerContainer = styled(Box)(({ theme }) => ({ 
  '.MuiTypography-root': {
    marginTop: '15px',
    fontFamily: theme.fonts.main,
    fontSize: '20px',
    color: theme.textColors.main,
  },
}));

export default {
  Container,
  QuestionButton,
  QuestionContainer,
  AnswerContainer,
};
