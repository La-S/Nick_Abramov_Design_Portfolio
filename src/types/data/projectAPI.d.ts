import { ProjectGalleryRow } from './project';

export type ProjectGetRequest =
  | {
      summary?: boolean;
    }
  | undefined;

export type ProjectGetResponse = Array<Project>;

export type ProjectInputDto = {
  name: string;
  category: string;
  descriptionBullets: Array<string>;
  mainImagePath: string;
  gallery: Array<ProjectGalleryRow>;
};
