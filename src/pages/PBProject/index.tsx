import React, { useState, useContext, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import usePBProject from '../../hooks/usePBProject';
import { GlobalContext } from '../../contexts/global';
import { generatePBProjectDateString } from '../PBProjects/utils';
import S, { classes } from './styles';
import PBProjectGalleryGrid from './PBProjectGalleryGrid';
import Lightbox from 'yet-another-react-lightbox';
import { Video, Zoom } from 'yet-another-react-lightbox/plugins';
import { getPBProjectLightboxSlides, tweenGenerator } from './utils';
import { LightboxContext } from './context';
import PBProjectNav from './PBProjectNav';
import { executeCallbackOnMediaCollectionLoad } from '../../utils/loadingUtils';
import { useGSAP } from '@gsap/react';

const MAX_LOADING_DELAY = 2500;

const PBProjectPage = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    pageLoadingState: [isPageLoading, setIsPageLoading],
  } = useContext(GlobalContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  const pBProjectId = state?.pBProjectId;
  if (!pBProjectId) navigate('/photo-blog'); // Redirect to photo blog page

  const {
    pBProject,
    ...pBProjectResponse
  } = usePBProject(pBProjectId || '');
  const {
    dateInfo,
    nameInfo,
    mainImage,
    description,
    gallerySections,
  } = pBProject || {};
  const [isLoadingDelayActive, setIsLoadingDelayActive] = useState(true);
  const [areImagesLoaded, setAreImagesLoaded] = useState(false);

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = getPBProjectLightboxSlides(pBProject);

  const wereGSAPAnimationsTriggeredRef = useRef(pBProjectResponse.isFetched);

  const formattedDateString = generatePBProjectDateString(dateInfo);
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
      || pBProjectResponse.isLoading
      || isLoadingDelayActive
      || !areImagesLoaded) return;

    setIsPageLoading(false);
  }, [pBProjectResponse.isLoading, isLoadingDelayActive, areImagesLoaded]);

  useEffect(() => {
    setIsLoadingDelayActive(true);

    setTimeout(() => {
      setIsLoadingDelayActive(false);
    }, MAX_LOADING_DELAY);
  }, [pBProjectId]);

  useEffect(() => {
    if (pBProjectResponse.isFetched
      && !wereGSAPAnimationsTriggeredRef.current) {
      wereGSAPAnimationsTriggeredRef.current = true;
    }
  }, [pBProjectId]);

  useEffect(() => {
    if (pBProjectResponse.isLoading) return;

    const mediaToLoad: Array<HTMLImageElement | HTMLVideoElement> = Array.from(
      document.querySelectorAll('.Loadable-Image'),
    );
    executeCallbackOnMediaCollectionLoad(mediaToLoad, () => {
      setAreImagesLoaded(true);
    });
  }, [pBProject]);

  useGSAP(() => {
    if (isPageLoading
      || !pBProjectResponse.isFetched
      || wereGSAPAnimationsTriggeredRef.current) return;

    tweenGenerator.dateCreated();
    tweenGenerator.name();
    tweenGenerator.description();
    tweenGenerator.mainImage();
  }, {
    scope: containerRef,
    dependencies: [pBProjectResponse.isFetched, isPageLoading]
  });

  return (
    <LightboxContext.Provider
      value={{
        lightboxOpenState: [isLightboxOpen, setIsLightboxOpen],
        slideIndexState: [slideIndex, setSlideIndex],
      }}
    >
      <S.PBProjectContainer ref={containerRef}>
        {OverviewSection}
        <PBProjectGalleryGrid gallerySections={gallerySections} />
        <PBProjectNav pBProject={pBProject} />

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
      </S.PBProjectContainer>
    </LightboxContext.Provider>
  );
};

export default PBProjectPage;
