import { motion } from "framer-motion";

const facts = [
  {
    number: "01",
    title: "Seven Cities, One Capital",
    text: "Delhi has been destroyed and rebuilt at least seven times across millennia. Each layer — from the Tomars' Lal Kot to Lutyens' New Delhi — adds another chapter to the world's most layered capital.",
  },
  {
    number: "02",
    title: "The Iron Pillar That Defies Rust",
    text: "Standing in the Qutub Complex for over 1,600 years, this 7-metre iron pillar has never rusted — a metallurgical mystery that continues to baffle modern scientists.",
  },
  {
    number: "03",
    title: "Asia's Largest Spice Market",
    text: "Khari Baoli, near Chandni Chowk, is the continent's largest wholesale spice market. Its narrow lanes overflow with turmeric, chilli, and saffron, perfuming the air for blocks around.",
  },
  {
    number: "04",
    title: "A Metro That Moves Millions",
    text: "The Delhi Metro, inaugurated in 2002, transports over 6 million passengers daily across 250+ stations — one of the fastest-expanding rapid transit systems on Earth.",
  },
];

const DelhiFacts = () => {
  return (
    <section id="stories" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1666039085220-144fc4c8693d?auto=format&fit=crop&w=1920&q=80"
          alt="Qutub Minar tower illuminated at night in Delhi"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body font-medium text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Beyond the Monuments
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl tracking-[0.15em] uppercase text-foreground">
            Stories of Delhi
          </h2>
        </div>

        {/* Facts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {facts.map((fact, i) => (
            <motion.div
              key={fact.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex gap-6"
            >
              <span className="font-heading text-4xl lg:text-5xl text-accent/30 leading-none">
                {fact.number}
              </span>
              <div>
                <h3 className="font-heading text-lg lg:text-xl tracking-[0.1em] uppercase text-foreground mb-3">
                  {fact.title}
                </h3>
                <p className="font-body font-light text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {fact.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DelhiFacts;
