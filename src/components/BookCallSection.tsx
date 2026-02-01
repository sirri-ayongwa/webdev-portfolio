import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import MessageDialog from "@/components/MessageDialog";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

const BookCallSection = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "one-on-one" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground leading-relaxed mb-8 font-light italic">
              If you've read this far, thanks for sticking around. Let's build together!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white group px-8 py-6 text-lg"
                data-cal-namespace="one-on-one"
                data-cal-link="sirri-ayongwa/one-on-one"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              >
                <Calendar className="mr-2 w-5 h-5" />
                Book A Call
              </Button>
              <MessageDialog />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BookCallSection;
