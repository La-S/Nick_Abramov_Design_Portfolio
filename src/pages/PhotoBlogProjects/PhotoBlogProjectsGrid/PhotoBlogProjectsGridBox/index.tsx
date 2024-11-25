import React from 'react';
import S, { classes } from './styles';
import { Link } from 'react-router-dom';
import { formatStringToUriPath } from '../../../../utils/apiUtils';

const PhotoBlogProjectsGridBox = (): JSX.Element => {
  const {
    name, dateCreatedString, imagePath, altText,
  } = {
    name: 'Photo Blog Sample Project 1',
    dateCreatedString: 'November 2024',
    imagePath: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg',
    altText: 'Sample Photo Blog Project 1',
  };
  const formattedName = formatStringToUriPath(name);

  return (
    <S.PhotoBlogProjectsGridBox>
      <Link to={`/photo-blog/${formattedName}`}>
        <img src={imagePath} alt={altText} />

        <p>
          <span className={classes.name}>{name}</span>
          <span className={classes.dateCreatedString}>{dateCreatedString}</span>
        </p>
      </Link>
    </S.PhotoBlogProjectsGridBox>
  );
};

export default PhotoBlogProjectsGridBox;
