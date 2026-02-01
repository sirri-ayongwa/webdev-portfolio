import { ExternalLink, Github } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface Technology {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: Technology[];
  image: string;
  liveLink?: string;
  githubLink?: string;
  secondaryLink?: { label: string; url: string };
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  image,
  liveLink,
  githubLink,
  secondaryLink,
  className,
}: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "group relative bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_30px_hsla(217,91%,60%,0.15)]",
        className
      )}
    >
      {/* Image */}
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title and Icons */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-2 flex-shrink-0">
            {githubLink && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>View on GitHub</p>
                </TooltipContent>
              </Tooltip>
            )}
            {liveLink && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>View live site</p>
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Secondary Link for WDC */}
        {secondaryLink && (
          <div className="flex gap-3 mb-4">
            <a
              href={secondaryLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              {secondaryLink.label} →
            </a>
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs text-muted-foreground"
            >
              <tech.icon className="w-3.5 h-3.5 text-primary" />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
