const AboutSection = () => {
  return (
    <section id="apropos" className="py-24 md:py-32 relative overflow-hidden">
      {/* Geometric accent */}
      <div className="absolute top-0 right-0 w-64 h-64 border border-primary/5 rounded-full translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Left - Label */}
          <div className="md:col-span-4">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">À propos</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Créer avec
              <br />
              <span className="text-gradient-rosegold">passion</span>
            </h2>
            <div className="w-16 h-0.5 bg-gradient-rosegold mt-6" />
          </div>

          {/* Right - Content */}
          <div className="md:col-span-8 md:pl-12 border-l border-border">
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
              Graphiste passionnée basée au Maroc, je mets mon expertise créative au service de votre image de marque. Avec un œil aiguisé pour le détail et une approche moderne du design, je crée des identités visuelles qui racontent votre histoire.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Chaque projet est une opportunité de repousser les limites de la créativité. Du logo au packaging, en passant par le design digital, je m'engage à livrer des créations uniques qui marquent les esprits et renforcent votre positionnement.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { number: "50+", label: "Projets" },
                { number: "30+", label: "Clients" },
                { number: "5+", label: "Années" },
                { number: "100%", label: "Passion" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-3xl font-bold text-primary">{stat.number}</p>
                  <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
