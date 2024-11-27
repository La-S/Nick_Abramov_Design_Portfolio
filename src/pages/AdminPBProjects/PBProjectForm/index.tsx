import React, { useState } from 'react';
import Alert from '../../../common/components/Alert';
import { useQueryClient } from '@tanstack/react-query';
import { EMPTY_PBPROJECT } from '../../../hooks/usePBProject';
import S from './styles';
import type { AlertDisplayProps } from '../../../common/components/Alert/props';
import type { PBProjectInputDto } from '../../../types/data/pBProjectAPI';
import { createPBProject, updatePBProject } from '../../../api/pBProjectMethods.api';

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

  return (
    <S.PBProjectForm>

    </S.PBProjectForm>
  );
};

export default PBProjectForm;
