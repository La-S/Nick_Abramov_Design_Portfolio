import copy from 'copy-text-to-clipboard';
import { uploadImage } from '../api/uploadMethods.api';
import type { AlertDisplayProps, SetAlertDisplayProps } from '../common/components/Alert/props';

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

export default {
  handleImageUpload,
};
