import { SelectChangeEvent } from '@mui/material';
import type { ProjectContentRow } from '../../../types/data/project';

const updateGalleryRows = (
  e: SelectChangeEvent<1 | 2 | 3 | 4>,
  i: number,
  galleryRows: Array<ProjectContentRow>,
  setGalleryRows: React.Dispatch<React.SetStateAction<Array<ProjectContentRow>>>,
) => {
  const newCellAmount = e.target.value as unknown as ProjectContentRow['cellAmount'];
  const newGalleryValues = [...galleryRows];
  newGalleryValues[i].cellAmount = newCellAmount;
  if (newGalleryValues[i].cells.length > newCellAmount) {
    newGalleryValues[i].cells = newGalleryValues[i].cells.slice(0, newCellAmount);
  } else if (newGalleryValues[i].cells.length < newCellAmount) {
    const newCells = [...newGalleryValues[i].cells];
    while (newCells.length < newCellAmount) {
      newCells.push({ type: 'image link', path: '' });
    }
    newGalleryValues[i].cells = newCells;
  }
  setGalleryRows(newGalleryValues);
};

export default {
  updateGalleryRows,
};
