import React, { /* useState */ } from 'react';
import { ButtonBase } from '@mui/material';
import S, { classes } from './styles';
import usePBProjects from '../../hooks/usePBProjects';
import AdminPBProjectsGrid from './AdminPBProjectsGrid';

const AdminPBProjects = (): JSX.Element => {
  // const [newPBProjectModalOpen, setNewPBProjectModalOpen] = useState(false);
  const { pBProjects, isFetched } = usePBProjects({ summary: true });

  const NewPBProjectButton = (
    <div className={classes.newPBProjectButtonWrapper}>
      <ButtonBase
        className={classes.newPBProjectButton}
        // onClick={() => setPBNewProjectModalOpen(true)}
        disableRipple
      >
        <p>
          new pb project <p>&nbsp;+</p>
        </p>
      </ButtonBase>
    </div>
  );

  return (
    <S.AdminPBProjectsContainer className={classes.root}>
      {NewPBProjectButton}
      <AdminPBProjectsGrid />

      {isFetched && pBProjects.length === 0 ? (
        <div className="No-Projects-Box">
          <p>{'Click new pb project button to get started...'}</p>
        </div>
      ) : (
        <></>
      )}

    </S.AdminPBProjectsContainer>
  );
};

export default AdminPBProjects;
