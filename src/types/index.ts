export interface TeamMember {
  id: number;
  name: string;
  username: string;
  role: string;
  bio: string;
  image: string;
  stats: {
    repositories: number;
    followers: number;
    following: number;
  };
  socials: {
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
  stats: {
    stars: number;
    forks: number;
    issues: number;
    watchers: number;
  };
}

export interface NavItem {
  title: string;
  href: string;
}
