import type { PhotoBlogProjectDateInfo } from '../../types/data/photoBlogProject';

const ORDERED_MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const generatePhotoBlogProjectDateString = (
  { monthIndex, year }: PhotoBlogProjectDateInfo
): string => {
  const month = ORDERED_MONTHS[monthIndex];

  return `${month} ${year}`;
};
