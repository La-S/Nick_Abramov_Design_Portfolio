import React from 'react';
import S, { classes } from './styles';
import { Link } from 'react-router-dom';
import usePhotoBlogProjects from '../../../hooks/usePhotoBlogProjects';
import type { PhotoBlogProject } from '../../../types/data/photoBlogProject';
import { getNavPhotoBlogProjects } from './utils';
import { formatStringToUriPath } from '../../../utils/apiUtils';

interface PhotoBlogProjectNavProps {
  photoBlogProject: PhotoBlogProject;
}

export const PhotoBlogProjectNav = ({
  photoBlogProject
}: PhotoBlogProjectNavProps): JSX.Element => {
  const {
    photoBlogProjects,
    ...photoBlogProjectsResponse
  } = usePhotoBlogProjects({ summary: true });
  const navPhotoBlogProjects =
    getNavPhotoBlogProjects(photoBlogProject, photoBlogProjects);

  return (
    photoBlogProjectsResponse.isFetched ? (
      <S.PhotoBlogProjectNav className={classes.root}>
        <Link
          to={'/photo-blog'}
          className={classes.returnLink}
        >
          Come Back to Blog
        </Link>

        <div className={classes.navButtonsContainer}>
          {navPhotoBlogProjects.prev ? (
            <button className={`${classes.navButton} ${classes.navButtonPrev}`}>
              <Link
                to={`/photo-blog/${formatStringToUriPath(navPhotoBlogProjects.prev.nameInfo.full)}`}
                state={{ photoBlogProjectId: navPhotoBlogProjects.prev.id }}
              >
                <p className={classes.navButtonDirectionText}>Previous</p>
                <p className={classes.navButtonProjectName}>
                  {navPhotoBlogProjects.prev.nameInfo.short}
                </p>
              </Link>
            </button>
          ): <></>}
          {navPhotoBlogProjects.next ? (
            <button className={`${classes.navButton} ${classes.navButtonNext}`}>
              <Link
                to={`/photo-blog/${formatStringToUriPath(navPhotoBlogProjects.next.nameInfo.full)}`}
                state={{ photoBlogProjectId: navPhotoBlogProjects.next.id }}
              >
                <p className={classes.navButtonDirectionText}>Next</p>
                <p className={classes.navButtonProjectName}>
                  {navPhotoBlogProjects.next.nameInfo.short}
                </p>
              </Link>
            </button>
          ) : <></>}
        </div>
      </S.PhotoBlogProjectNav>
    ) : <></>
  );
};

export default PhotoBlogProjectNav;
