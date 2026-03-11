import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const attractions = [
  {
    title: "Red Fort",
    summary: "A UNESCO World Heritage Site and symbol of Mughal power, the Red Fort's imposing sandstone walls have witnessed the rise and fall of empires since 1648.",
    image: "https://images.unsplash.com/photo-1741671090624-deab68acf019?auto=format&fit=crop&w=1920&q=80",
    alt: "Ancient red sandstone architecture of Red Fort stands majestic in Delhi",
  },
  {
    title: "Qutub Minar",
    summary: "Soaring 73 metres into the Delhi sky, this 12th-century victory tower is a masterpiece of Indo-Islamic architecture and India's tallest brick minaret.",
    image: "https://images.unsplash.com/photo-1664532747590-8ab69543f61c?auto=format&fit=crop&w=1920&q=80",
    alt: "A tall tower with a pointed spire — Qutub Minar in Delhi",
  },
  {
    title: "Humayun's Tomb",
    summary: "The garden tomb that inspired the Taj Mahal, Humayun's resting place is a serene masterwork of Mughal symmetry set within lush Char Bagh gardens.",
    image: "https://images.unsplash.com/photo-1765025712780-1cdd8a684744?auto=format&fit=crop&w=1920&q=80",
    alt: "Humayun's Tomb, a Mughal mausoleum in Delhi, India",
  },
  {
    title: "India Gate",
    summary: "Standing sentinel at the heart of Rajpath, this 42-metre war memorial honours 70,000 Indian soldiers and is Delhi's most iconic landmark after sunset.",
    image: "https://images.unsplash.com/photo-1748637976870-4a7f145b3936?auto=format&fit=crop&w=1920&q=80",
    alt: "India Gate stands proudly under a beautiful sky in New Delhi",
  },
  {
    title: "Lotus Temple",
    summary: "A Bahá'í House of Worship shaped like a blooming lotus flower, this architectural marvel welcomes visitors of all faiths in meditative silence.",
    image: "https://images.unsplash.com/photo-1741686265166-d7cf167a233a?auto=format&fit=crop&w=1920&q=80",
    alt: "Lotus Temple against a clear blue sky in New Delhi",
  },
  {
    title: "Chandni Chowk",
    summary: "One of Asia's oldest and busiest markets, Chandni Chowk pulsates with the sights, sounds, and aromas of Old Delhi — a living chronicle of Mughal commerce.",
    image: "https://images.unsplash.com/photo-1760782065868-8940ff63f8e8?auto=format&fit=crop&w=1920&q=80",
    alt: "Busy street market with many people and stalls in Chandni Chowk, Delhi",
  },
];

const AttractionsSlider = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? attractions.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === attractions.length - 1 ? 0 : c + 1));

  const item = attractions[current];

  return (
    <section id="attractions" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body font-medium text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Iconic Landmarks
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl tracking-[0.15em] uppercase text-foreground">
            Attractions
          </h2>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl tracking-[0.15em] uppercase text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body font-light text-sm md:text-base text-foreground/80 max-w-2xl leading-relaxed">
                    {item.summary}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {attractions.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-8 h-[2px] transition-all duration-300 ${
                    i === current ? "bg-accent" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-12 h-12 flex items-center justify-center border border-border text-muted-foreground hover:text-accent hover:border-accent transition-all duration-300"
                aria-label="Previous attraction"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 flex items-center justify-center border border-border text-muted-foreground hover:text-accent hover:border-accent transition-all duration-300"
                aria-label="Next attraction"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttractionsSlider;
