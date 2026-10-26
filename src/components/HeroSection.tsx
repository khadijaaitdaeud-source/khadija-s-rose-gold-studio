const HeroSection = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-24"
    >
      {/* Ambient blobs */}
      <div className="absolute -top-32 -right-32 w-[30rem] h-[30rem] rounded-full bg-secondary blur-3xl motion-safe:animate-float-slow" />
      <div className="absolute top-1/2 -left-40 w-[26rem] h-[26rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-accent/10 blur-2xl" />

      {/* Dotted texture */}
      <div className="absolute top-24 left-8 w-40 h-40 dot-grid rounded-2xl opacity-60 hidden sm:block" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          {/* Editorial content */}
          <div className="md:col-span-7">
            <p className="inline-flex items-center gap-3 font-body text-xs font-semibold tracking-[0.25em] uppercase text-foreground/70 mb-8 animate-fade-up opacity-0 motion-safe:[animation-fill-mode:forwards]">
              <span className="w-8 h-0.5 bg-gradient-pop inline-block" />
              Studio de création graphique
            </p>

            <p className="font-display text-xl md:text-2xl font-bold mb-4 animate-fade-up opacity-0 motion-safe:[animation-fill-mode:forwards] motion-safe:[animation-delay:0.15s]">
              douja<span className="text-primary">_by_</span>design
            </p>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.02] mb-8 animate-fade-up opacity-0 motion-safe:[animation-fill-mode:forwards] motion-safe:[animation-delay:0.25s]">
              Le design qui donne{" "}
              <span className="text-gradient-pop">vie</span> à vos idées.
            </h1>

            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mb-10 animate-fade-up opacity-0 motion-safe:[animation-fill-mode:forwards] motion-safe:[animation-delay:0.4s]">
              Branding, identité visuelle et design graphique créatif pour des
              marques qui veulent se démarquer.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up opacity-0 motion-safe:[animation-fill-mode:forwards] motion-safe:[animation-delay:0.55s]">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 bg-foreground text-background font-body text-sm font-semibold px-8 py-4 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                Découvrir mes projets
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-foreground/15 text-foreground font-body text-sm font-semibold px-8 py-4 rounded-full hover:border-primary hover:text-primary transition-colors duration-300"
              >
                Parlons de votre projet
              </a>
            </div>
          </div>

          {/* Abstract composition */}
          <div className="md:col-span-5 relative hidden md:block h-[480px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-80 rounded-[3rem] rotate-[8deg] bg-gradient-pop opacity-90 shadow-pop motion-safe:animate-float" />
            </div>
            <div className="absolute top-4 right-2 w-24 h-24 rounded-full border-[6px] border-accent motion-safe:animate-float-slow" />
            <div className="absolute bottom-16 right-10 w-16 h-16 bg-primary rounded-2xl rotate-12 motion-safe:animate-float" />
            <div className="absolute top-10 left-0 w-20 h-20 border-2 border-foreground/20 rounded-2xl -rotate-12" />
            <div className="absolute bottom-4 left-6 w-36 h-24 dot-grid rounded-xl opacity-70" />

            {/* Palette card */}
            <div className="absolute top-1/2 -left-6 bg-card shadow-card rounded-2xl p-4 motion-safe:animate-float-slow">
              <p className="font-body text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Palette</p>
              <div className="flex gap-2">
                <span className="w-6 h-6 rounded-full bg-primary" />
                <span className="w-6 h-6 rounded-full bg-accent" />
                <span className="w-6 h-6 rounded-full bg-foreground" />
                <span className="w-6 h-6 rounded-full bg-secondary border border-border" />
              </div>
            </div>

            {/* Type card */}
            <div className="absolute -bottom-2 right-0 bg-foreground text-background rounded-2xl px-5 py-4 shadow-card motion-safe:animate-float">
              <p className="font-display font-bold text-lg leading-none">Aa</p>
              <p className="font-body text-[10px] uppercase tracking-widest opacity-60 mt-1">Syne · Outfit</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2">
        <span className="text-muted-foreground text-xs tracking-widest uppercase font-body">Scroll</span>
        <div className="w-px h-10 bg-foreground/20" />
      </div>
    </section>
  );
};

export default HeroSection;
