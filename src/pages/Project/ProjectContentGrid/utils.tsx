import React from 'react';
import { Box } from '@mui/material';
import Markdown from '../../../components/Markdown';
import S from './styles';
import type { Dispatch, SetStateAction } from 'react';
import type { ProjectContentCell, ProjectContentRow } from '../../../types/data/project';
import type { Slide } from 'yet-another-react-lightbox/*';

const renderCell = (cell: ProjectContentCell): JSX.Element => {
  const isInvalidCell = (cell.type === 'markdown' && !cell.body) || (cell.type !== 'markdown' && !cell.path);
  if (isInvalidCell) return <></>;

  if (cell.type === 'markdown') {
    return (
      <Box className="Project-Content-Markdown-Container">
        <Markdown className='Project-Content-Markdown'>{cell.body}</Markdown>
      </Box>
    );
  }
  if (cell.type === 'image link') {
    return <img className="Loadable-Image" src={cell.path} loading="lazy" {...cell.alt && { alt: cell.alt }} />;
  }
  if (cell.type === 'direct video link') {
    return <video className="Loadable-Direct-Video" src={cell.path} autoPlay loop muted />;
  }
  if (cell.type === 'embedded video link') {
    const videoLink = `${cell.path}?mute=1`;
    return (
      <Box className="iframe-container Loadable-Embedded-Video-Container">
        <iframe width="420" height="315" src={videoLink} className="video" allowFullScreen />
      </Box>
    );
  }

  return <></>;
};

export const renderContentRow = (
  contentRow: ProjectContentRow,
  isContentSpaced: boolean,
  i: number,
  setIsLightboxOpen: Dispatch<SetStateAction<boolean>>,
  slideIndexUpperBoundary: number,
  setSlideIndex: Dispatch<SetStateAction<number>>,
  cursorWrapperRef: React.RefObject<HTMLDivElement | null>,
): JSX.Element => {
  const { cells, cellAmount } = contentRow;
  const actualCellAmount = Math.min(cells.length, cellAmount);

  return (
    <S.ProjectContentRow
      key={i}
      className="ProjectContent-Grid-Row"
      cellAmount={cellAmount}
      isContentSpaced={isContentSpaced}
    >
      {cells.slice(0, actualCellAmount).map((cell, j) => {
        const isValidCell = (cell.type !== 'markdown' && cell.path) || (cell.type === 'markdown' && cell.body);
        const startIndex = slideIndexUpperBoundary - actualCellAmount;
        const slideIndex = startIndex + j;

        return isValidCell ? (
          <Box
            key={j}
            className="ProjectContent-Grid-Cell"
            onClick={(e) => {
              e.preventDefault();
              if (cell.type === 'image link' || cell.type === 'direct video link') {
                setSlideIndex(slideIndex);
                setIsLightboxOpen(true);
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
            {renderCell(cell)}
          </Box>
        ) : (
          <></>
        );
      })}
    </S.ProjectContentRow>
  );
};

export const getLightboxSlides = (content: Array<ProjectContentRow>): Slide[] => {
  const slides: Slide[] = [];

  for (let i = 0; i < content.length; i += 1) {
    const contentRow = content[i];

    for (let j = 0; j < contentRow.cellAmount; j += 1) {
      const contentCell = contentRow.cells[j];
      if (!contentCell || !contentCell.type || contentCell.type === 'markdown' || !contentCell.path) continue;

      const mediaCell = contentCell;
      if (mediaCell.type === 'image link') {
        slides.push({
          type: 'image',
          src: mediaCell.path,
        });
      } else if (mediaCell.type === 'direct video link') {
        slides.push({
          type: 'video',
          width: 1280,
          height: 720,
          sources: [
            {
              src: mediaCell.path,
              type: 'video/mp4',
            },
          ],
        });
      }
    }
  }

  return slides;
};
