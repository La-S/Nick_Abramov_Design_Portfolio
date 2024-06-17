import React from 'react';
import { AlertProps } from '@mui/material';
import S from './styles';

const Alert = (props: AlertProps): JSX.Element => {
  return (
    <S.Alert elevation={6} variant="filled" {...props}>
      {props.children}
    </S.Alert>
  );
};

export default Alert;
