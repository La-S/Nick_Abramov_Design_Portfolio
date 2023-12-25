import React from 'react';
import { Box } from '@mui/material';
import S from './styles';

import { ProjectGalleryCell, ProjectGalleryRow } from '../../../types/data/project';

const renderCell = (cell: ProjectGalleryCell): JSX.Element => {
  if (cell.type === 'image link') {
    return <img src={cell.path} loading="lazy" />;
  }
  if (cell.type === 'direct video link') {
    return <video src={cell.path} autoPlay loop muted />;
  }
  if (cell.type === 'embedded video link') {
    const videoLink = `${cell.path}?mute=1`;
    return (
      <Box className="iframe-container">
        <iframe width="420" height="315" src={videoLink} className="video" />
      </Box>
    );
  }

  return <></>;
};

export const renderGalleryRow = (galleryRow: ProjectGalleryRow, i: number): JSX.Element => {
  const { cells, cellAmount } = galleryRow;
  console.log({ cells, cellAmount });
  const range = Math.min(cells.length, cellAmount);

  return (
    <S.ProjectGalleryRow key={i} className="ProjectGallery-Grid-Row" cellAmount={cellAmount}>
      {cells.slice(0, range).map((cell, j) => (
        <Box key={j} className="ProjectGallery-Grid-Cell">
          {renderCell(cell)}
        </Box>
      ))}
    </S.ProjectGalleryRow>
  );
};
