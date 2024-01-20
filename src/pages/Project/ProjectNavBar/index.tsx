import React from 'react';
import { Button } from '@mui/material';
import { ArrowLeft as PrevIcon, ArrowRight as NextIcon } from '@phosphor-icons/react';
import type { Project } from '../../../types/data/project';
import useProjects from '../../../hooks/useProjects';
import { getNavProjects } from './utils';
import S from './styles';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../../utils/domUtils';

interface Props {
  project: Project
}

const ProjectNavBar = ({ project }: Props): JSX.Element => {
  const { projects } = useProjects({ summary: true });
  const navProjects = getNavProjects(project, projects);

  const NavProjectsButtons = (
    <>
      <div>
        {navProjects.prev ? (
          <Link to={`/projects/${navProjects.prev.id}`}>
            <Button
              variant="text"
              color="primary"
              disableRipple 
              startIcon={<PrevIcon />}
              onClick={scrollToTop}
            >
              {navProjects.prev.name}
            </Button>
          </Link>
        ) : null}
      </div>
      <div>
        {navProjects.next ? (
          <Link to={`/projects/${navProjects.next.id}`}>
            <Button 
              variant="text"
              color="primary"
              disableRipple
              endIcon={<NextIcon />}
              onClick={scrollToTop}
            >
              {navProjects.next.name}
            </Button>
          </Link>
        ) : null}
      </div>
    </>
  );

  return (
    <S.ProjectNavBar>
      {NavProjectsButtons}
    </S.ProjectNavBar>
  );
};

export default ProjectNavBar;
