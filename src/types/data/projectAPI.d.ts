export type ProjectGetRequest =
  | {
      summary?: boolean;
    }
  | undefined;

export type ProjectGetResponse = Array<Project>;
