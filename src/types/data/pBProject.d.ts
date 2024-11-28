export type PBProjectDateInfo = {
  monthIndex: number;
  year: number;
};

export type PBProjectNameInfo = {
  full: string;
  short?: string;
};

export type PBProjectMainImage = {
  path: string;
  alt?: string;
};

export type PBProjectGalleryCellType = 'image link' | 'direct video link' | 'embedded video link';

export type PBProjectGalleryCell = {
  type: PBProjectGalleryCellType;
  path: string;
  alt?: string;
};

export type PBProjectGalleryRow = {
  cellAmount: 1 | 2 | 3 | 4;
  cells: Array<PBProjectGalleryCell>;
};

export type PBProjectGallerySection = {
  title?: string;
  description?: string;
  rows: Array<PBProjectGalleryRow>;
};

export interface PBProject {
  id: string;
  dateInfo: PBProjectDateInfo;
  nameInfo: PBProjectNameInfo;
  description: string;
  mainImage: PBProjectMainImage;
  gallerySections: Array<PBProjectGallerySection>;
}

export type PBProjectSummary = Omit<PBProject, 'gallerySections'>;
