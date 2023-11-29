import React from 'react';
import PageTitle from '../../components/PageTitle';
import S from './styles';
import ContactImg from '../../assets/images/contact.jpeg';
import ContactForm from './ContactForm';

const ContactPage = (): JSX.Element => {
  return (
    <S.ContactContainer>
      <PageTitle>
        Stay in
        <span>Touch</span>
      </PageTitle>
      <S.ContactBody>
        <img src={ContactImg} alt="Image of Nick's business card" />
        <ContactForm />
      </S.ContactBody>
    </S.ContactContainer>
  );
};

export default ContactPage;
