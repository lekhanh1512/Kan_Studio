import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Xin chào Kan Studio, tôi là ${formData.name}. SĐT: ${formData.phone}. Dịch vụ: ${formData.service}. ${formData.message}`;
    window.open(`https://zalo.me/0814399120?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 block">
            Liên Hệ
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Hãy Kết Nối Với <span className="text-gradient-gold italic">Chúng Tôi</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-foreground font-display font-semibold mb-1">Địa Chỉ</h4>
                <p className="text-muted-foreground font-body text-sm">
                  55/28 đường 42, phường Hiệp Bình,<br />
                  Thủ Đức, Thành Phố Hồ Chí Minh
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-foreground font-display font-semibold mb-1">Điện Thoại</h4>
                <a href="tel:0814399120" className="text-primary font-body text-sm hover:text-gold-light transition-colors">
                0814399120
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-foreground font-display font-semibold mb-1">Giờ Làm Việc</h4>
                <p className="text-muted-foreground font-body text-sm">
                  Thứ Hai - Thứ Bảy: 8:00 - 20:00<br />
                  Chủ Nhật: Theo lịch hẹn
                </p>
              </div>
            </div>

            {/* Map embed */}
            <div className="rounded-lg overflow-hidden border border-border h-[200px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5!2d106.72!3d10.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDUxJzAwLjAiTiAxMDbCsDQzJzEyLjAiRQ!5e0!3m2!1svi!2s!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Kan Studio Location"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-card border border-border rounded-lg p-8 space-y-6"
          >
            <div>
              <label className="text-sm font-body text-muted-foreground mb-2 block">Họ và Tên</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-secondary border border-border rounded-md text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="Nhập họ và tên..."
              />
            </div>
            <div>
              <label className="text-sm font-body text-muted-foreground mb-2 block">Số Điện Thoại</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-secondary border border-border rounded-md text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="Nhập số điện thoại..."
              />
            </div>
            <div>
              <label className="text-sm font-body text-muted-foreground mb-2 block">Dịch Vụ</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 bg-secondary border border-border rounded-md text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">Chọn dịch vụ...</option>
                <option value="Chụp Chân Dung">Chụp Chân Dung</option>
                <option value="Chụp Cưới">Chụp Cưới</option>
                <option value="Chụp Sản Phẩm">Chụp Sản Phẩm</option>
                <option value="Chụp Gia Đình">Chụp Gia Đình</option>
                <option value="Khác">Khác</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-body text-muted-foreground mb-2 block">Tin Nhắn</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-secondary border border-border rounded-md text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Mô tả yêu cầu của bạn..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-wide rounded-sm hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Gửi Yêu Cầu
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
