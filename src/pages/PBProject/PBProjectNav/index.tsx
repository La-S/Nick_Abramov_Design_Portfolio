import React, { useContext } from 'react';
import S, { classes } from './styles';
import { Link } from 'react-router-dom';
import usePBProjects from '../../../hooks/usePBProjects';
import type { PBProject } from '../../../types/data/pBProject';
import * as utils from './utils';
import { formatStringToUriPath } from '../../../utils/apiUtils';
import { useQueryClient } from '@tanstack/react-query';
import { GlobalContext } from '../../../contexts/global';

interface PBProjectNavProps {
  pBProject: PBProject;
}

export const PBProjectNav = ({
  pBProject
}: PBProjectNavProps): JSX.Element => {
  const queryClient = useQueryClient();
  const {
    pageLoadingState: [, setIsPageLoading],
  } = useContext(GlobalContext);

  const {
    pBProjects,
    ...pBProjectsResponse
  } = usePBProjects({ summary: true });
  const navPBProjects =
    utils.getNavPBProjects(pBProject, pBProjects);

  return (
    pBProjectsResponse.isFetched ? (
      <S.PBProjectNav className={classes.root}>
        <Link
          to={'/photo-blog'}
          className={classes.returnLink}
        >
          Come Back to Blog
        </Link>

        <div className={classes.navButtonsContainer}>
          {navPBProjects.prev ? (
            <button className={`${classes.navButton} ${classes.navButtonPrev}`}>
              <Link
                to={`/photo-blog/${formatStringToUriPath(navPBProjects.prev.nameInfo.full)}`}
                state={{ pBProjectId: navPBProjects.prev.id }}
                onClick={() => utils.toggleLoadingOnUnloadedPBProject(
                  queryClient,
                  navPBProjects.prev!.id,
                  setIsPageLoading
                )}
              >
                <p className={classes.navButtonDirectionText}>Previous</p>
                <p className={classes.navButtonProjectName}>
                  {navPBProjects.prev.nameInfo.short}
                </p>
              </Link>
            </button>
          ): <></>}
          {navPBProjects.next ? (
            <button className={`${classes.navButton} ${classes.navButtonNext}`}>
              <Link
                to={`/photo-blog/${formatStringToUriPath(navPBProjects.next.nameInfo.full)}`}
                state={{ pBProjectId: navPBProjects.next.id }}
                onClick={() => utils.toggleLoadingOnUnloadedPBProject(
                  queryClient,
                  navPBProjects.next!.id,
                  setIsPageLoading
                )}
              >
                <p className={classes.navButtonDirectionText}>Next</p>
                <p className={classes.navButtonProjectName}>
                  {navPBProjects.next.nameInfo.short}
                </p>
              </Link>
            </button>
          ) : <></>}
        </div>
      </S.PBProjectNav>
    ) : <></>
  );
};

export default PBProjectNav;
