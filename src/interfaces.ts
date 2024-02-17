export interface IProject {
  header: string;
  description: string;
  youtubeUrl: string | null;
  githubUrl: string | null;
  websiteUrl: string | null;
  createdWith: Array<{ name: string, icon: string }>;
}