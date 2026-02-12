import { Camera, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";


const FooterSection = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
          <img src={logo} alt="" className="w-12 h-12" />
          <span className="font-display text-lg font-bold text-foreground">
              Kan <span className="text-gradient-gold italic">Studio</span>
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground font-body">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-primary" /> 0814399120
            </span>
            <span className="hidden sm:inline text-border">|</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-primary" /> Thủ Đức, TP.HCM
            </span>
          </div>

          <p className="text-xs text-muted-foreground font-body">
            © 2025 Kan Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
