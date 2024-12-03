import type {
  PBProject,
  PBProjectGalleryRow,
  PBProjectGallerySection,
} from '../../types/data/pBProject';
import gsap from 'gsap';
import { classes } from './styles';
import type { Slide } from 'yet-another-react-lightbox';
import { generateTitleTween } from '../../utils/gsapUtils';

const getLightboxSlidesFromGalleryRow = (
  {
    cells,
    cellAmount,
  }: PBProjectGalleryRow
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
  gallerySection: PBProjectGallerySection,
): Array<Slide> => {
  const slides: Array<Slide> = [];

  for (let j = 0; j < gallerySection.rows.length; j += 1) {
    const galleryRow = gallerySection.rows[j];
    const slidesFromRow = getLightboxSlidesFromGalleryRow(galleryRow);
    slides.push(...slidesFromRow);
  }

  return slides;
};

export const getPBProjectLightboxSlides = (
  pBProject: PBProject
): Array<Slide> => {
  const slides: Slide[] = [];

  if (pBProject.mainImage.path) {
    slides.push({
      type: 'image',
      src: pBProject.mainImage.path,
    });
  }

  for (let i = 0; i < pBProject.gallerySections.length; i += 1) {
    const gallerySection = pBProject.gallerySections[i];
    const slidesFromGallerySection =
      getLightboxSlidesFromGallerySection(gallerySection);
    slides.push(...slidesFromGallerySection);
  }

  return slides;
};

const generateDateCreatedTween = () => gsap.fromTo(
  `.${classes.dateCreated}`,
  { opacity: 0 },
  { duration: 1.5, opacity: 1, easing: 'power2.in' },
);

const generateNameTween = () => generateTitleTween(`.${classes.name}`);

const generateDescriptionTween = () => generateTitleTween(`.${classes.description}`);

const generateMainImageTween = () => gsap.fromTo(
  `.${classes.mainImage}`,
  { opacity: 0, scale: 0.75, translateY: '15%' },
  { duration: 1, opacity: 1, scale: 1, translateY: '0', ease: 'power4.out' },
);

export const tweenGenerator = {
  dateCreated: generateDateCreatedTween,
  name: generateNameTween,
  description: generateDescriptionTween,
  mainImage: generateMainImageTween,
};
