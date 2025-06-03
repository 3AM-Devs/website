import { Calendar, Code, Users } from "lucide-react";
import React from "react";
import Container from "../ui/Container.tsx";

const Stats: React.FC = () => {
  return (
    <div className="py-16 bg-primary/5 border-y border-border">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-primary/10 rounded-full mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-2">5+</h3>
            <p className="text-muted-foreground">Community Members</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-primary/10 rounded-full mb-4">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-2">2+</h3>
            <p className="text-muted-foreground">Open Source Projects</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-primary/10 rounded-full mb-4">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-2">1+</h3>
            <p className="text-muted-foreground">Meetups</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Stats;
