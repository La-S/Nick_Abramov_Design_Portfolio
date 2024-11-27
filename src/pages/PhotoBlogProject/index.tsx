import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import usePhotoBlogProject from '../../hooks/usePhotoBlogProject';
import { GlobalContext } from '../../contexts/global';
import { generatePhotoBlogProjectDateString } from '../PhotoBlogProjects/utils';
import S, { classes } from './styles';
import PhotoBlogProjectGalleryGrid from './PhotoBlogProjectGalleryGrid';
import Lightbox from 'yet-another-react-lightbox';
import { Video, Zoom } from 'yet-another-react-lightbox/plugins';
import { getPhotoBlogProjectLightboxSlides } from './utils';
import { LightboxContext } from './context';
import PhotoBlogProjectNav from './PhotoBlogProjectNav';
import { executeCallbackOnMediaCollectionLoad } from '../../utils/loadingUtils';

const MAX_LOADING_DELAY = 2500;

const PhotoBlogProjectPage = (): JSX.Element => {
  const {
    pageLoadingState: [isPageLoading, setIsPageLoading],
  } = useContext(GlobalContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  const photoBlogProjectId = state?.photoBlogProjectId;
  if (!photoBlogProjectId) navigate('/photo-blog'); // Redirect to photo blog page

  const {
    photoBlogProject,
    ...photoBlogProjectResponse
  } = usePhotoBlogProject(photoBlogProjectId || '');
  const {
    dateInfo,
    nameInfo,
    mainImage,
    description,
    gallerySections,
  } = photoBlogProject || {};
  const [isLoadingDelayActive, setIsLoadingDelayActive] = useState(true);
  const [areImagesLoaded, setAreImagesLoaded] = useState(false);

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = getPhotoBlogProjectLightboxSlides(photoBlogProject);

  const formattedDateString = generatePhotoBlogProjectDateString(dateInfo);
  const OverviewSection = (
    <div className={classes.overviewContainer}>
      <h5 className={classes.dateCreated}>{formattedDateString}</h5>
      <h2 className={classes.name}>{nameInfo.full}</h2>
      <p className={classes.description}>{description}</p>
      <img
        className={`${classes.mainImage} Loadable-Image`}
        src={mainImage.path}
        onClick={() => {
          setIsLightboxOpen(true);
          setSlideIndex(0);
        }}
        {...(mainImage.alt ? { alt: mainImage.alt } : {})}
      />
    </div>
  );

  useEffect(() => {
    if (!isPageLoading
      || photoBlogProjectResponse.isLoading
      || isLoadingDelayActive
      || !areImagesLoaded) return;

    setIsPageLoading(false);
  }, [photoBlogProjectResponse.isLoading, isLoadingDelayActive, areImagesLoaded]);

  useEffect(() => {
    setIsLoadingDelayActive(true);

    setTimeout(() => {
      setIsLoadingDelayActive(false);
    }, MAX_LOADING_DELAY);
  }, [photoBlogProjectId]);

  useEffect(() => {
    if (photoBlogProjectResponse.isLoading) return;

    const mediaToLoad: Array<HTMLImageElement | HTMLVideoElement> = Array.from(
      document.querySelectorAll('.Loadable-Image'),
    );
    executeCallbackOnMediaCollectionLoad(mediaToLoad, () => {
      setAreImagesLoaded(true);
    });
  }, [photoBlogProject]);

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
