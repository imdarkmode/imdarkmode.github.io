export interface IProject {
  header: string;
  description: string;
  youtubeUrl: string | undefined;
  githubUrl: string | undefined;
  websiteUrl: string | undefined;
  createdWith: Array<{ name: string, icon: string }>;
}