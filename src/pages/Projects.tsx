import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import gatherlyPreview from "@/assets/gatherly.png";
import meowmartPreview from "@/assets/meowmart.png";
import tipCalcPreview from "@/assets/tip-calculator.png";
import recipeFinderPreview from "@/assets/recipe-finder.png";
import wdcPreview from "@/assets/world-disaster-center.png";
import siciliamiaPreview from "@/assets/siciliamia.png";

const Projects = () => {
  const personalProjects = [
    {
      title: "Gatherly",
      description:
        "An event platform for developers and techies to connect and network. Lookup events, hackathons, meetups, and workshops.",
      technologies: [
        { icon: SiTypescript, name: "TypeScript" },
        { icon: SiTailwindcss, name: "Tailwind CSS" },
      ],
      liveLink: "https://gatherly-bysirri.vercel.app/",
      githubLink: "https://github.com/sirri-ayongwa/Gatherly",
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
      liveLink: "https://meowmart.vercel.app/",
      githubLink: "https://github.com/sirri-ayongwa/Meowmart",
      image: meowmartPreview,
    },
    {
      title: "TagCard",
      description:
        "Share yourself. Simply. 🏷️ Create a digital profile card with your bio, likes, dislikes, and contact info—all shareable via QR code or a downloadable business card. Skip the awkward guessing and jump straight into conversations that actually matter.",
      technologies: [
        { icon: SiVite, name: "Vite" },
        { icon: SiTypescript, name: "TypeScript" },
        { icon: SiReact, name: "React" },
        { icon: SiTailwindcss, name: "Tailwind CSS" },
      ],
      liveLink: "https://tagcard.vercel.app/",
      githubLink: "https://github.com/sirri-ayongwa/tagcard",
      image: meowmartPreview, // Placeholder - will update when image is provided
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
      liveLink: "https://tip-calculator-eight-livid.vercel.app/",
      githubLink: "https://github.com/sirri-ayongwa/tip-calculator",
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
      liveLink: "https://react-recipe-finder-one.vercel.app/",
      githubLink: "https://github.com/sirri-ayongwa/react-recipe-finder",
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
      liveLink: "https://bluehouse.is/",
      image: siciliamiaPreview,
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-primary">
              My Projects
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of my work, from personal experiments to professional collaborations
            </p>
          </div>
        </ScrollReveal>

        {/* Personal Projects */}
        <section className="mb-24">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center">
              <span className="text-primary">Personal</span> Projects
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalProjects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 100}>
                <ProjectCard {...project} />
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Company Projects */}
        <section className="mb-24">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center">
              <span className="text-primary">Company</span> Projects
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* World Disaster Center - Special Card */}
            <ScrollReveal>
              <div className="group relative bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_30px_hsla(217,91%,60%,0.15)]">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={wdcPreview}
                    alt="World Disaster Center"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-4">
                    World Disaster Center
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Reconstructed the company's Membership and Michael Solution pages, ensuring browser compatibility, user-friendliness and responsiveness.
                  </p>
                  
                  {/* Two Links */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    <a
                      href="https://global-alert-michael.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Michael Solution
                    </a>
                    <a
                      href="https://worlddisastercenter.org/membership"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Membership
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {companyProjects[0].technologies.map((tech) => (
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
            </ScrollReveal>

            {/* Siciliamia */}
            <ScrollReveal delay={100}>
              <ProjectCard {...companyProjects[1]} />
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section>
          <ScrollReveal>
            <div className="text-center py-12 px-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-primary">
                Like What You See?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Let's collaborate and create something extraordinary together!
              </p>
              <a href="mailto:ayongwasirri@gmail.com">
                <Button className="bg-primary hover:bg-primary/90 text-white group">
                  Work With Me
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
};

export default Projects;
