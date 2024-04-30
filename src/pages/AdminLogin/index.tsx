import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';
import { authenticateAdmin } from '../../api/authMethods.api';
import { cookies } from '../../api/api';
import { GlobalContext } from '../../contexts/global';
import S from './styles';

const AdminLogin = (): JSX.Element => {
  const {
    authState: [isAdminLoggedIn, setIsAdminLoggedIn],
  } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [passwordInput, setPasswordInput] = useState('');
  const handleChange = ({ target }: React.FormEvent<HTMLInputElement>) =>
    setPasswordInput((target as HTMLInputElement).value);
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const password = passwordInput.trim();
    authenticateAdmin(password)
      .then(({ data }) => {
        const { access_token } = data;
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 7);
        cookies.remove('access_token', { path: '/' });
        cookies.set('access_token', access_token, { expires: expirationDate, path: '/' });
        setIsAdminLoggedIn(true);
        navigate('/admin/projects');
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    if (isAdminLoggedIn) {
      navigate('/admin/projects');
    }
  });

  return (
    <S.LoginForm id="Login-Form">
      <Typography>Enter admin password to log in.</Typography>
      <TextField type="password" value={passwordInput} onInput={handleChange} />
      <Button type="submit" onClick={handleSubmit} variant="contained">
        Submit
      </Button>
    </S.LoginForm>
  );
};

export default AdminLogin;
