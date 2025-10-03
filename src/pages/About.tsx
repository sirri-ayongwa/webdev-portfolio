import { Card } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import sirriImage from "@/assets/sirri-formal.png";
import catImage from "@/assets/sirri-cat.png";
import cmFlag from "@/assets/cm.png";
import bdFlag from "@/assets/bd.png";
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

const About = () => {
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

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section with Image */}
        <section className="mb-20">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-primary">
                  About Me
                </h1>
               <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
                  Front-end Web Developer with over 3 years of
                  experience building responsive and user-focused websites. I've worked remotely with
                  international teams, built personal projects to grow my skills, and consistently aim
                  to improve my skills and deliver clean, functional designs that enhance user experience.
                </p>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  I love connecting with new people, collaborating on exciting ideas, and talking
                  about all things tech, design, and creativity.
                </p>
              </div>
              <div className="flex flex-col items-center gap-6">
                <img
                  src={sirriImage}
                  alt="Sirri Ayongwa"
                  className="rounded-2xl shadow-2xl max-w-sm w-full card-glow"
                />
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <img src={cmFlag} alt="Cameroon" className="h-5 w-auto" />
                    <p className="text-muted-foreground text-sm">Cameroon</p>
                  </div>
                  <div className="text-2xl text-muted-foreground">•</div>
                  <div className="flex items-center gap-2">
                    <img src={bdFlag} alt="Bangladesh" className="h-5 w-auto" />
                    <p className="text-muted-foreground text-sm">Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>


        {/* Tech Stack Section */}
        <section className="mb-20">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-primary">
              Tech Stack I Work With
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <Card className="glass-effect border-white/10 p-8 sm:p-12">
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8">
                {techStack.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center justify-center group cursor-pointer transition-transform hover:scale-110"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <tech.icon
                      className="w-12 h-12 sm:w-16 sm:h-16 mb-2 transition-colors"
                      style={{ color: tech.color }}
                    />
                    <p className="text-xs sm:text-sm text-muted-foreground text-center opacity-0 group-hover:opacity-100 transition-opacity">
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </ScrollReveal>
        </section>

        {/* Cat Lover Section */}
        <section className="mb-20">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary">
                  Beyond the Code
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4">
                  When I'm not coding, you'll find me spending time with my feline friends. I'm a
                  proud cat lover and they're my favorite debugging partners!
                </p>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  There's something about their calm presence that helps me think through complex
                  problems. Plus, they're excellent at reminding me to take breaks! 🐱
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src={catImage}
                  alt="Sirri with cat"
                  className="rounded-2xl shadow-2xl max-w-md w-full card-glow"
                />
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Contact CTA Section */}
        <section id="contact">
          <ScrollReveal>
            <Card className="glass-effect border-white/10 p-8 sm:p-12 text-center card-glow">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary">
                Let's Work Together
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                I'm always excited to collaborate on new projects and bring creative ideas to life.
                Let's connect and build something amazing!
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

export default About;
