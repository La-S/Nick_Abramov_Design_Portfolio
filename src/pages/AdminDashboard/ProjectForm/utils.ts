import copy from 'copy-text-to-clipboard';
import { SelectChangeEvent } from '@mui/material';
import { uploadImage } from '../../../api/uploadMethods.api';
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

const handleImageUpload = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
  if (!target.files?.length || target.files.length < 1) return;
  
  const imageFile = target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(imageFile);
  reader.onload = () => {
    const imageHash = (reader.result as string || '').replace(
      /^data:image\/(png|jpg);base64,/,
      '',
    );

    uploadImage(imageHash)
      .then((res) => {
        const imageUrl = res.data;
        copy(imageUrl);
      });
  };
};

export default {
  updateDescriptionBullet,
  updateGalleryRows,
  handleImageUpload,
};
