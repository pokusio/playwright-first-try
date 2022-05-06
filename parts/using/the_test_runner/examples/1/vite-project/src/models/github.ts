  export interface ActivityContent {
  profileName: string;
  profileUrl: string;
  time: string;
  repo: Repository
  }

  interface Repository {
  name: string;
  url: string;
  description: string;
  language: string;
  stars: number;
  updatedDate: string;
  }
