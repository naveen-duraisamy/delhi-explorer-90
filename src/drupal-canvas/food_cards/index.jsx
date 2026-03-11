export default function FoodCards({
  sectionId = 'cuisine',
  sectionTagline = 'A Culinary Odyssey',
  sectionHeading = 'Flavours of Delhi',
  headingFontFamily = "'Cinzel', serif",
  bodyFontFamily = "'Lato', sans-serif",
  taglineColor = 'hsl(40, 83%, 52%)',
  headingColor = 'hsl(46, 18%, 80%)',
  descriptionColor = 'hsl(46, 10%, 55%)',
  backgroundColor = 'hsl(0, 0%, 12%)',
  cardBackgroundColor = 'hsl(0, 0%, 8%)',
  cardBorderColor = 'hsl(0, 0%, 18%)',
  food1Title = 'Butter Chicken',
  food1Summary = "Born in the kitchens of Moti Mahal in the 1950s, this creamy tomato-based curry with tender tandoori chicken remains Delhi's most beloved export to the world.",
  food1Image = 'https://images.unsplash.com/photo-1742599361498-79824d24e355?auto=format&fit=crop&w=800&q=80',
  food1ImageAlt = 'Delicious Indian butter chicken served with rice',
  food2Title = 'Chole Bhature',
  food2Summary = "Spiced chickpea curry paired with deep-fried puffed bread — a hearty North Indian breakfast that fuels Delhi's mornings from roadside stalls to fine-dining tables.",
  food2Image = 'https://images.unsplash.com/photo-1666251214661-951c0df0d05f?auto=format&fit=crop&w=800&q=80',
  food2ImageAlt = 'A plate of Indian food featuring chole bhature',
  food3Title = 'Kebabs of Old Delhi',
  food3Summary = "From succulent seekh kebabs at Jama Masjid's lanes to the legendary Karim's galawati, Old Delhi's smoky grills have perfected the art of spiced, charred meat.",
  food3Image = 'https://images.unsplash.com/photo-1772730064970-a7b2735c93b9?auto=format&fit=crop&w=800&q=80',
  food3ImageAlt = 'Chicken tikka masala with naan bread on a wooden board',
  food4Title = 'Paranthas of Paranthe Wali Gali',
  food4Summary = "Tucked inside Chandni Chowk, this legendary lane serves stuffed flatbreads with fillings from spiced potato to rabri — a tradition dating back over a century.",
  food4Image = 'https://images.unsplash.com/photo-1655979284091-eea0e93405ee?auto=format&fit=crop&w=800&q=80',
  food4ImageAlt = 'A plate of Indian paratha with accompaniments',
  food5Title = 'Biryani & Nihari',
  food5Summary = "Slow-cooked overnight, Delhi's Mughlai biryani and nihari carry the aromatic legacy of royal kitchens — fragrant rice layered with spiced meat and saffron.",
  food5Image = 'https://images.unsplash.com/photo-1752673508949-f4aeeaef75f0?auto=format&fit=crop&w=800&q=80',
  food5ImageAlt = 'Delicious rice dish served in a clay bowl — Indian biryani',
  food6Title = 'Jalebi & Street Sweets',
  food6Summary = "Golden spirals of crispy, syrup-soaked jalebi from Old Delhi's iconic sweet shops are the perfect finale to a street-food trail through the capital's winding lanes.",
  food6Image = 'https://images.unsplash.com/photo-1760263215450-b13943da7e17?auto=format&fit=crop&w=800&q=80',
  food6ImageAlt = 'Stacks of golden jalebi pastries at a market stall',
}) {
  const getImgSrc = (img) => typeof img === 'string' ? img : img?.src || '';
  const getImgAlt = (img, fallback) => typeof img === 'string' ? fallback : img?.alt || fallback;

  const foods = [
    { title: food1Title, summary: food1Summary, image: food1Image, alt: food1ImageAlt },
    { title: food2Title, summary: food2Summary, image: food2Image, alt: food2ImageAlt },
    { title: food3Title, summary: food3Summary, image: food3Image, alt: food3ImageAlt },
    { title: food4Title, summary: food4Summary, image: food4Image, alt: food4ImageAlt },
    { title: food5Title, summary: food5Summary, image: food5Image, alt: food5ImageAlt },
    { title: food6Title, summary: food6Summary, image: food6Image, alt: food6ImageAlt },
  ].filter(f => f.title);

  return (
    <div id={sectionId} className="dc-food-cards" style={{ padding: '96px 0', backgroundColor }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ fontFamily: bodyFontFamily, fontWeight: 500, fontSize: '0.875rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: taglineColor, marginBottom: '16px' }}>
            {sectionTagline}
          </p>
          <h2 style={{ fontFamily: headingFontFamily, fontSize: '2.5rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: headingColor, margin: 0 }}>
            {sectionHeading}
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '32px' }}>
          {foods.map((food, i) => (
            <div key={i} style={{ backgroundColor: cardBackgroundColor, border: `1px solid ${cardBorderColor}`, overflow: 'hidden' }}>
              <div style={{ aspectRatio: '4 / 3', overflow: 'hidden' }}>
                <img
                  src={getImgSrc(food.image)}
                  alt={getImgAlt(food.image, food.alt)}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }}
                />
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontFamily: headingFontFamily, fontSize: '1.125rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: headingColor, marginBottom: '12px' }}>
                  {food.title}
                </h3>
                <p style={{ fontFamily: bodyFontFamily, fontWeight: 300, fontSize: '0.875rem', color: descriptionColor, lineHeight: 1.7 }}>
                  {food.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
