import React, { useEffect, useState } from 'react';
import { Button, CircularProgress } from '@mui/material';
import Alert from '../../../common/components/Alert';
import { X as CloseIcon, Trash as TrashIcon, UploadSimple as UploadIcon } from '@phosphor-icons/react';
import { useQueryClient } from '@tanstack/react-query';
import { EMPTY_PBPROJECT } from '../../../hooks/usePBProject';
import { createPBProject, getPBProject, updatePBProject } from '../../../api/pBProjectMethods.api';
import formUtils from '../../../utils/formUtils';
import S from './styles';
import type { AlertDisplayProps } from '../../../common/components/Alert/props';
import type { PBProjectInputDto } from '../../../types/data/pBProjectAPI';

interface PBProjectFormProps {
  pBProjectId?: string;
  setModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const PBProjectForm = ({
  pBProjectId,
  setModalOpen,
}: PBProjectFormProps): JSX.Element => {
  const queryClient = useQueryClient();
  const [pBProject, setPBProject] = useState(EMPTY_PBPROJECT);
  const [isFetched, setIsFetched] = useState(false);
  const [alertState, setAlertState] = useState<AlertDisplayProps>({
    open: false,
    message: '',
    severity: 'info',
  });

  const [nameInfoValue, setNameInfoValue] = useState(pBProject.nameInfo);
  const [dateInfoValue, setDateInfoValue] = useState(pBProject.dateInfo);
  const [mainImageValue, setMainImageValue] = useState(pBProject.mainImage);
  const [descriptionValue, setDescriptionValue] = useState(pBProject.description);
  const [gallerySectionsValue, setGallerySectionsValue] = useState(pBProject.gallerySections);

  const resetFields = () => {
    setNameInfoValue({
      full: '',
      short: '',
    });
    setDateInfoValue({
      monthIndex: 0,
      year: 0,
    });
    setMainImageValue({
      path: '',
      alt: '',
    });
    setDescriptionValue('');
    setGallerySectionsValue([]);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const pBProjectInputDto: PBProjectInputDto = {
      nameInfo: {
        full: nameInfoValue.full.trim(),
        short: nameInfoValue.short?.trim(),
      },
      dateInfo: {
        monthIndex: dateInfoValue.monthIndex,
        year: dateInfoValue.year,
      },
      mainImage: {...mainImageValue },
      description: descriptionValue.trim(),
      gallerySections: [...gallerySectionsValue],
    };

    if (pBProjectId) {
      updatePBProject(pBProjectId, pBProjectInputDto)
        .then(() => {
          resetFields();
          alert('Photo blog project updated successfully!');
          queryClient.invalidateQueries({ queryKey: ['photo-blog-projects'] });
          setModalOpen?.(false);
        })
        .catch((err) => alert(err.response.data.message));
    } else {
      createPBProject(pBProjectInputDto)
        .then(() => {
          resetFields();
          alert('Photo blog project created successfully!');
          queryClient.invalidateQueries({ queryKey: ['photo-blog-projects'] });
          if (setModalOpen) setModalOpen(false);
        })
        .catch((err) => alert(err.response.data.message));
    }
  };

  const UploadImageButton = (callback: (imagePath: string) => void) => (
    <Button
      component="label"
      variant="contained"
      startIcon={<UploadIcon className='Hide-On-Smaller-Screens' />}
      sx={{ marginLeft: '10px' }}
    >
      <span>Upload&nbsp;</span>
      <span className='Hide-On-Smaller-Screens'>Image</span>
      <S.VisuallyHiddenInput
        type="file"
        accept="image/png, image/gif, image/jpeg, image/jpg"
        onChange={(e) => {
          formUtils.handleImageUpload(e, setAlertState, callback);
          callback;
        }}
      />
    </Button>
  );

  const renderProjectFormState = (): JSX.Element => {
    if (pBProjectId && !isFetched) {
      return (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </div>
      );
    }

    return <></>;
  };

  useEffect(() => {
    if (!pBProjectId) return;

    setNameInfoValue(pBProject.nameInfo);
    setDateInfoValue(pBProject.dateInfo);
    setMainImageValue(pBProject.mainImage);
    setDescriptionValue(pBProject.description);
    setGallerySectionsValue(pBProject.gallerySections);
  }, [pBProject]);

  useEffect(() => {
    if (!pBProjectId) return;


    getPBProject(pBProjectId)
      .then(({ data }) => {
        setPBProject(data);
        setIsFetched(true);
      })
      .catch((err) => {
        alert(err.response.data.message);
        if (setModalOpen) setModalOpen(false);
      });
  }, []);

  return renderProjectFormState();
};

export default PBProjectForm;
