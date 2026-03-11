import { motion } from "framer-motion";

const foods = [
  {
    title: "Butter Chicken",
    summary: "Born in the kitchens of Moti Mahal in the 1950s, this creamy tomato-based curry with tender tandoori chicken remains Delhi's most beloved export to the world.",
    image: "https://images.unsplash.com/photo-1742599361498-79824d24e355?auto=format&fit=crop&w=800&q=80",
    alt: "Delicious Indian butter chicken served with rice",
  },
  {
    title: "Chole Bhature",
    summary: "Spiced chickpea curry paired with deep-fried puffed bread — a hearty North Indian breakfast that fuels Delhi's mornings from roadside stalls to fine-dining tables.",
    image: "https://images.unsplash.com/photo-1666251214661-951c0df0d05f?auto=format&fit=crop&w=800&q=80",
    alt: "A plate of Indian food featuring chole bhature",
  },
  {
    title: "Kebabs of Old Delhi",
    summary: "From succulent seekh kebabs at Jama Masjid's lanes to the legendary Karim's galawati, Old Delhi's smoky grills have perfected the art of spiced, charred meat.",
    image: "https://images.unsplash.com/photo-1772730064970-a7b2735c93b9?auto=format&fit=crop&w=800&q=80",
    alt: "Chicken tikka masala with naan bread on a wooden board",
  },
  {
    title: "Paranthas of Paranthe Wali Gali",
    summary: "Tucked inside Chandni Chowk, this legendary lane serves stuffed flatbreads with fillings from spiced potato to rabri — a tradition dating back over a century.",
    image: "https://images.unsplash.com/photo-1655979284091-eea0e93405ee?auto=format&fit=crop&w=800&q=80",
    alt: "A plate of Indian paratha with accompaniments",
  },
  {
    title: "Biryani & Nihari",
    summary: "Slow-cooked overnight, Delhi's Mughlai biryani and nihari carry the aromatic legacy of royal kitchens — fragrant rice layered with spiced meat and saffron.",
    image: "https://images.unsplash.com/photo-1752673508949-f4aeeaef75f0?auto=format&fit=crop&w=800&q=80",
    alt: "Delicious rice dish served in a clay bowl — Indian biryani",
  },
  {
    title: "Jalebi & Street Sweets",
    summary: "Golden spirals of crispy, syrup-soaked jalebi from Old Delhi's iconic sweet shops are the perfect finale to a street-food trail through the capital's winding lanes.",
    image: "https://images.unsplash.com/photo-1760263215450-b13943da7e17?auto=format&fit=crop&w=800&q=80",
    alt: "Stacks of golden jalebi pastries at a market stall",
  },
];

const FoodCards = () => {
  return (
    <section id="cuisine" className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body font-medium text-sm tracking-[0.3em] uppercase text-accent mb-4">
            A Culinary Odyssey
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl tracking-[0.15em] uppercase text-foreground">
            Flavours of Delhi
          </h2>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {foods.map((food, i) => (
            <motion.div
              key={food.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden bg-card border border-border"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={food.image}
                  alt={food.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg tracking-[0.1em] uppercase text-foreground mb-3">
                  {food.title}
                </h3>
                <p className="font-body font-light text-sm text-muted-foreground leading-relaxed">
                  {food.summary}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodCards;
