export type SkillType = {
  title_first: string;
  title_second: string;
  items: {
    name: string;
    image: string;
  }[];
};

export type ProjectType = {
  id: number;
  name: string;
  title: string;
  thumbnail: string;
  description: string;
  features?: any;
  technologies: string[];
  live_url: string;
};
