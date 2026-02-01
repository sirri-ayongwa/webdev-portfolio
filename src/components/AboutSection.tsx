import ScrollReveal from "@/components/ScrollReveal";
import sirriImage from "@/assets/sirri-formal.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section with Image */}
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-primary">
                About Me
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
                Hi there, I'm Sirri. A front-end web developer with over 3 years of
                experience building responsive and user-focused websites. I've worked remotely with
                international teams, built personal projects to grow my skills, and consistently aim
                to improve my skills and deliver clean, functional designs that enhance user experience.
              </p>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                I love connecting with new people, collaborating on exciting ideas, and talking
                about all things tech, design, and creativity.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={sirriImage}
                alt="Sirri Ayongwa"
                className="rounded-2xl shadow-2xl max-w-sm w-full card-glow"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
