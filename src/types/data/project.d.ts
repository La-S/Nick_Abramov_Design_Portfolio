export type ProjectMainImage = {
  path: string;
  alt?: string;
};

export type ProjectGalleryCell = {
  type: 'image link' | 'direct video link' | 'embedded video link';
  path: string;
  alt?: string;
};

export type ProjectGalleryRow = {
  cellAmount: 1 | 2 | 3 | 4;
  cells: Array<ProjectGalleryCell>;
};

export interface Project {
  id: string;
  order: number;
  name: string;
  category: string;
  mainImage: ProjectMainImage;
  dateCreated: number;
  description: string;
  isGallerySpaced: boolean;
  gallery: Array<ProjectGalleryRow>;
}
