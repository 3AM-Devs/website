import { ChevronRight, Code, Github, Users } from "lucide-react";
import React from "react";
import Button from "../ui/Button.tsx";
import Container from "../ui/Container.tsx";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center py-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 z-0" />

      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyNTI1MjUiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2Nmg2di02aC02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10 z-0" />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary mb-6 animate-fadeIn">
            <Github className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Open Source Community</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-slideIn">
            A Community of 
            <span className="text-primary"> Open Source Enthusiasts</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mb-8 animate-fadeIn delay-75">
            Powered by caffeine, guided by confusion, and somehow it compiles
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fadeIn delay-150">
            <Button size="lg" className="group">
              Get Started
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8 animate-fadeIn delay-200">
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="p-3 bg-primary/10 rounded-full mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Open Source Projects</h3>
              <p className="text-muted-foreground text-center">
                Collaborate on meaningful projects that impact education.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="p-3 bg-primary/10 rounded-full mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Join Meetups</h3>
                <p className="text-muted-foreground text-center">
                Join virtual and in-person community events and collaboration sessions.
                </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="p-3 bg-primary/10 rounded-full mb-4">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Learning Resources</h3>
              <p className="text-muted-foreground text-center">
                Access curated materials to boost your open source skills.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
