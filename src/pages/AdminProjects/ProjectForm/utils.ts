import copy from 'copy-text-to-clipboard';
import { SelectChangeEvent } from '@mui/material';
import { uploadImage } from '../../../api/uploadMethods.api';
import type { ProjectGalleryRow } from '../../../types/data/project';
import type { AlertDisplayProps, SetAlertDisplayProps } from '../../../common/components/Alert/props';

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

const handleImageUpload = (
  { target }: React.ChangeEvent<HTMLInputElement>,
  setAlertProps: SetAlertDisplayProps,
  callback: (imagePath: string) => void,
) => {
  if (!target.files?.length || target.files.length < 1) return;

  const imageFile = target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(imageFile);
  reader.onload = () => {
    const imageHash = ((reader.result as string) || '').replace(/^data:image\/(png|jpg|jpeg|gif);base64,/, '');

    uploadImage(imageHash)
      .then((res) => {
        const imageUrl = res.data;
        copy(imageUrl);
        const successAlertProps: AlertDisplayProps = {
          open: true,
          message: 'Image URL copied to clipboard!',
          severity: 'success',
        };
        setAlertProps(successAlertProps);
        setTimeout(() => {
          setAlertProps({ ...successAlertProps, open: false });
        }, 3000);
        callback(imageUrl);
      })
      .catch(() => {
        const errorAlertProps: AlertDisplayProps = {
          open: true,
          message: 'Internal error. Please try again later, or contact support.',
          severity: 'error',
        };
        setAlertProps(errorAlertProps);
        setTimeout(() => {
          setAlertProps({ ...errorAlertProps, open: false });
        }, 3000);
      });
  };
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
  handleImageUpload,
  onKeyDown,
};
