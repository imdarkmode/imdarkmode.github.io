export interface IProject {
  header: string;
  description: string;
  youtubeUrl: string;
  githubUrl: string;
  websiteUrl: string;
  createdWith: Array<{ name: string, icon: string }>;
}