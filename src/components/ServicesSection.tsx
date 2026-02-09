import { motion } from "framer-motion";
import { Camera, Heart, Package, Users } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Chụp Chân Dung",
    description: "Chụp ảnh chân dung chuyên nghiệp, thể hiện cá tính riêng của bạn với ánh sáng studio đẹp nhất.",
  },
  {
    icon: Heart,
    title: "Chụp Cưới",
    description: "Lưu giữ khoảnh khắc thiêng liêng nhất đời bạn với phong cách chụp tự nhiên và lãng mạn.",
  },
  {
    icon: Package,
    title: "Chụp Sản Phẩm",
    description: "Nâng tầm thương hiệu với hình ảnh sản phẩm chất lượng cao, chuyên nghiệp.",
  },
  {
    icon: Users,
    title: "Chụp Gia Đình",
    description: "Ghi lại những khoảnh khắc hạnh phúc bên gia đình với bối cảnh tự nhiên hoặc studio.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 block">
            Dịch Vụ
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Chúng Tôi Làm <span className="text-gradient-gold italic">Gì</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-gradient-card border border-border rounded-lg p-8 hover:border-gold hover:shadow-gold transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
