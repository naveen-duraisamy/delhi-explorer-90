import { useState } from 'react';

export default function HeroBanner({
  sectionId = '',
  backgroundImage = 'https://images.unsplash.com/photo-1762526217288-a783242270dc?auto=format&fit=crop&w=1920&q=80',
  backgroundImageAlt = 'India Gate illuminated with colorful lights at night in New Delhi',
  tagline = 'Welcome to the Heart of India',
  heading = 'Dilli 360',
  subheading = 'The Living Chronoscope',
  description = 'Seven cities, a thousand years of legacy, and a living pulse that never fades. From Mughal grandeur to the vibrant chaos of Old Delhi\'s lanes — discover a capital that weaves history, faith, art, and flavour into every breath.',
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
              border: `1px solid ${ctaBorderColor}`,
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
}
