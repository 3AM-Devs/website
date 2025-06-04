import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import React from "react";

import Container from "../ui/Container.tsx";
import NewsletterForm from "./NewsletterForm";

const Footer: React.FC = () => {
  return (
    <footer className="bg-card text-card-foreground border-t border-border py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Github className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">3AM Devs</span>
            </div>
            <p className="text-sm text-muted-foreground">
              A Community of Open Source Enthusiasts powered by caffeine, guided
              by confusion, and somehow it compiles
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/team"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/3AM-Devs/resources"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Tools
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Getting Started
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Meetups
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/3AM-Devs"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Github"
                target="_blank"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/AmanDevelops"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
                target="_blank"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/aman-2k5"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
                target="_blank"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:3amdevs@proton.me"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                Subscribe to our newsletter for updates
              </p>
              <div className="mt-2">
                {/* Newsletter form integrated with Mailchimp */}
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} 3AM Devs. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a
              href="/privacy-policy"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/tos"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="/code-of-conduct"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Code of Conduct
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
