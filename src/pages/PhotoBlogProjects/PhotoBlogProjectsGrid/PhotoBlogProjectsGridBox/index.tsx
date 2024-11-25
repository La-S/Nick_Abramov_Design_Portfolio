import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { formatStringToUriPath } from '../../../../utils/apiUtils';
import { checkIfCachedQueryDataExists } from '../../../../utils/loadingUtils';
import { GlobalContext } from '../../../../contexts/global';
import S, { classes } from './styles';

const PhotoBlogProjectsGridBox = (): JSX.Element => {
  const queryClient = useQueryClient();
  const {
    pageLoadingState: [, setIsPageLoading],
  } = useContext(GlobalContext);
  const {
    id, name, dateCreatedString, imagePath, altText,
  } = {
    id: 1,
    name: 'Photo Blog Sample Project 1',
    dateCreatedString: 'November 2024',
    imagePath: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg',
    altText: 'Sample Photo Blog Project 1',
  };
  const formattedName = formatStringToUriPath(name);

  return (
    <S.PhotoBlogProjectsGridBox>
      <Link
        to={`/photo-blog/${formattedName}`}
        state={{ photoBlogProjectId: id }}
        onClick={() => {
          const cachedPhotoBlogProjectExists = checkIfCachedQueryDataExists(queryClient, ['photo-blog-project', id]);
          if (!cachedPhotoBlogProjectExists) setIsPageLoading(true);
        }}
        draggable="false"
      >
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
