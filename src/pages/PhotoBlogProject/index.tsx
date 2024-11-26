import React, { /* useContext */ } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import usePhotoBlogProject from '../../hooks/usePhotoBlogProject';
// import { GlobalContext } from '../../contexts/global';
import { generatePhotoBlogProjectDateString } from '../PhotoBlogProjects/utils';
import S, { classes } from './styles';
import PhotoBlogProjectGalleryGrid from './PhotoBlogProjectGalleryGrid';

const PhotoBlogProjectPage = (): JSX.Element => {
  // const {
  //   pageLoadingState: [isPageLoading, setIsPageLoading],
  // } = useContext(GlobalContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  const photoBlogProjectId = state?.photoBlogProjectId;
  if (!photoBlogProjectId) navigate('/photo-blog'); // Redirect to photo blog page

  const {
    photoBlogProject,
    // ...photoBlogProjectResponse
  } = usePhotoBlogProject(photoBlogProjectId || '');
  const {
    dateInfo,
    nameInfo,
    mainImage,
    description,
    gallerySections,
  } = photoBlogProject || {};
  const formattedDateString = generatePhotoBlogProjectDateString(dateInfo);

  const OverviewSection = (
    <div className={classes.overviewContainer}>
      <h5 className={classes.dateCreated}>{formattedDateString}</h5>
      <h2 className={classes.name}>{nameInfo.full}</h2>
      <p className={classes.description}>{description}</p>
      <img
        className={classes.mainImage}
        src={mainImage.path}
        {...(mainImage.alt ? { alt: mainImage.alt } : {})}
      />
    </div>
  );

  return (
    <S.PhotoBlogProjectContainer>
      {OverviewSection}
      <PhotoBlogProjectGalleryGrid gallerySections={gallerySections} />
    </S.PhotoBlogProjectContainer>
  );
};

export default PhotoBlogProjectPage;
