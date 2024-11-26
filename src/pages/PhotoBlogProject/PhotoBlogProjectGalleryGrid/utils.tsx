import React from 'react';
import S, { classes } from './styles';
import type {
  PhotoBlogProjectGalleryCell,
  PhotoBlogProjectGalleryRow,
  PhotoBlogProjectGallerySection,
} from '../../../types/data/photoBlogProject';

const renderCell = ({
  type,
  path,
  alt,
}: PhotoBlogProjectGalleryCell): JSX.Element => {
  if (!path || (
    !['image link', 'direct video link', 'embedded video link'].includes(type)
  )) return <></>;

  const CellContent = (() => {
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
  })();

  return (
    <div className={classes.cell}>
      {CellContent}
    </div>
  );
};

const renderGallerySectionRow = ({
  cellAmount,
  cells,
}: PhotoBlogProjectGalleryRow): JSX.Element => {
  const cellAmountToRender = Math.min(cellAmount, cells.length);
  const cellsToRender = cells.slice(0, cellAmountToRender);

  return (
    <S.PhotoBlogProjectGalleryRow
      className={classes.row}
      cellAmount={cellAmount}
    >
      {cellsToRender.map(renderCell)}
    </S.PhotoBlogProjectGalleryRow>
  );
};

export const renderGallerySection = ({
  title,
  description,
  rows,
}: PhotoBlogProjectGallerySection): JSX.Element => {
  return (
    <div className={classes.sectionContainer}>
      {title && <h5 className={classes.title}>{title}</h5>}
      {description && <p className={classes.description}>{description}</p>}
      {rows.length > 0 && (
        <div className={classes.rowsContainer}>
          {rows.map(renderGallerySectionRow)}
        </div>
      )}
    </div>
  );
};
