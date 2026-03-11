import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1762526217288-a783242270dc?auto=format&fit=crop&w=1920&q=80"
          alt="India Gate illuminated with colorful lights at night in New Delhi"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-body font-medium text-sm tracking-[0.3em] uppercase text-accent mb-6"
        >
          Welcome to the Heart of India
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl tracking-[0.15em] uppercase text-foreground mb-6"
        >
          Dilli 360
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-secondary text-xl md:text-2xl text-foreground/80 mb-4 italic"
        >
          The Living Chronoscope
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-body font-light text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Seven cities, a thousand years of legacy, and a living pulse that never fades.
          From Mughal grandeur to the vibrant chaos of Old Delhi's lanes — discover a capital
          that weaves history, faith, art, and flavour into every breath.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10"
        >
          <a
            href="#attractions"
            className="inline-block font-body font-medium text-sm tracking-[0.15em] uppercase px-10 py-4 border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            Begin Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;
