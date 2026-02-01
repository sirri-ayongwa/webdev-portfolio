import { useState } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiFigma,
  SiWordpress,
  SiPython,
} from "react-icons/si";

const TechMarquee = () => {
  const [isPaused, setIsPaused] = useState(false);

  const techStack = [
    { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
    { icon: SiCss3, name: "CSS3", color: "#1572B6" },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
    { icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
    { icon: SiFigma, name: "Figma", color: "#F24E1E" },
    { icon: SiWordpress, name: "WordPress", color: "#21759B" },
    { icon: SiPython, name: "Python", color: "#3776AB" },
  ];

  // Double the items for seamless loop
  const marqueeItems = [...techStack, ...techStack];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto max-w-6xl mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3">
          Stacks I Use
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg">
          Technologies I work with to build products that solve real-world problems
        </p>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Marquee track */}
        <div
          className={`flex gap-8 sm:gap-12 ${
            isPaused ? "animate-pause" : "animate-marquee"
          }`}
          style={{
            width: "fit-content",
          }}
        >
          {marqueeItems.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex flex-col items-center justify-center gap-3 px-4 py-6 min-w-[100px] sm:min-w-[120px] group cursor-pointer transition-transform hover:scale-110"
            >
              <tech.icon
                className="w-12 h-12 sm:w-16 sm:h-16 transition-all duration-300 group-hover:drop-shadow-lg"
                style={{ color: tech.color }}
              />
              <span className="text-sm text-muted-foreground font-medium opacity-70 group-hover:opacity-100 transition-opacity">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .animate-pause {
          animation: marquee 30s linear infinite;
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TechMarquee;
