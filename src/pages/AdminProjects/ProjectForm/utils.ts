import { SelectChangeEvent } from '@mui/material';
import type { ProjectGalleryRow } from '../../../types/data/project';

const updateGalleryRows = (
  e: SelectChangeEvent<1 | 2 | 3 | 4>,
  i: number,
  galleryRows: Array<ProjectGalleryRow>,
  setGalleryRows: React.Dispatch<React.SetStateAction<Array<ProjectGalleryRow>>>,
) => {
  const newCellAmount = e.target.value as unknown as ProjectGalleryRow['cellAmount'];
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

const onKeyDown = (
  e: React.KeyboardEvent<HTMLDivElement>,
  [descriptionValue, setDescriptionValue]: [string, React.Dispatch<React.SetStateAction<string>>],
) => {
  if (e.key === 'Enter' && e.shiftKey) {
    const inputEl = e.target as HTMLInputElement;
    const cursorPositionIdx = inputEl.selectionStart || descriptionValue.length - 1;
    const updatedDescriptionValue = (
      `${descriptionValue.slice(0, cursorPositionIdx)}\n${descriptionValue.slice(cursorPositionIdx)}`
    );
    setDescriptionValue(updatedDescriptionValue);
    setTimeout(() => {
      inputEl.setSelectionRange(cursorPositionIdx + 1, cursorPositionIdx + 1);
    }, 0);
  }
};

export default {
  updateGalleryRows,
  onKeyDown,
};
