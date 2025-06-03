import React from 'react';
import { ExternalLink, Github, Star, GitFork, AlertCircle, Eye } from 'lucide-react';
import Section from '../ui/Section';
import { projects } from '../../data/projects';

const ProjectsSection: React.FC = () => {
  return (
    <Section
      id="projects"
      title="Our Projects"
      subtitle="Explore the open source projects we're building and contributing to."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-card rounded-xl border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group overflow-hidden"
          >
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-muted-foreground mb-6">
                {project.description}
              </p>
              
              <div className="grid grid-cols-4 gap-4 mb-6 p-3 bg-muted rounded-lg">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Star className="h-4 w-4 text-primary mr-1" />
                    <span className="text-sm font-medium">{project.stats.stars}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Stars</p>
                </div>
                <div className="text-center border-x border-border">
                  <div className="flex items-center justify-center mb-1">
                    <GitFork className="h-4 w-4 text-secondary mr-1" />
                    <span className="text-sm font-medium">{project.stats.forks}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Forks</p>
                </div>
                <div className="text-center border-r border-border">
                  <div className="flex items-center justify-center mb-1">
                    <AlertCircle className="h-4 w-4 text-accent mr-1" />
                    <span className="text-sm font-medium">{project.stats.issues}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Issues</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Eye className="h-4 w-4 text-primary mr-1" />
                    <span className="text-sm font-medium">{project.stats.watchers}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Watchers</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  View Project
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
                
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="mr-1 h-4 w-4" />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;