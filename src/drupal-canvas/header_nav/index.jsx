import { useState } from 'react';

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
    <div className="dc-header-nav" style={{ position: 'sticky', top: 0, left: 0, right: 0, zIndex: 50, backgroundColor, backdropFilter: 'blur(12px)', borderBottom: `1px solid ${borderColor}` }}>
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
}
