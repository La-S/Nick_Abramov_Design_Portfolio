import { SelectChangeEvent } from '@mui/material';
import type { ProjectGalleryRow } from '../../../types/data/project';

const updateDescriptionBullet = (
  { target }: React.FormEvent<HTMLDivElement>,
  i: number,
  descriptionBulletValues: Array<string>,
  setDescriptionBulletValues: React.Dispatch<React.SetStateAction<Array<string>>>,
) => {
  const newValue = (target as HTMLInputElement).value;
  const newDescriptionBulletValues = [...descriptionBulletValues];
  newDescriptionBulletValues[i] = newValue;
  setDescriptionBulletValues(newDescriptionBulletValues);
};

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

export default {
  updateDescriptionBullet,
  updateGalleryRows,
};
