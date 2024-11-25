export type PhotoBlogProjectDateInfo = {
  monthIndex: number;
  year: number;
};

export type PhotoBlogProjectNameInfo = {
  full: string;
  short?: string;
};

export type PhotoBlogProjectMainImage = {
  path: string;
  alt?: string;
};

export type PhotoBlogProjectGalleryCell = {
  type: 'image link' | 'direct video link' | 'embedded video link';
  path: string;
  alt?: string;
};

export type PhotoBlogProjectGalleryRow = {
  cellAmount: 1 | 2 | 3 | 4;
  cells: Array<ProjectGalleryCell>;
};

export type PhotoBlogProjectGallerySection = {
  title?: string;
  description?: string;
  rows: Array<ProjectGalleryRow>;
};

export interface PhotoBlogProject {
  id: string;
  dateInfo: PhotoBlogProjectDateInfo;
  nameInfo: PhotoBlogProjectNameInfo;
  description: string;
  mainImage: PhotoBlogProjectMainImage;
  gallerySections: Array<PhotoBlogProjectGallerySection>;
}
