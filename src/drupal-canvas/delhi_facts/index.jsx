export default function DelhiFacts({
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
}
