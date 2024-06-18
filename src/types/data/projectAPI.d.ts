import type { Project, ProjectMainImage, ProjectGalleryRow } from './project';

export type ProjectGetRequest =
  | {
      summary?: boolean;
    }
  | undefined;

export type ProjectGetResponse = Array<Project>;

export type ProjectInputDto = {
  name: string;
  category: string;
  description: string;
  mainImage: ProjectMainImage;
  isGallerySpaced: boolean;
  gallery: Array<ProjectGalleryRow>;
};
