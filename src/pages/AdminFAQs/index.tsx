import React from 'react';
// import { Box, ButtonBase } from '@mui/material';
import useFAQs from '../../hooks/useFAQs';
import FAQForm from './FAQForm';
import FAQEditable from './FAQEditable';
import S, { classes } from './styles';

const AdminFAQs = (): JSX.Element => {
  const { faqs } = useFAQs();

  // const NewFaqButton = (
  //   <Box className={classes.btnCreateWrapper}>
  //     <ButtonBase className={classes.btnCreate} disableRipple>
  //       <p>
  //         new faq <p>&nbsp;+</p>
  //       </p>
  //     </ButtonBase>
  //   </Box>
  // );

  return (
    <S.AdminFAQsContainer>
      <h3>Note: Currently under construction</h3>

      <FAQForm />
      {/* {NewFaqButton} */}
      <ul className={classes.list}>
        {faqs.map((faq) => <FAQEditable key={faq.id} faq={faq} />)}
      </ul>
    </S.AdminFAQsContainer>
  );
};

export default AdminFAQs;
