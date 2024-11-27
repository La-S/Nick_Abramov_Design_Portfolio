import React from 'react';
import S from './styles';

interface PBProjectFormProps {
  pBProjectId?: string;
  setModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const PBProjectForm = ({
  pBProjectId,
  setModalOpen,
}: PBProjectFormProps): JSX.Element => {
  return (
    <S.PBProjectForm>

    </S.PBProjectForm>
  );
};

export default PBProjectForm;
