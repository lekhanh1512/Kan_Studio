import { motion } from "framer-motion";
import { Camera, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-studio.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Kan Studio - Professional Photography"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 overlay-dark" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <img src={logo} alt="" className="w-14 h-14" />
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">
            Photography Studio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-[1.1]"
        >
          <span className="text-foreground">Kan</span>{" "}
          <span className="text-gradient-gold italic">Studio</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
        >
          Nơi mỗi khoảnh khắc được lưu giữ trở thành tác phẩm nghệ thuật. Chúng
          tôi biến câu chuyện của bạn thành những bức ảnh đẹp nhất.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#gallery"
            className="px-8 py-4 bg-primary text-primary-foreground font-body font-semibold tracking-wide text-sm uppercase rounded-sm hover:bg-gold-light transition-colors duration-300"
          >
            Xem Portfolio
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-gold text-foreground font-body font-semibold tracking-wide text-sm uppercase rounded-sm hover:bg-surface transition-colors duration-300"
          >
            Liên Hệ Ngay
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown className="w-6 h-6 animate-bounce" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
