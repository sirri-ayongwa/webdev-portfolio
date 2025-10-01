import { Github, Linkedin, Twitter } from "lucide-react";
import { SiMedium, SiBehance } from "react-icons/si";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/sirri-ayongwa", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sirri-ayongwa/", label: "LinkedIn" },
    { icon: Twitter, href: "https://www.twitter.com/SirriCodes", label: "Twitter" },
  ];

  return (
    <footer className="border-t border-white/10 py-8 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Icons */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
            <a
              href="https://behance.net/sirri"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all"
              aria-label="Behance"
            >
              <SiBehance className="w-5 h-5" />
            </a>
            <a
              href="https://medium.com/@sirri-ayongwa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all"
              aria-label="Medium"
            >
              <SiMedium className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center">
            Sirri's portfolio. All rights reserved © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
