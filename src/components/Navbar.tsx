import { useState, useEffect } from "react";
import { Camera, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

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
        <a href="#" className="flex items-center gap-1">
          {/* <Camera className="w-6 h-6 text-primary" /> */}
          <div>
            <img src={logo} alt="" className="w-12 h-12" />
          </div>
          <div className="leading-tight">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-xl font-semibold text-white italic">
                Kan
              </span>
              <span className="font-display text-xl font-semibold text-[#E3A018] italic">
                Studio
              </span>
            </div>

            <p className="text-[13px] italic font-display text-white tracking-wide">
              Lưu giữ khoảnh khắc – Nâng tầm cảm xúc
            </p>
          </div>
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
            href="tel:0814399120"
            className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold font-body rounded-sm hover:bg-gold-light transition-colors"
          >
            0814399120
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
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
            href="tel:0814399120"
            className="block text-center px-5 py-3 bg-primary text-primary-foreground text-sm font-semibold font-body rounded-sm"
          >
            0814399120
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
