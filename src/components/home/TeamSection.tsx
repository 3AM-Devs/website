import {
  BookOpen,
  GitFork,
  Github,
  Linkedin,
  Twitter,
  Users,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  fetchAndAddTeamMembers,
  teamMembers as initialTeamMembers,
} from "../../data/team.ts";

import Section from "../ui/Section";

const TeamSection: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);

  useEffect(() => {
    const loadTeamMembers = async () => {
      await fetchAndAddTeamMembers();
      // Update state with the latest team members
      setTeamMembers([...initialTeamMembers]);
    };

    loadTeamMembers();
  }, []);

  return (
    <Section
      id="team"
      title="Meet Our Team"
      subtitle="Passionate individuals dedicated to promoting open source in academic environments."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-card rounded-xl border-2 border-border p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
          >
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-300 shadow-lg shadow-primary/20">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-card px-4 py-1 rounded-full border border-primary/30 shadow-md">
                  <p className="text-sm font-mono text-primary">
                    @{member.username}
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-sm text-primary mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                {member.bio}
              </p>

              <div className="grid grid-cols-3 gap-4 w-full mb-6 p-3 bg-muted rounded-lg">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <BookOpen className="h-4 w-4 text-primary mr-1" />
                    <span className="text-sm font-medium">
                      {member.stats.repositories}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">Repos</p>
                </div>
                <div className="text-center border-x border-border">
                  <div className="flex items-center justify-center mb-1">
                    <Users className="h-4 w-4 text-secondary mr-1" />
                    <span className="text-sm font-medium">
                      {member.stats.followers}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">Followers</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <GitFork className="h-4 w-4 text-accent mr-1" />
                    <span className="text-sm font-medium">
                      {member.stats.following}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">Following</p>
                </div>
              </div>

              <div className="flex space-x-4">
                {member.socials.github && (
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${member.name}'s Github`}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
                {member.socials.twitter && (
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                )}
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
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

export default TeamSection;
