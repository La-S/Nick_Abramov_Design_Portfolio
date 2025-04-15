export type ProjectMainImage = {
  path: string;
  alt?: string;
};

export type ProjectMediaCell = {
  type: 'image link' | 'direct video link' | 'embedded video link';
  path: string;
  alt?: string;
};
export type ProjectMarkdownCell = {
  type: 'markdown';
  body: string;
};

export type ProjectContentCell = ProjectMediaCell | ProjectMarkdownCell;

export type ProjectContentRow = {
  cellAmount: 1 | 2 | 3 | 4;
  cells: Array<ProjectContentCell>;
};

export interface Project {
  id: string;
  order: number;
  name: string;
  category: string;
  mainImage: ProjectMainImage;
  dateCreated: number;
  description: string;
  isContentSpaced: boolean;
  content: Array<ProjectContentRow>;
}
