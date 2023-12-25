export type ProjectGalleryCell = {
  type: 'image link' | 'direct video link' | 'embedded video link';
  path: string;
  lazyPath?: string /* for type === 'image' */;
};

export type ProjectGalleryRow = {
  cellAmount: 1 | 2 | 3 | 4;
  cells: Array<ProjectGalleryCell>;
};

export interface Project {
  id: string;
  name: string;
  category: string;
  mainImagePath: string;
  dateCreated: number;
  descriptionBullets: Array<string>;
  gallery: Array<ProjectGalleryRow>;
}
