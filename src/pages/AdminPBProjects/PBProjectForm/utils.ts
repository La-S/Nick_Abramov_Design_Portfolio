import type { Dispatch, SetStateAction } from 'react';
import type {
  PBProjectGalleryRow,
  PBProjectGallerySection,
} from '../../../types/data/pBProject';
import { SelectChangeEvent } from '@mui/material';

const updateGalleryRowCellAmount = (
  e: SelectChangeEvent<1 | 2 | 3 | 4>,
  sectionIndex: number,
  rowIndex: number,
  gallerySectionsValue: Array<PBProjectGallerySection>,
  setGallerySectionsValue: Dispatch<SetStateAction<Array<PBProjectGallerySection>>>,
) => {
  const updatedCellAmount =
    e.target.value as unknown as PBProjectGalleryRow['cellAmount'];
  const updatedGallerySectionsValue = [...gallerySectionsValue];
  const row = updatedGallerySectionsValue[sectionIndex].rows[rowIndex];
  row.cellAmount = updatedCellAmount;
  if (row.cells.length > updatedCellAmount) {
    row.cells = row.cells.slice(0, updatedCellAmount);
  } else if (row.cells.length < updatedCellAmount) {
    const updatedCells = [...row.cells];
    while (updatedCells.length < updatedCellAmount) {
      updatedCells.push({ type: 'image link', path: '' });
    }
    row.cells = updatedCells;
  }
  setGallerySectionsValue(updatedGallerySectionsValue);
};

export default {
  updateGalleryRowCellAmount,
};
