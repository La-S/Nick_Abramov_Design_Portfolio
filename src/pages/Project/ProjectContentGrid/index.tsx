import React, { useContext, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import { Video, Zoom } from 'yet-another-react-lightbox/plugins';
import { ProjectContentRow } from '../../../types/data/project';
import { getLightboxSlides, renderContentRow } from './utils';
import S from './styles';
import 'yet-another-react-lightbox/styles.css';
import { GlobalContext } from '../../../contexts/global';

interface Props {
  content: Array<ProjectContentRow>;
  isContentSpaced: boolean;
}

const ProjectContentGrid = ({ content, isContentSpaced }: Props): JSX.Element => {
  const { cursorWrapperRef } = useContext(GlobalContext);

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = getLightboxSlides(content);

  const renderContent = () => {
    let slideIndexUpperBoundary = 0;

    return content.map((contentRow, i) => {
      const actualCellAmount = Math.min(contentRow.cells.length, contentRow.cellAmount);
      slideIndexUpperBoundary += actualCellAmount;
      return renderContentRow(
        contentRow,
        isContentSpaced,
        i,
        setIsLightboxOpen,
        slideIndexUpperBoundary,
        setSlideIndex,
        cursorWrapperRef,
      );
    });
  };

  return (
    <>
      <S.ProjectContentGrid className="ProjectContent-Grid">{renderContent()}</S.ProjectContentGrid>

      <Lightbox
        open={isLightboxOpen}
        close={() => {
          setIsLightboxOpen(false);
        }}
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
    </>
  );
};

export default ProjectContentGrid;
