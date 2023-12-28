import React from 'react';
import { Box } from '@mui/material';
import type { Dispatch, SetStateAction, MutableRefObject } from 'react';
import type { ProjectGalleryCell, ProjectGalleryRow } from '../../../types/data/project';
import type { Slide } from 'yet-another-react-lightbox/*';
import S from './styles';

const renderCell = (cell: ProjectGalleryCell): JSX.Element => {
  if (cell.type === 'image link') {
    return <img className='Project-Image' src={cell.path} loading="lazy" />;
  }
  if (cell.type === 'direct video link') {
    return <video className='Project-Direct-Video' src={cell.path} autoPlay loop muted />;
  }
  if (cell.type === 'embedded video link') {
    const videoLink = `${cell.path}?mute=1`;
    return (
      <Box className="iframe-container Project-Embedded-Video-Container">
        <iframe width="420" height="315" src={videoLink} className="video" />
      </Box>
    );
  }

  return <></>;
};

export const renderGalleryRow = (
  galleryRow: ProjectGalleryRow,
  isGallerySpaced: boolean,
  i: number,
  setIsLightboxOpen: Dispatch<SetStateAction<boolean>>,
  slideNumberRef: MutableRefObject<number>,
  setSlideIndex: Dispatch<SetStateAction<number>>,
): JSX.Element => {
  const { cells, cellAmount } = galleryRow;
  const range = Math.min(cells.length, cellAmount);
  const slideNumber = slideNumberRef.current;
  slideNumberRef.current += 1;

  return (
    <S.ProjectGalleryRow
      key={i}
      className="ProjectGallery-Grid-Row"
      cellAmount={cellAmount}
      isGallerySpaced={isGallerySpaced}
    >
      {cells.slice(0, range).map((cell, j) => (
        <Box 
          key={j}
          className="ProjectGallery-Grid-Cell"
          onClick={(e) => {
            e.preventDefault();
            setSlideIndex(slideNumber);
            setIsLightboxOpen(true);
          }}
        >
          {renderCell(cell)}
        </Box>
      ))}
    </S.ProjectGalleryRow>
  );
};

export const getLightboxSlides = (
  gallery: Array<ProjectGalleryRow>,
): Slide[] => {
  const slides: Slide[] = [];

  for (let i = 0; i < gallery.length; i += 1) {
    const galleryRow = gallery[i];

    for (let j = 0; j < galleryRow.cellAmount; j += 1) {
      const galleryCell = galleryRow.cells[j];
      if (!galleryCell) continue;

      if (galleryCell.type === 'image link') {
        slides.push({
          src: galleryCell.path,
        });
      } else if (galleryCell.type === 'direct video link') {
        slides.push({
          type: 'video',
          width: 1280,
          height: 720,
          sources: [{
            src: galleryCell.path,
            type: 'video/mp4',
          },
          ],
        });
      }
    }
  }

  return slides;
};
