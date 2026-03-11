const Footer = () => {
  const navItems = [
    { label: "Attractions", href: "#attractions" },
    { label: "Cuisine", href: "#cuisine" },
    { label: "Stories", href: "#stories" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#" className="font-heading text-lg tracking-[0.3em] uppercase text-foreground">
              Dilli 360
            </a>
            <p className="font-secondary text-sm text-muted-foreground mt-2 italic">
              The Living Chronoscope
            </p>
          </div>

          {/* Nav */}
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-body font-medium text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-border mt-12 pt-8">
          <p className="font-body font-light text-xs text-muted-foreground text-center tracking-wider">
            © 2026 Dilli 360. Crafted with love for Delhi's timeless spirit.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
