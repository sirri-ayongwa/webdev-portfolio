import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/#contact", label: "Contact" },
  ];

  const scrollToContact = () => {
    // Navigate to home page first, then scroll to contact
    if (window.location.pathname !== "/") {
      window.location.href = "/#contact";
    } else {
      const contact = document.getElementById("contact");
      if (contact) {
        contact.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass-effect shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center space-x-2 text-xl sm:text-2xl font-bold hover:text-primary transition-colors"
          >
            <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end
                className={({ isActive }) =>
                  cn(
                    "relative py-2 text-foreground hover:text-primary transition-colors group",
                    isActive && "text-primary"
                  )
                }
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
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
                  onClick={scrollToContact}
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
