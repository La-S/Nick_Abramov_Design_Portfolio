import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { getFAQs } from '../api/faqMethods';
import type { FAQGetResponse } from '../types/data/faqAPI';

type QueryResult = Omit<UseQueryResult<unknown, unknown>, 'data'> & {
  faqs: FAQGetResponse;
};

const useFAQs = (): QueryResult => {
  const { data: { data: faqs } = { data: [] }, ...metaProps } = useQuery({
    queryKey: ['faqs'],
    queryFn: () => getFAQs(),
  });

  return { faqs, ...metaProps };
};

export default useFAQs;
