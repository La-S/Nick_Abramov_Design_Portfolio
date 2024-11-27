import type { PBProjectDateInfo } from '../../types/data/pBProject';

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
export const generatePBProjectDateString = (
  { monthIndex, year }: PBProjectDateInfo
): string => {
  const month = ORDERED_MONTHS[monthIndex];

  return `${month} ${year}`;
};
