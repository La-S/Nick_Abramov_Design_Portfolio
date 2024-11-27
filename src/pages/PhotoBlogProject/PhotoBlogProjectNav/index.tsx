import React from 'react';
import S, { classes } from './styles';
import { Link } from 'react-router-dom';

export const PhotoBlogProjectNav = (): JSX.Element => {
  return (
    <S.PhotoBlogProjectNav className={classes.root}>
      <Link
        to={'/photo-blog'}
        className={classes.returnLink}
      >
        Come Back to Blog
      </Link>

      <div className={classes.navButtonsContainer}>
        <button className={classes.navButton}>
          <Link to="/">
            <p className={classes.navButtonDirectionText}>Previous</p>
            <p className={classes.navButtonProjectName}>Black & White Washington DC</p>
          </Link>
        </button>

        <button className={classes.navButton}>
          <Link to="/">
            <p className={classes.navButtonDirectionText}>Next</p>
            <p className={classes.navButtonProjectName}>Roan Mountain</p>
          </Link>
        </button>
      </div>
    </S.PhotoBlogProjectNav>
  );
};

export default PhotoBlogProjectNav;
