import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import usePhotoBlogProject from '../../hooks/usePhotoBlogProject';
// import { GlobalContext } from '../../contexts/global';
import { generatePhotoBlogProjectDateString } from '../PhotoBlogProjects/utils';
import S, { classes } from './styles';
import PhotoBlogProjectGalleryGrid from './PhotoBlogProjectGalleryGrid';
import Lightbox from 'yet-another-react-lightbox';
import { Video, Zoom } from 'yet-another-react-lightbox/plugins';
import { getPhotoBlogProjectLightboxSlides } from './utils';
import { LightboxContext } from './context';
import PhotoBlogProjectNav from './PhotoBlogProjectNav';

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

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = getPhotoBlogProjectLightboxSlides(photoBlogProject);

  const OverviewSection = (
    <div className={classes.overviewContainer}>
      <h5 className={classes.dateCreated}>{formattedDateString}</h5>
      <h2 className={classes.name}>{nameInfo.full}</h2>
      <p className={classes.description}>{description}</p>
      <img
        className={classes.mainImage}
        src={mainImage.path}
        onClick={() => {
          setIsLightboxOpen(true);
          setSlideIndex(0);
        }}
        {...(mainImage.alt ? { alt: mainImage.alt } : {})}
      />
    </div>
  );

  return (
    <LightboxContext.Provider
      value={{
        lightboxOpenState: [isLightboxOpen, setIsLightboxOpen],
        slideIndexState: [slideIndex, setSlideIndex],
      }}
    >
      <S.PhotoBlogProjectContainer>
        {OverviewSection}
        <PhotoBlogProjectGalleryGrid
          gallerySections={gallerySections}
        />
        <PhotoBlogProjectNav photoBlogProject={photoBlogProject} />

        <Lightbox
          open={isLightboxOpen}
          close={() => { setIsLightboxOpen(false); }}
          slides={slides}
          plugins={[Zoom, Video]}
          index={slideIndex}
          zoom={{
            maxZoomPixelRatio: 1.35,
            scrollToZoom: true,
            doubleClickMaxStops: 1,
          }}
          carousel={{
            padding: 0,
            imageFit: 'contain',
          }}
        />
      </S.PhotoBlogProjectContainer>
    </LightboxContext.Provider>
  );
};

export default PhotoBlogProjectPage;
