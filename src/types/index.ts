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

export interface NavItem {
  title: string;
  href: string;
}
