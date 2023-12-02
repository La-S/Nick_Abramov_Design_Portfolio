import React from 'react';
import { TextField, Typography, Button } from '@mui/material';
import S from './styles';

const ContactForm = ():JSX.Element => {
  return (
    <S.ContactForm action="submit">
      <Typography className='Contact-Form-Label'>
        If you would like to find out more about how I can help
        your company, please get in touch below, and I’d be happy to help:
      </Typography>

      <TextField variant='outlined' placeholder='Name*' required />
      <TextField variant='outlined' placeholder='Company Name' />
      <TextField variant='outlined' placeholder='Contact Email*' required />
      <TextField variant='outlined' placeholder='Services Required*' required />
      <TextField 
        variant='outlined' 
        placeholder='Project Details*' 
        required 
        multiline 
        rows={4} 
      />

      <Button className="Submit-Button">
        Send
      </Button>
    </S.ContactForm>
  );
};

export default ContactForm;
