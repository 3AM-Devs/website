import { Project } from "../types";
import resoursesImage from "/public/images/projects/resources.png";

// Import the image directly

export const projects: Project[] = [
  {
    id: 1,
    title: "Dev Hub",
    description: "A repository full of resources",
    image: resoursesImage, // Use the imported image
    tags: ["Markdown"],
    link: "https://github.com/3AM-Devs/resources",
    github: "https://github.com/3AM-Devs/resources",
    stats: {
      stars: 1,
      forks: 0,
      issues: 0,
      watchers: 0,
    },
  },
];
