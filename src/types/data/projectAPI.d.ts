import type { Project, ProjectMainImage, ProjectContentRow } from './project';

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
  isContentSpaced: boolean;
  content: Array<ProjectContentRow>;
};
