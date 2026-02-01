import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const BookCallSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground leading-relaxed mb-8 font-light italic">
              "If you've read this far, thanks for sticking around. Let's build together!"
            </p>
            <a
              href="https://cal.com/sirri-ayongwa/one-on-one"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white group px-8 py-6 text-lg"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Book A Call
              </Button>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BookCallSection;
