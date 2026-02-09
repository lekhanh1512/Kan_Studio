import { motion } from "framer-motion";
import { Award, Clock, Star } from "lucide-react";

const stats = [
  { icon: Award, value: "500+", label: "Dự Án Hoàn Thành" },
  { icon: Clock, value: "5+", label: "Năm Kinh Nghiệm" },
  { icon: Star, value: "100%", label: "Khách Hàng Hài Lòng" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 block">
              Về Chúng Tôi
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Đam Mê <span className="text-gradient-gold italic">Nhiếp Ảnh</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Kan Studio được thành lập với niềm đam mê nhiếp ảnh và mong muốn mang đến cho khách hàng 
              những bức ảnh đẹp nhất, chân thực nhất. Với đội ngũ nhiếp ảnh gia giàu kinh nghiệm và 
              trang thiết bị hiện đại, chúng tôi cam kết mang đến cho bạn trải nghiệm chụp ảnh tuyệt vời.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-10">
              Mỗi bức ảnh không chỉ là một hình ảnh — đó là câu chuyện, cảm xúc và kỷ niệm 
              mà bạn muốn lưu giữ mãi mãi.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-display font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground font-body mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-lg overflow-hidden border-gold border shadow-gold">
              <img
                src="/placeholder.svg"
                alt="Kan Studio"
                className="w-full h-full object-cover hidden"
              />
              <div className="w-full h-full bg-gradient-card flex items-center justify-center">
                <div className="text-center p-10">
                  <div className="text-6xl md:text-8xl font-display font-bold text-gradient-gold italic mb-4">K</div>
                  <div className="text-lg font-display text-foreground">Kan Studio</div>
                  <div className="text-sm text-muted-foreground font-body mt-2">Est. 2020</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
