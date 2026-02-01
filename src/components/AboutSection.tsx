import ScrollReveal from "@/components/ScrollReveal";
import sirriImage from "@/assets/sirri-formal.png";
import catImage from "@/assets/sirri-cat-new.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section with Image */}
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-primary">
                About Me
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
                I'm a Cameroonian front-end web developer with over 3 years of
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

        {/* Cat Lover Section */}
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <img
                src={catImage}
                alt="Sirri with cat"
                className="rounded-2xl shadow-2xl max-w-md w-full card-glow"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-primary">
                Beyond the Code
              </h3>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4">
                When I'm not coding, you'll find me spending time with my feline friends. I'm a
                proud cat lover and they're my favorite debugging partners!
              </p>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                There's something about their calm presence that helps me think through complex
                problems. Plus, they're excellent at reminding me to take breaks! 🐱
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
