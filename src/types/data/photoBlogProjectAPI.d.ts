import type {
  PhotoBlogProject,
  PhotoBlogProjectMainImage,
  PhotoBlogProjectGallerySection,
  PhotoBlogProjectDateInfo,
  PhotoBlogProjectNameInfo,
} from './photoBlogProject';

export type PhotoBlogProjectGetRequest =
  | {
      summary?: boolean;
    }
  | undefined;

export type PhotoBlogProjectGetResponse = Array<PhotoBlogProject>;

export type PhotoBlogProjectInputDto = {
  dateInfo: PhotoBlogProjectDateInfo;
  nameInfo: PhotoBlogProjectNameInfo;
  description: string;
  mainImage: PhotoBlogProjectMainImage;
  gallerySections: Array<PhotoBlogProjectGallerySection>;
};
