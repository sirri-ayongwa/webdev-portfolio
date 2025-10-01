import { useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const ScrollReveal = ({ children, className, delay = 0 }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-fade-in-up");
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div ref={ref} className={cn("opacity-0", className)}>
      {children}
    </div>
  );
};

export default ScrollReveal;
