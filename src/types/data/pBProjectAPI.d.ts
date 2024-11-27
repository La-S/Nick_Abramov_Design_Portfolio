import type {
  PBProject,
  PBProjectMainImage,
  PBProjectGallerySection,
  PBProjectDateInfo,
  PBProjectNameInfo,
} from './pBProject';

export type PBProjectGetRequest =
  | {
      summary?: boolean;
    }
  | undefined;

export type PBProjectGetResponse = Array<PBProject>;

export type PBProjectInputDto = {
  dateInfo: PBProjectDateInfo;
  nameInfo: PBProjectNameInfo;
  description: string;
  mainImage: PBProjectMainImage;
  gallerySections: Array<PBProjectGallerySection>;
};
