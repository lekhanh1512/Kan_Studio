import { motion } from "framer-motion";
import galleryPortrait from "@/assets/gallery-portrait.jpg";
import galleryWedding from "@/assets/gallery-wedding.jpg";
import galleryProduct from "@/assets/gallery-product.jpg";
import galleryFashion from "@/assets/gallery-fashion.jpg";
import galleryFamily from "@/assets/gallery-family.jpg";

const images = [
  { src: galleryWedding, alt: "Chụp cưới", label: "Cưới", className: "md:col-span-2 md:row-span-2" },
  { src: galleryPortrait, alt: "Chân dung", label: "Chân Dung", className: "" },
  { src: galleryProduct, alt: "Sản phẩm", label: "Sản Phẩm", className: "" },
  { src: galleryFashion, alt: "Thời trang", label: "Thời Trang", className: "md:col-span-2" },
  { src: galleryFamily, alt: "Gia đình", label: "Gia Đình", className: "" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Tác Phẩm <span className="text-gradient-gold italic">Nổi Bật</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative group overflow-hidden rounded-lg cursor-pointer ${img.className}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover min-h-[250px] md:min-h-[300px] group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-colors duration-500 flex items-center justify-center">
                <span className="text-foreground font-display text-xl font-semibold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
