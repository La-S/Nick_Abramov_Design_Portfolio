import React, { useContext, useEffect, useRef, useState } from 'react';
import { Box, Button, ButtonBase } from '@mui/material';
import { ArrowLeft as PrevIcon, ArrowRight as NextIcon } from '@phosphor-icons/react';
import type { Project } from '../../../types/data/project';
import useProjects from '../../../hooks/useProjects';
import * as utils from './utils';
import S from './styles';
import { Link } from 'react-router-dom';
import { scrollToTop, trackElementVisibility } from '../../../utils/domUtils';
import { GlobalContext } from '../../../contexts/global';

interface Props {
  project: Project
}

const ProjectNavBar = ({ project }: Props): JSX.Element => {
  const { touchDeviceState: [isTouchDevice] } = useContext(GlobalContext);
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
      </Box>
      <Box>
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
      </Box>
    </Box>
  );
  const FixedNavProjectsBar = (
    <Box className='Fixed-NavProject-Buttons' ref={fixedNavbarRef}>
      {navProjects.prev ? (
        <Link 
          to={`/projects/${navProjects.prev.id}`}
          ref={fixedPrevArrowRef}
          className={`Prev-Project-Button ${isStaticNavbarInView ? 'Hidden' : ''}`}
        >
          <ButtonBase disableRipple onClick={scrollToTop} title={navProjects.prev.name}>
            <PrevIcon />
          </ButtonBase>
        </Link>
      ) : <div></div>}
      {navProjects.next ? (
        <Link 
          to={`/projects/${navProjects.next.id}`} 
          ref={fixedNextArrowRef}
          className={`Next-Project-Button ${isStaticNavbarInView ? 'Hidden' : ''}`}
        >
          <ButtonBase disableRipple onClick={scrollToTop} title={navProjects.next.name}>
            <NextIcon />
          </ButtonBase>
        </Link>
      ) : <div></div>}
    </Box>
  );

  useEffect(() => {
    const manageFixedNavbarVisibility = () => {
      if (isTouchDevice) {
        setIsStaticNavbarInView(true);
        return;
      }

      const isInView = trackElementVisibility(staticNavbarRef.current);
      setIsStaticNavbarInView(isInView);
    };

    const manageFixedNavbarButtonVisibility = (e: MouseEvent) => {
      utils.manageFixedNavbarButtonVisibility(e, fixedPrevArrowRef.current, fixedNextArrowRef.current);
    };

    manageFixedNavbarVisibility();
    window.addEventListener('scroll', manageFixedNavbarVisibility);
    window.addEventListener('resize', manageFixedNavbarVisibility);
    window.addEventListener('mousemove', manageFixedNavbarButtonVisibility);

    return () => {
      window.removeEventListener('scroll', manageFixedNavbarVisibility);
      window.removeEventListener('resize', manageFixedNavbarVisibility);
      window.removeEventListener('mousemove', manageFixedNavbarButtonVisibility);
    };
  }, []);
  useEffect(() => utils.addTransitionClassToNavButton(fixedPrevArrowRef.current), [fixedPrevArrowRef.current]);
  useEffect(() => utils.addTransitionClassToNavButton(fixedNextArrowRef.current), [fixedNextArrowRef.current]);

  return (
    <S.ProjectNavBar>
      {StaticNavProjectsBar}
      {FixedNavProjectsBar}
    </S.ProjectNavBar>
  );
};

export default ProjectNavBar;
