import { ProjectGalleryRow } from './project';
import type { Project } from './project';

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
  mainImagePath: string;
  isGallerySpaced: boolean;
  gallery: Array<ProjectGalleryRow>;
};
