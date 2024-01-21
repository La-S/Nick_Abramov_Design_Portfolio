import React, { useContext, useEffect, useRef, useState } from 'react';
import { Box, Button, ButtonBase } from '@mui/material';
import { ArrowLeft as PrevIcon, ArrowRight as NextIcon } from '@phosphor-icons/react';
import type { Project } from '../../../types/data/project';
import useProjects from '../../../hooks/useProjects';
import * as utils from './utils';
import S from './styles';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../../utils/domUtils';
import { GlobalContext } from '../../../contexts/global';
import { useQueryClient } from '@tanstack/react-query';

interface Props {
  project: Project
}

const ProjectNavBar = ({ project }: Props): JSX.Element => {
  const queryClient = useQueryClient();

  const { 
    touchDeviceState: [isTouchDevice], 
    pageLoadingState: [, setIsPageLoading],
  } = useContext(GlobalContext);
  const { projects } = useProjects({ summary: true });
  const navProjects = utils.getNavProjects(project, projects);
  const [isStaticNavbarInView, setIsStaticNavbarInView] = useState(false);

  const staticNavbarRef = useRef<HTMLDivElement | null>(null);
  const fixedNavbarRef = useRef<HTMLDivElement | null>(null);
  const fixedPrevArrowRef = useRef<HTMLAnchorElement | null>(null);
  const fixedNextArrowRef = useRef<HTMLAnchorElement | null>(null);

  const StaticNavProjectsBar = (
    <Box className="Static-NavProject-Buttons" ref={staticNavbarRef}>
      <Box>
        {navProjects.prev ? (
          <Link
            onClick={() => utils.toggleLoadingOnUnloadedProject(queryClient, navProjects.prev!.id, setIsPageLoading)}
            to={`/projects/${navProjects.prev.id}`}
          >
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
      </Box>
      <Box>
        {navProjects.next ? (
          <Link 
            onClick={() => utils.toggleLoadingOnUnloadedProject(queryClient, navProjects.next!.id, setIsPageLoading)}
            to={`/projects/${navProjects.next.id}`}
          >
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
      </Box>
    </Box>
  );
  const FixedNavProjectsBar = (
    <Box className='Fixed-NavProject-Buttons' ref={fixedNavbarRef}>
      {navProjects.prev ? (
        <Link 
          onClick={() => utils.toggleLoadingOnUnloadedProject(queryClient, navProjects.prev!.id, setIsPageLoading)}
          to={`/projects/${navProjects.prev.id}`}
          ref={fixedPrevArrowRef}
          className='Prev-Project-Button'
          key={navProjects.prev.id}
        >
          <ButtonBase disableRipple onClick={scrollToTop} title={navProjects.prev.name}>
            <PrevIcon />
          </ButtonBase>
        </Link>
      ) : <div></div>}
      {navProjects.next ? (
        <Link 
          onClick={() => utils.toggleLoadingOnUnloadedProject(queryClient, navProjects.next!.id, setIsPageLoading)}
          to={`/projects/${navProjects.next.id}`} 
          ref={fixedNextArrowRef}
          className='Next-Project-Button'
          key={navProjects.next.id}
        >
          <ButtonBase disableRipple onClick={scrollToTop} title={navProjects.next.name}>
            <NextIcon />
          </ButtonBase>
        </Link>
      ) : <div></div>}
    </Box>
  );

  useEffect(() => {
    utils.manageProjectNavbarEventListeners(
      isTouchDevice,
      setIsStaticNavbarInView,
      staticNavbarRef,
      fixedPrevArrowRef,
      fixedNextArrowRef,
    );
  }, []);
  useEffect(() => utils.addTransitionClassToNavButton(fixedPrevArrowRef.current, -50), [fixedPrevArrowRef.current, project]);
  useEffect(() => utils.addTransitionClassToNavButton(fixedNextArrowRef.current, 50), [fixedNextArrowRef.current, project]);
  useEffect(() => {
    utils.addHiddenClassToNavButton(fixedPrevArrowRef.current, isStaticNavbarInView);
    utils.addHiddenClassToNavButton(fixedNextArrowRef.current, isStaticNavbarInView);
  }, [isStaticNavbarInView]);

  return (
    <S.ProjectNavBar>
      {StaticNavProjectsBar}
      {FixedNavProjectsBar}
    </S.ProjectNavBar>
  );
};

export default ProjectNavBar;
