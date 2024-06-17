import React, { useContext, useState, useEffect, useLayoutEffect } from 'react';
import { Typography } from '@mui/material';
import S from './styles';
import QuestionsList from './QuestionsLists';
import PageTitle from '../../common/components/PageTitle';
import { GlobalContext } from '../../contexts/global';
import useFAQs from '../../hooks/useFAQs';
import { checkIfCachedQueryDataExists } from '../../utils/loadingUtils';
import { useQueryClient } from '@tanstack/react-query';

const MAX_LOADING_DELAY = 2500;

const FAQsPage = (): JSX.Element => {
  const queryClient = useQueryClient();
  const {
    pageLoadingState: [isPageLoading, setIsPageLoading],
  } = useContext(GlobalContext);
  const cachedFAQsExist = checkIfCachedQueryDataExists(queryClient, ['faqs']);
  const [isLoadingDelayActive, setIsLoadingDelayActive] = useState(!cachedFAQsExist);
  const faqsResponse = useFAQs();

  useEffect(() => {
    if (!isPageLoading || faqsResponse.isLoading || isLoadingDelayActive) return;

    setIsPageLoading(false);
  }, [faqsResponse.isLoading]);

  useLayoutEffect(() => {
    if (cachedFAQsExist) return;

    setIsPageLoading(true);
    setTimeout(() => setIsLoadingDelayActive(false), MAX_LOADING_DELAY);
  }, []);

  return (
    <S.FAQsContainer>
      <PageTitle>
        Frequently Asked
        <span>Questions</span>
      </PageTitle>
      <QuestionsList />
      <S.Banner>
        <Typography variant="h3">Let me maximize your company’s potential</Typography>
      </S.Banner>
    </S.FAQsContainer>
  );
};

export default FAQsPage;
