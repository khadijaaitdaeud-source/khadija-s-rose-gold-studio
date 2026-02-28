import { useEffect, useRef } from "react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (el) el.classList.add("animate-fade-in");
  }, []);

  return (
    <section
      id="accueil"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Geometric decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 border border-primary/10 rounded-full" />
      <div className="absolute bottom-32 left-10 w-40 h-40 border border-primary/10 rotate-45" />
      <div className="absolute top-1/3 left-1/4 w-1 h-32 bg-primary/10" />
      <div className="absolute bottom-1/4 right-1/3 w-24 h-1 bg-primary/10" />

      {/* Floating dots */}
      <div className="absolute top-40 left-20 w-2 h-2 rounded-full bg-primary/30" />
      <div className="absolute bottom-40 right-20 w-3 h-3 rounded-full bg-primary/20" />
      <div className="absolute top-60 right-40 w-1.5 h-1.5 rounded-full bg-primary/25" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <p
          className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Graphiste & Directrice Artistique
        </p>

        <h1
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Khadija
          <br />
          <span className="text-gradient-rosegold">Ait Daoud</span>
        </h1>

        <div
          className="w-20 h-0.5 bg-gradient-rosegold mx-auto mb-8 opacity-0 animate-line-grow"
          style={{ animationDelay: "0.6s" }}
        />

        <p
          className="font-body text-lg md:text-xl text-muted-foreground max-w-lg mx-auto mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          Transformer vos idées en identités visuelles mémorables
        </p>

        <div className="opacity-0 animate-fade-up" style={{ animationDelay: "1s" }}>
          <a
            href="#portfolio"
            className="inline-block bg-gradient-rosegold text-primary-foreground font-body text-sm tracking-widest uppercase px-10 py-4 rounded-sm shadow-rosegold hover:opacity-90 transition-opacity duration-300"
          >
            Voir mes projets
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: "1.5s" }}>
        <span className="text-muted-foreground text-xs tracking-widest uppercase font-body">Scroll</span>
        <div className="w-px h-10 bg-primary/30" />
      </div>
    </section>
  );
};

export default HeroSection;
