import React from 'react';
import type { Dispatch, SetStateAction, RefObject } from 'react';
import { v4 as uuidv4 } from 'uuid';
import S, { classes } from './styles';
import type {
  PBProjectGalleryCell,
  PBProjectGalleryRow,
  PBProjectGallerySection,
} from '../../../types/data/pBProject';
import gsap from 'gsap';
import { Typography } from '@mui/material';

const renderCellContent = ({
  path,
  type,
  alt,
}: PBProjectGalleryCell): JSX.Element => {
  if (type === 'image link') {
    return <img className="Loadable-Image" src={path} loading="lazy" {...alt && { alt: alt }} />;
  }
  if (type === 'direct video link') {
    return <video className="Loadable-Direct-Video" src={path} autoPlay loop muted />;
  }
  if (type === 'embedded video link') {
    const videoLink = `${path}?mute=1`;
    return (
      <div className="iframe-container Loadable-Embedded-Video-Container">
        <iframe width="420" height="315" src={videoLink} className="video" allowFullScreen />
      </div>
    );
  }

  return <></>;
};

export const renderGallerySections = (
  gallerySections: Array<PBProjectGallerySection>,
  setIsLightboxOpen: Dispatch<SetStateAction<boolean>>,
  setSlideIndex: Dispatch<SetStateAction<number>>,
  cursorWrapperRef: RefObject<HTMLDivElement | null>,
): JSX.Element => {
  let slideIndexCounter = 1;

  return (
    <>
      {gallerySections.map((gallerySection) => {
        const { title, description, rows } = gallerySection;

        return (
          <div className={classes.sectionContainer} key={uuidv4()}>
            {title && <Typography variant='h5' className={classes.title}>{title}</Typography>}
            {description && <Typography variant="body1" className={classes.description}>{description}</Typography>}
            {rows.length > 0 && (
              <div className={classes.rowsContainer}>
                {rows.map((row: PBProjectGalleryRow) => {
                  const { cellAmount, cells } = row;
                  const cellAmountToRender = Math.min(cellAmount, cells.length);
                  const cellsToRender = cells.slice(0, cellAmountToRender);

                  return (
                    <S.PBProjectGalleryRow
                      key={uuidv4()}
                      className={classes.row}
                      cellAmount={cellAmount}
                    >
                      {cellsToRender.map((cell: PBProjectGalleryCell) => {
                        const { path, type } = cell;
                        if (!path || (
                          !['image link', 'direct video link', 'embedded video link'].includes(type)
                        )) return <></>;

                        const slideIndex = slideIndexCounter;
                        if (type !== 'embedded video link') slideIndexCounter += 1;

                        return (
                          <div
                            key={uuidv4()}
                            className={classes.cell}
                            {...type !== 'embedded video link' && {
                              onClick: () => {
                                setIsLightboxOpen(true);
                                setSlideIndex(slideIndex);
                              }
                            }}
                            onMouseEnter={() => {
                              if (cell.type === 'embedded video link' && cursorWrapperRef.current) {
                                cursorWrapperRef.current.style.display = 'none';
                              }
                            }}
                            onMouseLeave={() => {
                              if (cell.type === 'embedded video link' && cursorWrapperRef.current) {
                                cursorWrapperRef.current.style.display = 'block';
                              }
                            }}
                          >
                            {renderCellContent(cell)}
                          </div>
                        );
                      })}
                    </S.PBProjectGalleryRow>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

const generateRowsTween = () => {
  const galleryRows: Array<HTMLDivElement> =
  gsap.utils.toArray<HTMLDivElement>(`.${classes.row}`);
  galleryRows.forEach((row) => {
    const cells = row.querySelectorAll(`.${classes.cell}`);

    return gsap.fromTo(
      cells,
      {
        opacity: 0, scale: 0.75, translateY: '15%'
      },
      {
        duration: 0.5,
        opacity: 1,
        scale: 1,
        translateY: '0',
        ease: 'power2.inOut',
        stagger: 0.15,
        scrollTrigger: {
          trigger: row,
          start: 'top 100%',
          end: 'bottom 0%',
        },
      }
    );
  });
};

const generateTitlesTween = () => {
  const titles: Array<HTMLElement> =
  gsap.utils.toArray<HTMLElement>(`.${classes.title}`);
  titles.forEach((title) => (
    gsap.fromTo(
      title,
      {
        opacity: 0, scale: 0.75, translateX: '-15%'
      },
      {
        duration: 0.5,
        opacity: 1,
        scale: 1,
        translateX: '0',
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: title,
          start: 'top 100%',
          end: 'bottom 0%',
        },
      }
    )
  ));
};

const generateDescriptionsTweens = () => {
  const descriptions: Array<HTMLElement> =
  gsap.utils.toArray<HTMLElement>(`.${classes.description}`);
  descriptions.forEach((description) => (
    gsap.fromTo(
      description,
      {
        opacity: 0, scale: 0.75, translateX: '-15%'
      },
      {
        duration: 0.35,
        delay: 0.25,
        opacity: 1,
        scale: 1,
        translateX: '0',
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: description,
          start: 'top 100%',
          end: 'bottom 0%',
        },
      }
    )
  ));
};

export const tweenGenerator = {
  rows: generateRowsTween,
  titles: generateTitlesTween,
  descriptions: generateDescriptionsTweens,
};
