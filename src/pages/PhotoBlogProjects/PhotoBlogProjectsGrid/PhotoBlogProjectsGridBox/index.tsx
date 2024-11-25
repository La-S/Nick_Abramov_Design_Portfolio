import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { formatStringToUriPath } from '../../../../utils/apiUtils';
import { checkIfCachedQueryDataExists } from '../../../../utils/loadingUtils';
import { GlobalContext } from '../../../../contexts/global';
import S, { classes } from './styles';
import type { PhotoBlogProjectSummary } from '../../../../types/data/photoBlogProject';
import { generatePhotoBlogProjectDateString } from '../../utils';

interface PhotoBlogProjectsGridBoxProps {
  photoBlogProjectSummary: PhotoBlogProjectSummary
}

const PhotoBlogProjectsGridBox = ({
  photoBlogProjectSummary,
}: PhotoBlogProjectsGridBoxProps): JSX.Element => {
  const queryClient = useQueryClient();
  const {
    pageLoadingState: [, setIsPageLoading],
  } = useContext(GlobalContext);
  const { id, dateInfo, nameInfo, mainImage } = photoBlogProjectSummary;
  const formattedName = formatStringToUriPath(nameInfo.full);
  const formattedDateString = generatePhotoBlogProjectDateString(dateInfo);

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
        <img src={mainImage.path} {...(mainImage.alt ? { alt: mainImage.alt } : {})} />

        <p>
          <span className={classes.name}>{nameInfo.short || nameInfo.full}</span>
          <span className={classes.dateCreatedString}>{formattedDateString}</span>
        </p>
      </Link>
    </S.PhotoBlogProjectsGridBox>
  );
};

export default PhotoBlogProjectsGridBox;
