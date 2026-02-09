import { useState, useEffect } from "react";
import { Camera, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Dịch Vụ", href: "#services" },
  { label: "Portfolio", href: "#gallery" },
  { label: "Giới Thiệu", href: "#about" },
  { label: "Liên Hệ", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Camera className="w-6 h-6 text-primary" />
          <span className="font-display text-xl font-bold text-foreground">
            Kan <span className="text-gradient-gold italic">Studio</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body tracking-wide text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:0123456789"
            className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold font-body rounded-sm hover:bg-gold-light transition-colors"
          >
            0123456789
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 pb-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-base font-body text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:0123456789"
            className="block text-center px-5 py-3 bg-primary text-primary-foreground text-sm font-semibold font-body rounded-sm"
          >
           0123456789
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
