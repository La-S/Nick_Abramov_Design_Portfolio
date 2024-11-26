import type {
  PhotoBlogProject,
  PhotoBlogProjectGalleryRow,
  PhotoBlogProjectGallerySection,
} from '../../types/data/photoBlogProject';
import type { Slide } from 'yet-another-react-lightbox';

const getLightboxSlidesFromGalleryRow = (
  {
    cells,
    cellAmount,
  }: PhotoBlogProjectGalleryRow
): Array<Slide> => {
  const slides: Array<Slide> = [];
  const actualCellAmount = Math.min(cellAmount, cells.length);

  for(let i = 0; i < actualCellAmount; i += 1) {
    const galleryCell = cells[i];
    if (!galleryCell ||!galleryCell.type ||!galleryCell.path) continue;

    if (galleryCell.type === 'image link') {
      slides.push({
        type: 'image',
        src: galleryCell.path,
      });
    } else if (galleryCell.type === 'direct video link') {
      slides.push({
        type: 'video',
        width: 1280,
        height: 720,
        sources: [
          {
            src: galleryCell.path,
            type: 'video/mp4',
          },
        ],
      });
    }
  }

  return slides;
};

const getLightboxSlidesFromGallerySection = (
  gallerySection: PhotoBlogProjectGallerySection,
): Array<Slide> => {
  const slides: Array<Slide> = [];

  for (let j = 0; j < gallerySection.rows.length; j += 1) {
    const galleryRow = gallerySection.rows[j];
    const slidesFromRow = getLightboxSlidesFromGalleryRow(galleryRow);
    slides.push(...slidesFromRow);
  }

  return slides;
};

export const getPhotoBlogProjectLightboxSlides = (
  photoBlogProject: PhotoBlogProject
): Array<Slide> => {
  const slides: Slide[] = [];

  if (photoBlogProject.mainImage.path) {
    slides.push({
      type: 'image',
      src: photoBlogProject.mainImage.path,
    });
  }

  for (let i = 0; i < photoBlogProject.gallerySections.length; i += 1) {
    const gallerySection = photoBlogProject.gallerySections[i];
    const slidesFromGallerySection =
      getLightboxSlidesFromGallerySection(gallerySection);
    slides.push(...slidesFromGallerySection);
  }

  return slides;
};