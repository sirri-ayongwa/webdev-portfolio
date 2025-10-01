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
  ];

  const scrollToContact = () => {
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
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
            <span className="hidden sm:inline">&lt;/&gt;</span>
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
            <button
              onClick={scrollToContact}
              className="relative py-2 text-foreground hover:text-primary transition-colors group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-effect border-t border-white/10">
          <div className="grid grid-cols-2 gap-4 p-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "p-4 text-center rounded-lg border border-white/10 hover:border-primary hover:bg-primary/10 transition-all",
                    isActive && "border-primary bg-primary/10 text-primary"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <button
              onClick={scrollToContact}
              className="p-4 text-center rounded-lg border border-white/10 hover:border-primary hover:bg-primary/10 transition-all col-span-2"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
