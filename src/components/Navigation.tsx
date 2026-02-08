import { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";
import useBackgroundMusic from "@/hooks/useBackgroundMusic";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isPlaying, toggle: toggleMusic } = useBackgroundMusic();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
  ];

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const section = document.getElementById(location.state.scrollTo);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <div
        className={cn(
          "flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-full border transition-all duration-300",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-white/10 shadow-lg shadow-black/20"
            : "bg-background/50 backdrop-blur-md border-white/5"
        )}
      >
        {/* Nav Links */}
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end
            className={({ isActive }) =>
              cn(
                "px-3 sm:px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              )
            }
          >
            {link.label}
          </NavLink>
        ))}
        <button
          onClick={() => scrollToSection("contact")}
          className="px-3 sm:px-4 py-1.5 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all duration-200"
        >
          Contact
        </button>

        {/* Separator */}
        <div className="w-px h-5 bg-white/10 mx-1" />

        {/* Volume toggle */}
        <button
          onClick={toggleMusic}
          className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all duration-200"
          aria-label={isPlaying ? "Mute background music" : "Play background music"}
        >
          {isPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all duration-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-64 bg-background/95 backdrop-blur-md border-r border-white/10 z-50 md:hidden animate-slide-in-left">
            <div className="flex flex-col h-full">
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-foreground hover:text-primary transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col space-y-6 px-8 py-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "text-lg transition-colors hover:text-primary",
                        isActive && "text-primary font-semibold"
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-lg text-left transition-colors hover:text-primary"
                >
                  Contact
                </button>
              </nav>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navigation;
