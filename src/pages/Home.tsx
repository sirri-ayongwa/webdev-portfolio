import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import AboutSection from "@/components/AboutSection";
import TechMarquee from "@/components/TechMarquee";
import BookCallSection from "@/components/BookCallSection";
import { useState } from "react";
import { cn } from "@/lib/utils";
import meowmartPreview from "@/assets/meowmart.png";
import uiuxPreview from "@/assets/uiux-designs.png";

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const featuredProjects = [
    {
      id: "webapps",
      title: "Web Apps",
      description: "Explore my collection of web applications",
      link: "/projects",
      isInternal: true,
      image: meowmartPreview,
    },
    {
      id: "uiux",
      title: "UI/UX Designs",
      description: "View my design portfolio on Behance",
      link: "https://behance.net/sirri",
      isInternal: false,
      image: uiuxPreview,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="container mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="text-primary">Sirri Ayongwa</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
              Innovative front-end developer specializing in crafting dynamic and user-friendly web
              experiences. Passionate about creating engaging and responsive websites that deliver
              exceptional results.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Tech Stack Marquee */}
      <TechMarquee />

      {/* Featured Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
              Featured Projects
            </h2>
          </ScrollReveal>

          <div className="max-w-6xl mx-auto">
            <div
              className="relative h-[400px] sm:h-[500px] flex items-center justify-center"
              onMouseEnter={() => setHoveredCard("section")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Mobile: vertical stacking */}
              {featuredProjects.map((project, index) => (
                <div
                  key={`mobile-${project.id}`}
                  className={cn(
                    "sm:hidden absolute transition-all duration-700 ease-out",
                    hoveredCard === "section" || hoveredCard === project.id
                      ? index === 0
                        ? "top-[20%] left-1/2 -translate-x-1/2"
                        : "top-[60%] left-1/2 -translate-x-1/2"
                      : index === 0
                      ? "top-[35%] left-1/2 -translate-x-1/2 rotate-[-3deg]"
                      : "top-[40%] left-1/2 -translate-x-1/2 rotate-[3deg]",
                    hoveredCard === project.id && "z-30 scale-105"
                  )}
                >
                  {project.isInternal ? (
                    <Link to={project.link}>
                      <div
                        className="w-[280px] glass-effect border-white/10 overflow-hidden card-glow cursor-pointer rounded-xl"
                        onMouseEnter={() => setHoveredCard(project.id)}
                        onMouseLeave={() => setHoveredCard("section")}
                      >
                        <div className="aspect-video w-full overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-xl font-bold text-primary">
                              {project.title}
                            </h3>
                            <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
                          </div>
                          <p className="text-muted-foreground text-sm">{project.description}</p>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <div
                        className="w-[280px] glass-effect border-white/10 overflow-hidden card-glow cursor-pointer rounded-xl"
                        onMouseEnter={() => setHoveredCard(project.id)}
                        onMouseLeave={() => setHoveredCard("section")}
                      >
                        <div className="aspect-video w-full overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-xl font-bold text-primary">
                              {project.title}
                            </h3>
                            <ExternalLink className="w-5 h-5 text-primary flex-shrink-0" />
                          </div>
                          <p className="text-muted-foreground text-sm">{project.description}</p>
                        </div>
                      </div>
                    </a>
                  )}
                </div>
              ))}

              {/* Desktop: horizontal spread */}
              {featuredProjects.map((project, index) => {
                const isHovered = hoveredCard === "section" || hoveredCard === project.id;
                return (
                  <div
                    key={`desktop-${project.id}`}
                    className={cn(
                      "hidden sm:block absolute transition-all duration-700 ease-out",
                      hoveredCard === project.id && "z-30 scale-110",
                      !isHovered && index === 0 && "left-1/4 top-1/2 -translate-y-1/2 rotate-[-5deg] z-10",
                      !isHovered && index === 1 && "right-1/4 top-1/2 -translate-y-1/2 rotate-[5deg] z-20",
                      isHovered && "top-1/2 -translate-y-1/2 rotate-0"
                    )}
                    style={isHovered ? { left: `${25 + index * 40}%` } : undefined}
                  >
                    {project.isInternal ? (
                      <Link to={project.link}>
                        <div
                          className="w-[280px] sm:w-[340px] glass-effect border-white/10 overflow-hidden card-glow cursor-pointer rounded-xl"
                          onMouseEnter={() => setHoveredCard(project.id)}
                          onMouseLeave={() => setHoveredCard(null)}
                        >
                          <div className="aspect-video w-full overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-6 sm:p-8">
                            <div className="flex items-start justify-between mb-4">
                              <h3 className="text-xl sm:text-2xl font-bold text-primary">
                                {project.title}
                              </h3>
                              <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
                            </div>
                            <p className="text-muted-foreground text-sm sm:text-base">{project.description}</p>
                          </div>
                        </div>
                      </Link>
                    ) : (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <div
                          className="w-[280px] sm:w-[340px] glass-effect border-white/10 overflow-hidden card-glow cursor-pointer rounded-xl"
                          onMouseEnter={() => setHoveredCard(project.id)}
                          onMouseLeave={() => setHoveredCard(null)}
                        >
                          <div className="aspect-video w-full overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-6 sm:p-8">
                            <div className="flex items-start justify-between mb-4">
                              <h3 className="text-xl sm:text-2xl font-bold text-primary">
                                {project.title}
                              </h3>
                              <ExternalLink className="w-5 h-5 text-primary flex-shrink-0" />
                            </div>
                            <p className="text-muted-foreground text-sm sm:text-base">{project.description}</p>
                          </div>
                        </div>
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Book A Call Section */}
      <BookCallSection />
    </div>
  );
};

export default Home;
