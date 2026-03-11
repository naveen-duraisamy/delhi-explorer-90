import { useState } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { Download as DownloadIcon, Check, Package, FileCode, FileText, Palette } from "lucide-react";

// ── File contents for each DC component ──────────────────────────────
// We inline them so the page is self-contained and always in sync.

const components: Record<string, Record<string, string>> = {
  header_nav: {
    "component.yml": `$schema: 'https://git.drupalcode.org/project/drupal_canvas/-/raw/0.x/packages/drupal_canvas/component.schema.json'
machineName: header_nav
name: Header Navigation
status: stable
props:
  type: object
  properties:
    brandName:
      type: string
      title: Brand Name
    headingFontFamily:
      type: string
      title: Heading Font Family
    bodyFontFamily:
      type: string
      title: Body Font Family
    brandColor:
      type: string
      title: Brand Color
    navLinkColor:
      type: string
      title: Nav Link Color
    navLinkHoverColor:
      type: string
      title: Nav Link Hover Color
    backgroundColor:
      type: string
      title: Background Color
    borderColor:
      type: string
      title: Border Color
    navItem1Label:
      type: string
      title: Nav Item 1 Label
    navItem1Href:
      type: string
      title: Nav Item 1 Href
    navItem2Label:
      type: string
      title: Nav Item 2 Label
    navItem2Href:
      type: string
      title: Nav Item 2 Href
    navItem3Label:
      type: string
      title: Nav Item 3 Label
    navItem3Href:
      type: string
      title: Nav Item 3 Href
    headerHeight:
      type: string
      title: Header Height
    brandLetterSpacing:
      type: string
      title: Brand Letter Spacing`,
    "index.jsx": `import { useState } from 'react';

export default function HeaderNav({
  brandName = 'Dilli 360',
  headingFontFamily = "'Cinzel', serif",
  bodyFontFamily = "'Lato', sans-serif",
  brandColor = 'hsl(46, 18%, 80%)',
  navLinkColor = 'hsl(46, 10%, 55%)',
  navLinkHoverColor = 'hsl(40, 83%, 52%)',
  backgroundColor = 'hsla(0, 0%, 5%, 0.95)',
  borderColor = 'hsl(0, 0%, 18%)',
  navItem1Label = 'Attractions',
  navItem1Href = '#attractions',
  navItem2Label = 'Cuisine',
  navItem2Href = '#cuisine',
  navItem3Label = 'Stories',
  navItem3Href = '#stories',
  headerHeight = '80px',
  brandLetterSpacing = '0.3em',
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: navItem1Label, href: navItem1Href },
    { label: navItem2Label, href: navItem2Href },
    { label: navItem3Label, href: navItem3Href },
  ].filter(n => n.label);

  return (
    <div className="dc-header-nav" style={{ position: 'sticky', top: 0, left: 0, right: 0, zIndex: 50, backgroundColor, backdropFilter: 'blur(12px)', borderBottom: \`1px solid \${borderColor}\` }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: headerHeight }}>
        <a href="#" style={{ fontFamily: headingFontFamily, fontSize: '1.125rem', letterSpacing: brandLetterSpacing, textTransform: 'uppercase', color: brandColor, textDecoration: 'none' }}>
          {brandName}
        </a>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              style={{ fontFamily: bodyFontFamily, fontWeight: 500, fontSize: '0.875rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: navLinkColor, textDecoration: 'none', transition: 'color 0.3s' }}
              onMouseEnter={e => e.target.style.color = navLinkHoverColor}
              onMouseLeave={e => e.target.style.color = navLinkColor}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}`,
    "index.css": `.dc-header-nav {
  box-sizing: border-box;
}
.dc-header-nav * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}`,
  },

  hero_banner: {
    "component.yml": `$schema: 'https://git.drupalcode.org/project/drupal_canvas/-/raw/0.x/packages/drupal_canvas/component.schema.json'
machineName: hero_banner
name: Hero Banner
status: stable
props:
  type: object
  properties:
    sectionId:
      type: string
      title: Section Id
    backgroundImage:
      type: object
      $ref: 'json-schema-definitions://canvas.module/image'
      title: Background Image
    backgroundImageAlt:
      type: string
      title: Background Image Alt
    tagline:
      type: string
      title: Tagline
    heading:
      type: string
      title: Heading
    subheading:
      type: string
      title: Subheading
    description:
      type: string
      title: Description
    ctaText:
      type: string
      title: Cta Text
    ctaHref:
      type: string
      title: Cta Href
    headingFontFamily:
      type: string
      title: Heading Font Family
    bodyFontFamily:
      type: string
      title: Body Font Family
    secondaryFontFamily:
      type: string
      title: Secondary Font Family
    taglineColor:
      type: string
      title: Tagline Color
    headingColor:
      type: string
      title: Heading Color
    subheadingColor:
      type: string
      title: Subheading Color
    descriptionColor:
      type: string
      title: Description Color
    ctaBorderColor:
      type: string
      title: Cta Border Color
    ctaTextColor:
      type: string
      title: Cta Text Color
    ctaHoverBackgroundColor:
      type: string
      title: Cta Hover Background Color
    overlayGradient:
      type: string
      title: Overlay Gradient
    sectionHeight:
      type: string
      title: Section Height
    headingFontSize:
      type: string
      title: Heading Font Size
    headingLetterSpacing:
      type: string
      title: Heading Letter Spacing
    taglineLetterSpacing:
      type: string
      title: Tagline Letter Spacing`,
    "index.jsx": `import { useState } from 'react';

export default function HeroBanner({
  sectionId = '',
  backgroundImage = 'https://images.unsplash.com/photo-1762526217288-a783242270dc?auto=format&fit=crop&w=1920&q=80',
  backgroundImageAlt = 'India Gate illuminated with colorful lights at night in New Delhi',
  tagline = 'Welcome to the Heart of India',
  heading = 'Dilli 360',
  subheading = 'The Living Chronoscope',
  description = 'Seven cities, a thousand years of legacy, and a living pulse that never fades. From Mughal grandeur to the vibrant chaos of Old Delhi\\'s lanes — discover a capital that weaves history, faith, art, and flavour into every breath.',
  ctaText = 'Begin Your Journey',
  ctaHref = '#attractions',
  headingFontFamily = "'Cinzel', serif",
  bodyFontFamily = "'Lato', sans-serif",
  secondaryFontFamily = "'EB Garamond', serif",
  taglineColor = 'hsl(40, 83%, 52%)',
  headingColor = 'hsl(46, 18%, 80%)',
  subheadingColor = 'hsla(46, 18%, 80%, 0.8)',
  descriptionColor = 'hsl(46, 10%, 55%)',
  ctaBorderColor = 'hsl(40, 83%, 52%)',
  ctaTextColor = 'hsl(40, 83%, 52%)',
  ctaHoverBackgroundColor = 'hsl(40, 83%, 52%)',
  overlayGradient = 'linear-gradient(to bottom, hsla(0, 0%, 5%, 0.7), hsla(0, 0%, 5%, 0.4), hsl(0, 0%, 5%))',
  sectionHeight = '700px',
  headingFontSize = '4rem',
  headingLetterSpacing = '0.15em',
  taglineLetterSpacing = '0.3em',
}) {
  const [hovered, setHovered] = useState(false);
  const imgSrc = typeof backgroundImage === 'string' ? backgroundImage : backgroundImage?.src || '';
  const imgAlt = typeof backgroundImage === 'string' ? backgroundImageAlt : backgroundImage?.alt || backgroundImageAlt;

  return (
    <div id={sectionId} className="dc-hero-banner" style={{ position: 'relative', height: sectionHeight, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <img
        src={imgSrc}
        alt={imgAlt}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div style={{ position: 'absolute', inset: 0, background: overlayGradient }} />
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 24px', maxWidth: '900px', margin: '0 auto' }}>
        <p style={{ fontFamily: bodyFontFamily, fontWeight: 500, fontSize: '0.875rem', letterSpacing: taglineLetterSpacing, textTransform: 'uppercase', color: taglineColor, marginBottom: '24px' }}>
          {tagline}
        </p>
        <h1 style={{ fontFamily: headingFontFamily, fontSize: headingFontSize, letterSpacing: headingLetterSpacing, textTransform: 'uppercase', color: headingColor, marginBottom: '24px', lineHeight: 1.1 }}>
          {heading}
        </h1>
        <p style={{ fontFamily: secondaryFontFamily, fontSize: '1.5rem', color: subheadingColor, fontStyle: 'italic', marginBottom: '16px' }}>
          {subheading}
        </p>
        <p style={{ fontFamily: bodyFontFamily, fontWeight: 300, fontSize: '1.125rem', color: descriptionColor, maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
          {description}
        </p>
        <div style={{ marginTop: '40px' }}>
          <a
            href={ctaHref}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              display: 'inline-block',
              fontFamily: bodyFontFamily,
              fontWeight: 500,
              fontSize: '0.875rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '16px 40px',
              border: \`1px solid \${ctaBorderColor}\`,
              color: hovered ? 'hsl(0, 0%, 5%)' : ctaTextColor,
              backgroundColor: hovered ? ctaHoverBackgroundColor : 'transparent',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
          >
            {ctaText}
          </a>
        </div>
      </div>
    </div>
  );
}`,
    "index.css": `.dc-hero-banner {
  box-sizing: border-box;
}
.dc-hero-banner * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}`,
  },

  attractions_slider: {
    "component.yml": `$schema: 'https://git.drupalcode.org/project/drupal_canvas/-/raw/0.x/packages/drupal_canvas/component.schema.json'
machineName: attractions_slider
name: Attractions Slider
status: stable
props:
  type: object
  properties:
    sectionId:
      type: string
      title: Section Id
    sectionTagline:
      type: string
      title: Section Tagline
    sectionHeading:
      type: string
      title: Section Heading
    headingFontFamily:
      type: string
      title: Heading Font Family
    bodyFontFamily:
      type: string
      title: Body Font Family
    taglineColor:
      type: string
      title: Tagline Color
    headingColor:
      type: string
      title: Heading Color
    descriptionColor:
      type: string
      title: Description Color
    accentColor:
      type: string
      title: Accent Color
    backgroundColor:
      type: string
      title: Background Color
    borderColor:
      type: string
      title: Border Color
    mutedColor:
      type: string
      title: Muted Color
    slideAspectRatio:
      type: string
      title: Slide Aspect Ratio
    attraction1Title:
      type: string
      title: Attraction 1 Title
    attraction1Summary:
      type: string
      title: Attraction 1 Summary
    attraction1Image:
      type: object
      $ref: 'json-schema-definitions://canvas.module/image'
      title: Attraction 1 Image
    attraction1ImageAlt:
      type: string
      title: Attraction 1 Image Alt
    attraction2Title:
      type: string
      title: Attraction 2 Title
    attraction2Summary:
      type: string
      title: Attraction 2 Summary
    attraction2Image:
      type: object
      $ref: 'json-schema-definitions://canvas.module/image'
      title: Attraction 2 Image
    attraction2ImageAlt:
      type: string
      title: Attraction 2 Image Alt
    attraction3Title:
      type: string
      title: Attraction 3 Title
    attraction3Summary:
      type: string
      title: Attraction 3 Summary
    attraction3Image:
      type: object
      $ref: 'json-schema-definitions://canvas.module/image'
      title: Attraction 3 Image
    attraction3ImageAlt:
      type: string
      title: Attraction 3 Image Alt
    attraction4Title:
      type: string
      title: Attraction 4 Title
    attraction4Summary:
      type: string
      title: Attraction 4 Summary
    attraction4Image:
      type: object
      $ref: 'json-schema-definitions://canvas.module/image'
      title: Attraction 4 Image
    attraction4ImageAlt:
      type: string
      title: Attraction 4 Image Alt
    attraction5Title:
      type: string
      title: Attraction 5 Title
    attraction5Summary:
      type: string
      title: Attraction 5 Summary
    attraction5Image:
      type: object
      $ref: 'json-schema-definitions://canvas.module/image'
      title: Attraction 5 Image
    attraction5ImageAlt:
      type: string
      title: Attraction 5 Image Alt
    attraction6Title:
      type: string
      title: Attraction 6 Title
    attraction6Summary:
      type: string
      title: Attraction 6 Summary
    attraction6Image:
      type: object
      $ref: 'json-schema-definitions://canvas.module/image'
      title: Attraction 6 Image
    attraction6ImageAlt:
      type: string
      title: Attraction 6 Image Alt`,
    "index.jsx": `import { useState } from 'react';

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
  attraction5Summary = "A Bahá'í House of Worship shaped like a blooming lotus flower, this architectural marvel welcomes visitors of all faiths in meditative silence.",
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
            <div style={{ position: 'absolute', inset: 0, background: \`linear-gradient(to top, \${backgroundColor}, hsla(0, 0%, 5%, 0.3), transparent)\` }} />
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
              <button onClick={prev} style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: \`1px solid \${borderColor}\`, backgroundColor: 'transparent', color: headingColor, cursor: 'pointer', fontSize: '18px' }}>
                ‹
              </button>
              <button onClick={next} style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: \`1px solid \${borderColor}\`, backgroundColor: 'transparent', color: headingColor, cursor: 'pointer', fontSize: '18px' }}>
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`,
    "index.css": `.dc-attractions-slider {
  box-sizing: border-box;
}
.dc-attractions-slider * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}`,
  },

  food_cards: {
    "component.yml": `$schema: 'https://git.drupalcode.org/project/drupal_canvas/-/raw/0.x/packages/drupal_canvas/component.schema.json'
machineName: food_cards
name: Food Cards
status: stable
props:
  type: object
  properties:
    sectionId:
      type: string
      title: Section Id
    sectionTagline:
      type: string
      title: Section Tagline
    sectionHeading:
      type: string
      title: Section Heading
    headingFontFamily:
      type: string
      title: Heading Font Family
    bodyFontFamily:
      type: string
      title: Body Font Family
    taglineColor:
      type: string
      title: Tagline Color
    headingColor:
      type: string
      title: Heading Color
    descriptionColor:
      type: string
      title: Description Color
    backgroundColor:
      type: string
      title: Background Color
    cardBackgroundColor:
      type: string
      title: Card Background Color
    cardBorderColor:
      type: string
      title: Card Border Color
    food1Title:
      type: string
      title: Food 1 Title
    food1Summary:
      type: string
      title: Food 1 Summary
    food1Image:
      type: object
      $ref: 'json-schema-definitions://canvas.module/image'
      title: Food 1 Image
    food1ImageAlt:
      type: string
      title: Food 1 Image Alt
    food2Title:
      type: string
      title: Food 2 Title
    food2Summary:
      type: string
      title: Food 2 Summary
    food2Image:
      type: object
      $ref: 'json-schema-definitions://canvas.module/image'
      title: Food 2 Image
    food2ImageAlt:
      type: string
      title: Food 2 Image Alt
    food3Title:
      type: string
      title: Food 3 Title
    food3Summary:
      type: string
      title: Food 3 Summary
    food3Image:
      type: object
      $ref: 'json-schema-definitions://canvas.module/image'
      title: Food 3 Image
    food3ImageAlt:
      type: string
      title: Food 3 Image Alt
    food4Title:
      type: string
      title: Food 4 Title
    food4Summary:
      type: string
      title: Food 4 Summary
    food4Image:
      type: object
      $ref: 'json-schema-definitions://canvas.module/image'
      title: Food 4 Image
    food4ImageAlt:
      type: string
      title: Food 4 Image Alt
    food5Title:
      type: string
      title: Food 5 Title
    food5Summary:
      type: string
      title: Food 5 Summary
    food5Image:
      type: object
      $ref: 'json-schema-definitions://canvas.module/image'
      title: Food 5 Image
    food5ImageAlt:
      type: string
      title: Food 5 Image Alt
    food6Title:
      type: string
      title: Food 6 Title
    food6Summary:
      type: string
      title: Food 6 Summary
    food6Image:
      type: object
      $ref: 'json-schema-definitions://canvas.module/image'
      title: Food 6 Image
    food6ImageAlt:
      type: string
      title: Food 6 Image Alt`,
    "index.jsx": `export default function FoodCards({
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
            <div key={i} style={{ backgroundColor: cardBackgroundColor, border: \`1px solid \${cardBorderColor}\`, overflow: 'hidden' }}>
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
}`,
    "index.css": `.dc-food-cards {
  box-sizing: border-box;
}
.dc-food-cards * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}`,
  },

  delhi_facts: {
    "component.yml": `$schema: 'https://git.drupalcode.org/project/drupal_canvas/-/raw/0.x/packages/drupal_canvas/component.schema.json'
machineName: delhi_facts
name: Delhi Facts
status: stable
props:
  type: object
  properties:
    sectionId:
      type: string
      title: Section Id
    sectionTagline:
      type: string
      title: Section Tagline
    sectionHeading:
      type: string
      title: Section Heading
    backgroundImage:
      type: object
      $ref: 'json-schema-definitions://canvas.module/image'
      title: Background Image
    backgroundImageAlt:
      type: string
      title: Background Image Alt
    headingFontFamily:
      type: string
      title: Heading Font Family
    bodyFontFamily:
      type: string
      title: Body Font Family
    taglineColor:
      type: string
      title: Tagline Color
    headingColor:
      type: string
      title: Heading Color
    descriptionColor:
      type: string
      title: Description Color
    numberColor:
      type: string
      title: Number Color
    overlayColor:
      type: string
      title: Overlay Color
    sectionHeight:
      type: string
      title: Section Height
    fact1Number:
      type: string
      title: Fact 1 Number
    fact1Title:
      type: string
      title: Fact 1 Title
    fact1Text:
      type: string
      title: Fact 1 Text
    fact2Number:
      type: string
      title: Fact 2 Number
    fact2Title:
      type: string
      title: Fact 2 Title
    fact2Text:
      type: string
      title: Fact 2 Text
    fact3Number:
      type: string
      title: Fact 3 Number
    fact3Title:
      type: string
      title: Fact 3 Title
    fact3Text:
      type: string
      title: Fact 3 Text
    fact4Number:
      type: string
      title: Fact 4 Number
    fact4Title:
      type: string
      title: Fact 4 Title
    fact4Text:
      type: string
      title: Fact 4 Text`,
    "index.jsx": `export default function DelhiFacts({
  sectionId = 'stories',
  sectionTagline = 'Beyond the Monuments',
  sectionHeading = 'Stories of Delhi',
  backgroundImage = 'https://images.unsplash.com/photo-1666039085220-144fc4c8693d?auto=format&fit=crop&w=1920&q=80',
  backgroundImageAlt = 'Qutub Minar tower illuminated at night in Delhi',
  headingFontFamily = "'Cinzel', serif",
  bodyFontFamily = "'Lato', sans-serif",
  taglineColor = 'hsl(40, 83%, 52%)',
  headingColor = 'hsl(46, 18%, 80%)',
  descriptionColor = 'hsl(46, 10%, 55%)',
  numberColor = 'hsla(40, 83%, 52%, 0.3)',
  overlayColor = 'hsla(0, 0%, 5%, 0.85)',
  sectionHeight = 'auto',
  fact1Number = '01',
  fact1Title = 'Seven Cities, One Capital',
  fact1Text = "Delhi has been destroyed and rebuilt at least seven times across millennia. Each layer — from the Tomars' Lal Kot to Lutyens' New Delhi — adds another chapter to the world's most layered capital.",
  fact2Number = '02',
  fact2Title = 'The Iron Pillar That Defies Rust',
  fact2Text = 'Standing in the Qutub Complex for over 1,600 years, this 7-metre iron pillar has never rusted — a metallurgical mystery that continues to baffle modern scientists.',
  fact3Number = '03',
  fact3Title = "Asia's Largest Spice Market",
  fact3Text = "Khari Baoli, near Chandni Chowk, is the continent's largest wholesale spice market. Its narrow lanes overflow with turmeric, chilli, and saffron, perfuming the air for blocks around.",
  fact4Number = '04',
  fact4Title = 'A Metro That Moves Millions',
  fact4Text = 'The Delhi Metro, inaugurated in 2002, transports over 6 million passengers daily across 250+ stations — one of the fastest-expanding rapid transit systems on Earth.',
}) {
  const imgSrc = typeof backgroundImage === 'string' ? backgroundImage : backgroundImage?.src || '';
  const imgAlt = typeof backgroundImage === 'string' ? backgroundImageAlt : backgroundImage?.alt || backgroundImageAlt;

  const facts = [
    { number: fact1Number, title: fact1Title, text: fact1Text },
    { number: fact2Number, title: fact2Title, text: fact2Text },
    { number: fact3Number, title: fact3Title, text: fact3Text },
    { number: fact4Number, title: fact4Title, text: fact4Text },
  ].filter(f => f.title);

  return (
    <div id={sectionId} className="dc-delhi-facts" style={{ position: 'relative', padding: '96px 0', overflow: 'hidden', minHeight: sectionHeight }}>
      <img
        src={imgSrc}
        alt={imgAlt}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div style={{ position: 'absolute', inset: 0, backgroundColor: overlayColor }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{ fontFamily: bodyFontFamily, fontWeight: 500, fontSize: '0.875rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: taglineColor, marginBottom: '16px' }}>
            {sectionTagline}
          </p>
          <h2 style={{ fontFamily: headingFontFamily, fontSize: '2.5rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: headingColor, margin: 0 }}>
            {sectionHeading}
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(460px, 1fr))', gap: '48px' }}>
          {facts.map((fact, i) => (
            <div key={i} style={{ display: 'flex', gap: '24px' }}>
              <span style={{ fontFamily: headingFontFamily, fontSize: '3rem', color: numberColor, lineHeight: 1 }}>
                {fact.number}
              </span>
              <div>
                <h3 style={{ fontFamily: headingFontFamily, fontSize: '1.125rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: headingColor, marginBottom: '12px' }}>
                  {fact.title}
                </h3>
                <p style={{ fontFamily: bodyFontFamily, fontWeight: 300, fontSize: '0.9375rem', color: descriptionColor, lineHeight: 1.7 }}>
                  {fact.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`,
    "index.css": `.dc-delhi-facts {
  box-sizing: border-box;
}
.dc-delhi-facts * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}`,
  },

  footer_nav: {
    "component.yml": `$schema: 'https://git.drupalcode.org/project/drupal_canvas/-/raw/0.x/packages/drupal_canvas/component.schema.json'
machineName: footer_nav
name: Footer Navigation
status: stable
props:
  type: object
  properties:
    brandName:
      type: string
      title: Brand Name
    brandSubtitle:
      type: string
      title: Brand Subtitle
    copyrightText:
      type: string
      title: Copyright Text
    headingFontFamily:
      type: string
      title: Heading Font Family
    bodyFontFamily:
      type: string
      title: Body Font Family
    secondaryFontFamily:
      type: string
      title: Secondary Font Family
    brandColor:
      type: string
      title: Brand Color
    subtitleColor:
      type: string
      title: Subtitle Color
    navLinkColor:
      type: string
      title: Nav Link Color
    navLinkHoverColor:
      type: string
      title: Nav Link Hover Color
    copyrightColor:
      type: string
      title: Copyright Color
    backgroundColor:
      type: string
      title: Background Color
    borderColor:
      type: string
      title: Border Color
    navItem1Label:
      type: string
      title: Nav Item 1 Label
    navItem1Href:
      type: string
      title: Nav Item 1 Href
    navItem2Label:
      type: string
      title: Nav Item 2 Label
    navItem2Href:
      type: string
      title: Nav Item 2 Href
    navItem3Label:
      type: string
      title: Nav Item 3 Label
    navItem3Href:
      type: string
      title: Nav Item 3 Href`,
    "index.jsx": `export default function FooterNav({
  brandName = 'Dilli 360',
  brandSubtitle = 'The Living Chronoscope',
  copyrightText = '© 2026 Dilli 360. Crafted with love for Delhi\\'s timeless spirit.',
  headingFontFamily = "'Cinzel', serif",
  bodyFontFamily = "'Lato', sans-serif",
  secondaryFontFamily = "'EB Garamond', serif",
  brandColor = 'hsl(46, 18%, 80%)',
  subtitleColor = 'hsl(46, 10%, 55%)',
  navLinkColor = 'hsl(46, 10%, 55%)',
  navLinkHoverColor = 'hsl(40, 83%, 52%)',
  copyrightColor = 'hsl(46, 10%, 55%)',
  backgroundColor = 'hsl(0, 0%, 5%)',
  borderColor = 'hsl(0, 0%, 18%)',
  navItem1Label = 'Attractions',
  navItem1Href = '#attractions',
  navItem2Label = 'Cuisine',
  navItem2Href = '#cuisine',
  navItem3Label = 'Stories',
  navItem3Href = '#stories',
}) {
  const navItems = [
    { label: navItem1Label, href: navItem1Href },
    { label: navItem2Label, href: navItem2Href },
    { label: navItem3Label, href: navItem3Href },
  ].filter(n => n.label);

  return (
    <div className="dc-footer-nav" style={{ backgroundColor, borderTop: \`1px solid \${borderColor}\` }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '32px' }}>
          <div>
            <a href="#" style={{ fontFamily: headingFontFamily, fontSize: '1.125rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: brandColor, textDecoration: 'none' }}>
              {brandName}
            </a>
            <p style={{ fontFamily: secondaryFontFamily, fontSize: '0.875rem', color: subtitleColor, marginTop: '8px', fontStyle: 'italic' }}>
              {brandSubtitle}
            </p>
          </div>

          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                style={{ fontFamily: bodyFontFamily, fontWeight: 500, fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: navLinkColor, textDecoration: 'none', transition: 'color 0.3s' }}
                onMouseEnter={e => e.target.style.color = navLinkHoverColor}
                onMouseLeave={e => e.target.style.color = navLinkColor}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div style={{ borderTop: \`1px solid \${borderColor}\`, marginTop: '48px', paddingTop: '32px' }}>
          <p style={{ fontFamily: bodyFontFamily, fontWeight: 300, fontSize: '0.75rem', color: copyrightColor, textAlign: 'center', letterSpacing: '0.05em' }}>
            {copyrightText}
          </p>
        </div>
      </div>
    </div>
  );
}`,
    "index.css": `.dc-footer-nav {
  box-sizing: border-box;
}
.dc-footer-nav * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}`,
  },
};

const globalCss = `:root {
  --dc-black: 0, 0%, 0%;
  --dc-navy: 222, 52%, 24%;
  --dc-sand: 46, 18%, 80%;
  --dc-gold: 40, 83%, 52%;
  --dc-silver: 245, 11%, 86%;
  --dc-bg: 0, 0%, 5%;
  --dc-font-heading: 'Cinzel', serif;
  --dc-font-body: 'Lato', sans-serif;
  --dc-font-secondary: 'EB Garamond', serif;
}

h1, h2, h3, h4 {
  font-family: var(--dc-font-heading);
}`;

const componentList = [
  { key: "header_nav", name: "Header Navigation", desc: "Sticky header with brand name and nav links", files: 3 },
  { key: "hero_banner", name: "Hero Banner", desc: "Full-width hero with background image, heading, and CTA", files: 3 },
  { key: "attractions_slider", name: "Attractions Slider", desc: "Image slider showcasing 6 Delhi landmarks", files: 3 },
  { key: "food_cards", name: "Food Cards", desc: "3×2 grid of traditional Delhi cuisine cards", files: 3 },
  { key: "delhi_facts", name: "Delhi Facts", desc: "Facts & stories block with background image overlay", files: 3 },
  { key: "footer_nav", name: "Footer Navigation", desc: "Footer with brand, nav links, and copyright", files: 3 },
];

const Download = () => {
  const [downloading, setDownloading] = useState(false);
  const [done, setDone] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    const zip = new JSZip();

    // Add global.css
    zip.file("global.css", globalCss);

    // Add each component folder
    for (const [dir, files] of Object.entries(components)) {
      for (const [filename, content] of Object.entries(files)) {
        zip.file(`${dir}/${filename}`, content);
      }
    }

    const blob = await zip.generateAsync({ type: "blob" });
    saveAs(blob, "dilli-360-drupal-canvas-components.zip");
    setDownloading(false);
    setDone(true);
    setTimeout(() => setDone(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="/" className="font-heading text-lg tracking-[0.3em] uppercase text-foreground">
            Dilli 360
          </a>
          <a
            href="/"
            className="font-body text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-accent transition-colors"
          >
            ← Back to Site
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
        {/* Page Title */}
        <div className="text-center mb-16">
          <p className="font-body font-medium text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Drupal Canvas Export
          </p>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl tracking-[0.15em] uppercase text-foreground mb-6">
            Download Components
          </h1>
          <p className="font-body font-light text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            All 6 Drupal Canvas components plus a global stylesheet — ready to import into your Drupal 11 site.
            Each component is self-contained with configurable props for text, images, colors, and typography.
          </p>
        </div>

        {/* Download Button */}
        <div className="flex justify-center mb-20">
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="group inline-flex items-center gap-3 font-body font-medium text-sm tracking-[0.15em] uppercase px-12 py-5 border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 disabled:opacity-50"
          >
            {done ? (
              <>
                <Check size={18} />
                Downloaded
              </>
            ) : downloading ? (
              "Generating ZIP…"
            ) : (
              <>
                <DownloadIcon size={18} />
                Download All Components (.zip)
              </>
            )}
          </button>
        </div>

        {/* Component List */}
        <div className="mb-16">
          <h2 className="font-heading text-xl tracking-[0.15em] uppercase text-foreground mb-8 text-center">
            Included Components
          </h2>

          <div className="grid gap-4">
            {componentList.map((comp) => (
              <div
                key={comp.key}
                className="flex items-center gap-6 p-6 border border-border bg-card hover:border-accent/30 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-border text-accent">
                  <Package size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-base tracking-[0.1em] uppercase text-foreground mb-1">
                    {comp.name}
                  </h3>
                  <p className="font-body font-light text-sm text-muted-foreground">
                    {comp.desc}
                  </p>
                </div>
                <div className="flex-shrink-0 flex items-center gap-4 text-muted-foreground">
                  <span className="flex items-center gap-1.5 text-xs font-body">
                    <FileCode size={14} />
                    index.jsx
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-body">
                    <FileText size={14} />
                    component.yml
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-body">
                    <Palette size={14} />
                    index.css
                  </span>
                </div>
              </div>
            ))}

            {/* Global CSS */}
            <div className="flex items-center gap-6 p-6 border border-accent/30 bg-card">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-accent text-accent">
                <Palette size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading text-base tracking-[0.1em] uppercase text-foreground mb-1">
                  Global Stylesheet
                </h3>
                <p className="font-body font-light text-sm text-muted-foreground">
                  CSS custom properties for colors, fonts, and heading styles
                </p>
              </div>
              <span className="flex items-center gap-1.5 text-xs font-body text-accent">
                <Palette size={14} />
                global.css
              </span>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="border border-border p-8 lg:p-12 bg-card">
          <h2 className="font-heading text-xl tracking-[0.15em] uppercase text-foreground mb-6">
            Import Instructions
          </h2>
          <ol className="font-body font-light text-sm text-muted-foreground space-y-4 leading-relaxed list-decimal list-inside">
            <li>
              Extract the ZIP file — you'll get 6 component folders and a <code className="text-accent font-normal">global.css</code> file.
            </li>
            <li>
              Upload each component folder to your Drupal Canvas components directory via the Drupal Canvas UI or file system.
            </li>
            <li>
              Upload <code className="text-accent font-normal">global.css</code> as a global stylesheet in your Drupal Canvas configuration.
            </li>
            <li>
              Place the components on your page in order: Header → Hero Banner → Attractions Slider → Food Cards → Delhi Facts → Footer.
            </li>
            <li>
              All components render with default content immediately — customize text, images, colors, and fonts via the Drupal Canvas props UI.
            </li>
            <li>
              Image props support Drupal Canvas image upload fields — upload your own images directly through the Drupal admin UI.
            </li>
          </ol>
        </div>
      </main>
    </div>
  );
};

export default Download;
