import { Mail, MapPin, Send } from "lucide-react";
import React, { useEffect, useState } from "react";
import Button from "../ui/Button";
import Section from "../ui/Section";

const Contact: React.FC = () => {
  const [isDomain, setIsDomain] = useState<boolean>(true);

  useEffect(() => {
    const cutoffDate = new Date(2026, 5, 31);
    const now = new Date();

    if (now > cutoffDate) {
      setIsDomain(false);
    }
  }, []);

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Have questions or want to join our community? Reach out to us."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-24">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">Our Location</h3>
              <p className="text-muted-foreground">
                Virtual Community with members worldwide.
                <br />
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">Email Us</h3>
              <p className="text-muted-foreground">
                Support:{" "}
                {!isDomain ? "3amdevs@proton.me" : "contact@3amdevs.xyz"}
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <h3 className="text-lg font-medium mb-4">Connect With Us</h3>
            <p className="text-muted-foreground mb-4">
              Follow us on social media to stay updated with our latest events,
              projects, and community news.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://x.com/AmanDevelops"
                target="_blank"
                className="p-2 bg-card rounded-full hover:bg-primary/10 transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a
                href="https://github.com/3AM-Devs/"
                className="p-2 bg-card rounded-full hover:bg-primary/10 transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg border border-border p-6">
          <h3 className="text-xl font-medium mb-6">Send Us a Message</h3>
          <form
            className="space-y-4"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input
              type="hidden"
              name="access_key"
              value={import.meta.env.VITE_CONTACT_FORM_API_KEY}
            />
            <input
              type="hidden"
              name="subject"
              value="New Contact Form Submission from Web3Forms"
            />
            <input type="hidden" name="from_name" value="My Website" />
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 bg-muted text-foreground rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 bg-muted text-foreground rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Email Address"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 bg-muted text-foreground rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="How can we help you?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-muted text-foreground rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your message here..."
                name="message"
              ></textarea>
            </div>

            <div>
              <Button className="w-full group">
                Send Message
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
