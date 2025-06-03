import { Code2, Globe, PenTool, Users } from "lucide-react";
import React from "react";
import Section from "../ui/Section.tsx";

const About: React.FC = () => {
  return (
    <Section
      id="about"
      title="About 3AM-Devs"
      subtitle="Our mission is to learn,
            build, and give back to the developer community by creating
            accessible, impactful, and well-crafted software"
      className="bg-muted/30"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Our Vision</h3>
          <p className="text-muted-foreground">
            We envision a world where anyone, regardless of background or
            experience, can contribute to and benefit from open source. At
            3AM-Devs, we strive to build a thriving community of curious minds
            who grow by creating together — turning late-night ideas into tools
            that empower developers everywhere.
          </p>

          <h3 className="text-2xl font-semibold">Our Mission</h3>
          <p className="text-muted-foreground">
            At 3AM-Devs, we are a passionate group of undergraduate students
            united by a shared love for open source. Our mission is to learn,
            build, and give back to the developer community by creating
            accessible, impactful, and well-crafted software. We believe in
            collaboration over competition, late-night coding sessions, and the
            power of open knowledge to inspire change.
          </p>

          <div className="pt-4">
            <div className="flex items-center gap-2">
              <div className="h-1 w-12 bg-primary rounded-full"></div>
              <div className="h-1 w-4 bg-primary rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-md group">
            <div className="w-12 h-12 p-3 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
              <Code2 className="h-6 w-6 text-primary" />
            </div>
            <h4 className="text-lg font-medium mb-2">Open Source Education</h4>
            <p className="text-sm text-muted-foreground">
              Providing resources and workshops to help students understand and
              contribute to open source.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-md group">
            <div className="w-12 h-12 p-3 bg-primary/10 rounded-full mb-4 group-hover:bg-secondary/20 transition-colors">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h4 className="text-lg font-medium mb-2">Community Building</h4>
            <p className="text-sm text-muted-foreground">
              Creating spaces for students to connect, collaborate, and grow
              together.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-md group">
            <div className="w-12 h-12 p-3 bg-primary/10 rounded-full mb-4 group-hover:bg-accent/20 transition-colors">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <h4 className="text-lg font-medium mb-2">Global Connections</h4>
            <p className="text-sm text-muted-foreground">
              Linking campus communities worldwide to share knowledge and best
              practices.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-md group">
            <div className="h-12 w-12 p-3 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
              <PenTool className="h-6 w-6 text-primary" />
            </div>
            <h4 className="text-lg font-medium mb-2">Project Incubation</h4>
            <p className="text-sm text-muted-foreground">
              Supporting student-led open source projects from concept to
              release.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
