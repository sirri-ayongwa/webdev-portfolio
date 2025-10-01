import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTypescript, SiTailwindcss } from "react-icons/si";
import gatherlyPreview from "@/assets/gatherly.png";
import meowmartPreview from "@/assets/meowmart.png";
import tipCalcPreview from "@/assets/tip-calculator.png";
import recipeFinderPreview from "@/assets/recipe-finder.png";
import wdcPreview from "@/assets/world-disaster-center.png";
import siciliamiaPreview from "@/assets/siciliamia.png";

const Projects = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const personalProjects = [
    {
      title: "Gatherly",
      description:
        "An event platform for developers and techies to connect and network. Lookup events, hackathons, meetups, and workshops.",
      technologies: [
        { icon: SiTypescript, name: "TypeScript" },
        { icon: SiTailwindcss, name: "Tailwind CSS" },
      ],
      link: "https://gatherly-ashen.vercel.app/",
      image: gatherlyPreview,
    },
    {
      title: "Meowmart",
      description:
        "An e-commerce platform for cat lovers. Shop premium cat products, from cat accessories to home decors.",
      technologies: [
        { icon: SiTypescript, name: "TypeScript" },
        { icon: SiTailwindcss, name: "Tailwind CSS" },
      ],
      link: "https://meowmart.vercel.app/",
      image: meowmartPreview,
    },
    {
      title: "Tip Calculator",
      description:
        "Split bills and calculate tips with just a few taps. Enter the bill, choose a tip percentage, and see the total per person instantly.",
      technologies: [
        { icon: SiHtml5, name: "HTML5" },
        { icon: SiCss3, name: "CSS3" },
        { icon: SiJavascript, name: "JavaScript" },
      ],
      link: "https://tip-calculator-eight-livid.vercel.app/",
      image: tipCalcPreview,
    },
    {
      title: "Recipe Finder",
      description:
        "Find the perfect recipes, save to favorites and revisit them anytime. Perfect for food lovers, home cooks, and anyone looking for cooking inspo.",
      technologies: [
        { icon: SiReact, name: "React" },
        { icon: SiCss3, name: "CSS3" },
      ],
      link: "https://react-recipe-finder-one.vercel.app/",
      image: recipeFinderPreview,
    },
  ];

  const companyProjects = [
    {
      title: "World Disaster Center",
      description:
        "Reconstructed the company's Membership and Michael Solution pages, ensuring browser compatibility, user-friendliness and responsiveness.",
      technologies: [
        { icon: SiReact, name: "React" },
        { icon: SiTypescript, name: "TypeScript" },
        { icon: SiTailwindcss, name: "Tailwind CSS" },
      ],
      link: "https://www.worlddisastercenter.org/",
      image: wdcPreview,
    },
    {
      title: "Siciliamia",
      description:
        "Redesigned their sister company's (Blue House) Booking & Privacy Policy pages.",
      technologies: [
        { icon: SiReact, name: "React" },
        { icon: SiTypescript, name: "TypeScript" },
        { icon: SiTailwindcss, name: "Tailwind CSS" },
      ],
      link: "https://bluehouse.is/",
      image: siciliamiaPreview,
    },
  ];


  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 text-primary">
            My Projects
          </h1>
          <p className="text-center text-muted-foreground text-lg mb-50 max-w-2xl mx-auto">
            A showcase of my work, from personal experiments to professional collaborations
          </p>
        </ScrollReveal>

        {/* Personal Projects */}
        <section className="mb-30 mt-20">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-primary">
              Personal Projects
            </h2>
          </ScrollReveal>
          {/* Mobile View - Vertical Layout */}
          <div className="sm:hidden space-y-6">
            {personalProjects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="glass-effect border-white/10 overflow-hidden card-glow transition-all duration-300 hover:scale-105">
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                      <ExternalLink className="w-5 h-5 text-primary flex-shrink-0" />
                    </div>
                    <p className="text-muted-foreground text-sm mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10 border border-primary/20"
                        >
                          <tech.icon className="w-4 h-4 text-primary" />
                          <span className="text-xs text-muted-foreground">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>

          {/* Desktop View - Stacked/Spread Layout */}
          <div
            className="hidden sm:block relative h-[500px] md:h-[600px] pt-48"
            onMouseEnter={() => setHoveredSection("personal")}
            onMouseLeave={() => setHoveredSection(null)}
          >
            {personalProjects.map((project, index) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute transition-all duration-700 ease-out cursor-pointer"
                style={{
                  left: hoveredSection === "personal"
                    ? `${15 + index * 22}%`
                    : `50%`,
                  top: hoveredSection === "personal"
                    ? "50%"
                    : `${40 + index * 20}px`,
                  transform: hoveredSection === "personal"
                    ? "translate(-50%, -50%) scale(0.9)"
                    : `translate(-50%, -50%) rotate(${index * 2}deg)`,
                  zIndex: hoveredCard === index ? 50 : personalProjects.length - index,
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card className={cn(
                  "w-[300px] sm:w-[380px] glass-effect border-white/10 overflow-hidden card-glow transition-all duration-300",
                  hoveredCard === index && "scale-105"
                )}>
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-primary">{project.title}</h3>
                      <ExternalLink className="w-5 h-5 text-primary flex-shrink-0" />
                    </div>
                    <p className="text-muted-foreground text-sm sm:text-base mb-6 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10 border border-primary/20"
                        >
                          <tech.icon className="w-4 h-4 text-primary" />
                          <span className="text-xs text-muted-foreground">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </section>

        {/* Company Projects */}
        <section className="mb-20">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold mt-40 text-center text-primary">
              Company Projects
            </h2>
          </ScrollReveal>
          
          {/* Mobile View - Vertical Layout */}
          <div className="sm:hidden space-y-6">
            {companyProjects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="glass-effect mt-20 border-white/10 overflow-hidden card-glow transition-all duration-300 hover:scale-105">
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                      <ExternalLink className="w-5 h-5 text-primary flex-shrink-0" />
                    </div>
                    <p className="text-muted-foreground text-sm mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10 border border-primary/20"
                        >
                          <tech.icon className="w-4 h-4 text-primary" />
                          <span className="text-xs text-muted-foreground">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>

          {/* Desktop View - Stacked/Spread Layout */}
          <div
            className="hidden sm:block relative h-[500px] md:h-[600px] pt-48"
            onMouseEnter={() => setHoveredSection("company")}
            onMouseLeave={() => setHoveredSection(null)}
          >
            {companyProjects.map((project, index) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute transition-all duration-700 ease-out cursor-pointer"
                style={{
                  left: hoveredSection === "company"
                    ? `${30 + index * 35}%`
                    : `50%`,
                  top: hoveredSection === "company"
                    ? "50%"
                    : `${40 + index * 20}px`,
                  transform: hoveredSection === "company"
                    ? "translate(-50%, -50%) scale(0.9)"
                    : `translate(-50%, -50%) rotate(${index * 2}deg)`,
                  zIndex: hoveredCard === index ? 50 : companyProjects.length - index,
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card className={cn(
                  "w-[300px] sm:w-[380px] glass-effect border-white/10 overflow-hidden card-glow transition-all duration-300",
                  hoveredCard === index && "scale-105"
                )}>
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-primary">{project.title}</h3>
                      <ExternalLink className="w-5 h-5 text-primary flex-shrink-0" />
                    </div>
                    <p className="text-muted-foreground text-sm sm:text-base mb-6 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10 border border-primary/20"
                        >
                          <tech.icon className="w-4 h-4 text-primary" />
                          <span className="text-xs text-muted-foreground">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact">
          <ScrollReveal>
            <Card className="glass-effect border-white/10 p-8 sm:p-12 text-center card-glow">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary">
                Like What You See?
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                Let's collaborate and create something extraordinary together!
              </p>
              <a href="mailto:ayongwasirri@gmail.com">
                <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all hover:scale-105">
                  Work With Me
                </button>
              </a>
            </Card>
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
};

export default Projects;
