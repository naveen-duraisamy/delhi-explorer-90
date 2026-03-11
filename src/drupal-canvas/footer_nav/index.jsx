export default function FooterNav({
  brandName = 'Dilli 360',
  brandSubtitle = 'The Living Chronoscope',
  copyrightText = '© 2026 Dilli 360. Crafted with love for Delhi\'s timeless spirit.',
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
    <div className="dc-footer-nav" style={{ backgroundColor, borderTop: `1px solid ${borderColor}` }}>
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

        <div style={{ borderTop: `1px solid ${borderColor}`, marginTop: '48px', paddingTop: '32px' }}>
          <p style={{ fontFamily: bodyFontFamily, fontWeight: 300, fontSize: '0.75rem', color: copyrightColor, textAlign: 'center', letterSpacing: '0.05em' }}>
            {copyrightText}
          </p>
        </div>
      </div>
    </div>
  );
}
