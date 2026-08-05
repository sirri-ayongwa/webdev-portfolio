import { Github, Linkedin, Twitter, Mail, Paperclip } from "lucide-react";
import { SiMedium, SiBehance } from "react-icons/si";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/sirri-ayongwa", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sirri-ayongwa/", label: "LinkedIn" },
    { icon: Twitter, href: "https://www.twitter.com/SirriCodes", label: "Twitter" },
    { icon: SiBehance, href: "https://behance.net/sirri", label: "Behance" },
    { icon: SiMedium, href: "https://medium.com/@sirri-ayongwa", label: "Medium" },
    { icon: Mail, href: "mailto:ayongwasirri@gmail.com", label: "Email" },
    { icon: Paperclip, href: "https://drive.google.com/file/d/1kMQatq_yLciu2N68B7X7MrxvSo_mury7/view?usp=drive_link", label: "View my resume" },
  ];

  return (
    <footer className="border-t border-white/10 py-8 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Icons */}
          <div className="flex items-center flex-wrap justify-center gap-2">
            {socialLinks.map((social) => (
              <Tooltip key={social.label}>
                <TooltipTrigger asChild>
                  <a
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="p-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>{social.label}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center">
            Sirri's portfolio. All rights reserved © 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
