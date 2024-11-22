import React from 'react';
import S, { classes } from './styles';
import { Link } from 'react-router-dom';

const ABOUT_PAGE_PATH = '/about';

const PhotoBlogProjectsPage = (): JSX.Element => {
  return (
    <S.PhotoBlogProjectsPage>
      <div className={classes.headingTextBox}>
        <p>
          {'Photography by '}
          <Link to={ABOUT_PAGE_PATH}>
            Nick Abramov
          </Link>
          {' — '}
        </p>
        <p>life adventures and beautiful things.</p>
      </div>
    </S.PhotoBlogProjectsPage>
  );
};

export default PhotoBlogProjectsPage;
