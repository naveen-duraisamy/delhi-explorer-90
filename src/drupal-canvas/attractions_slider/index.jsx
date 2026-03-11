import { useState } from 'react';

export default function AttractionsSlider({
  sectionId = 'attractions',
  sectionTagline = 'Iconic Landmarks',
  sectionHeading = 'Attractions',
  headingFontFamily = "'Cinzel', serif",
  bodyFontFamily = "'Lato', sans-serif",
  taglineColor = 'hsl(40, 83%, 52%)',
  headingColor = 'hsl(46, 18%, 80%)',
  descriptionColor = 'hsla(46, 18%, 80%, 0.8)',
  accentColor = 'hsl(40, 83%, 52%)',
  backgroundColor = 'hsl(0, 0%, 5%)',
  borderColor = 'hsl(0, 0%, 18%)',
  mutedColor = 'hsla(46, 10%, 55%, 0.3)',
  slideAspectRatio = '21 / 9',
  attraction1Title = 'Red Fort',
  attraction1Summary = "A UNESCO World Heritage Site and symbol of Mughal power, the Red Fort's imposing sandstone walls have witnessed the rise and fall of empires since 1648.",
  attraction1Image = 'https://images.unsplash.com/photo-1741671090624-deab68acf019?auto=format&fit=crop&w=1920&q=80',
  attraction1ImageAlt = 'Ancient red sandstone architecture of Red Fort stands majestic in Delhi',
  attraction2Title = 'Qutub Minar',
  attraction2Summary = "Soaring 73 metres into the Delhi sky, this 12th-century victory tower is a masterpiece of Indo-Islamic architecture and India's tallest brick minaret.",
  attraction2Image = 'https://images.unsplash.com/photo-1664532747590-8ab69543f61c?auto=format&fit=crop&w=1920&q=80',
  attraction2ImageAlt = 'A tall tower with a pointed spire — Qutub Minar in Delhi',
  attraction3Title = "Humayun's Tomb",
  attraction3Summary = "The garden tomb that inspired the Taj Mahal, Humayun's resting place is a serene masterwork of Mughal symmetry set within lush Char Bagh gardens.",
  attraction3Image = 'https://images.unsplash.com/photo-1765025712780-1cdd8a684744?auto=format&fit=crop&w=1920&q=80',
  attraction3ImageAlt = "Humayun's Tomb, a Mughal mausoleum in Delhi, India",
  attraction4Title = 'India Gate',
  attraction4Summary = "Standing sentinel at the heart of Rajpath, this 42-metre war memorial honours 70,000 Indian soldiers and is Delhi's most iconic landmark after sunset.",
  attraction4Image = 'https://images.unsplash.com/photo-1748637976870-4a7f145b3936?auto=format&fit=crop&w=1920&q=80',
  attraction4ImageAlt = 'India Gate stands proudly under a beautiful sky in New Delhi',
  attraction5Title = 'Lotus Temple',
  attraction5Summary = 'A Bahá\'í House of Worship shaped like a blooming lotus flower, this architectural marvel welcomes visitors of all faiths in meditative silence.',
  attraction5Image = 'https://images.unsplash.com/photo-1741686265166-d7cf167a233a?auto=format&fit=crop&w=1920&q=80',
  attraction5ImageAlt = 'Lotus Temple against a clear blue sky in New Delhi',
  attraction6Title = 'Chandni Chowk',
  attraction6Summary = "One of Asia's oldest and busiest markets, Chandni Chowk pulsates with the sights, sounds, and aromas of Old Delhi — a living chronicle of Mughal commerce.",
  attraction6Image = 'https://images.unsplash.com/photo-1760782065868-8940ff63f8e8?auto=format&fit=crop&w=1920&q=80',
  attraction6ImageAlt = 'Busy street market with many people and stalls in Chandni Chowk, Delhi',
}) {
  const [current, setCurrent] = useState(0);

  const getImgSrc = (img) => typeof img === 'string' ? img : img?.src || '';
  const getImgAlt = (img, fallback) => typeof img === 'string' ? fallback : img?.alt || fallback;

  const attractions = [
    { title: attraction1Title, summary: attraction1Summary, image: attraction1Image, alt: attraction1ImageAlt },
    { title: attraction2Title, summary: attraction2Summary, image: attraction2Image, alt: attraction2ImageAlt },
    { title: attraction3Title, summary: attraction3Summary, image: attraction3Image, alt: attraction3ImageAlt },
    { title: attraction4Title, summary: attraction4Summary, image: attraction4Image, alt: attraction4ImageAlt },
    { title: attraction5Title, summary: attraction5Summary, image: attraction5Image, alt: attraction5ImageAlt },
    { title: attraction6Title, summary: attraction6Summary, image: attraction6Image, alt: attraction6ImageAlt },
  ].filter(a => a.title);

  const item = attractions[current];
  const prev = () => setCurrent(c => (c === 0 ? attractions.length - 1 : c - 1));
  const next = () => setCurrent(c => (c === attractions.length - 1 ? 0 : c + 1));

  return (
    <div id={sectionId} className="dc-attractions-slider" style={{ padding: '96px 0', backgroundColor }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ fontFamily: bodyFontFamily, fontWeight: 500, fontSize: '0.875rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: taglineColor, marginBottom: '16px' }}>
            {sectionTagline}
          </p>
          <h2 style={{ fontFamily: headingFontFamily, fontSize: '2.5rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: headingColor, margin: 0 }}>
            {sectionHeading}
          </h2>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ position: 'relative', aspectRatio: slideAspectRatio, overflow: 'hidden' }}>
            <img
              src={getImgSrc(item.image)}
              alt={getImgAlt(item.image, item.alt)}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${backgroundColor}, hsla(0, 0%, 5%, 0.3), transparent)` }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px' }}>
              <h3 style={{ fontFamily: headingFontFamily, fontSize: '2rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: headingColor, marginBottom: '12px' }}>
                {item.title}
              </h3>
              <p style={{ fontFamily: bodyFontFamily, fontWeight: 300, fontSize: '0.9375rem', color: descriptionColor, maxWidth: '700px', lineHeight: 1.7 }}>
                {item.summary}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '24px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              {attractions.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{ width: '32px', height: '2px', border: 'none', cursor: 'pointer', backgroundColor: i === current ? accentColor : mutedColor, transition: 'background-color 0.3s' }}
                />
              ))}
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={prev} style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${borderColor}`, backgroundColor: 'transparent', color: headingColor, cursor: 'pointer', fontSize: '18px' }}>
                ‹
              </button>
              <button onClick={next} style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${borderColor}`, backgroundColor: 'transparent', color: headingColor, cursor: 'pointer', fontSize: '18px' }}>
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
