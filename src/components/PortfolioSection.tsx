import { useState } from "react";
import delara1 from "@/assets/delara-1.png";
import delara2 from "@/assets/delara-2.png";
import delara3 from "@/assets/delara-3.png";
import delara4 from "@/assets/delara-4.png";
import delara5 from "@/assets/delara-5.png";
import delara6 from "@/assets/delara-6.png";
import delara7 from "@/assets/delara-7.png";
import veralis1 from "@/assets/veralis-1.png";
import veralis2 from "@/assets/veralis-2.png";
import veralis3 from "@/assets/veralis-3.png";
import veralis4 from "@/assets/veralis-4.png";
import veralis5 from "@/assets/veralis-5.png";
import veralis6 from "@/assets/veralis-6.png";
import veralis7 from "@/assets/veralis-7.png";
import veralis8 from "@/assets/veralis-8.png";
import holiva1 from "@/assets/holiva-1.png";
import holiva2 from "@/assets/holiva-2.png";
import holiva3 from "@/assets/holiva-3.png";
import holiva4 from "@/assets/holiva-4.png";
import holiva5 from "@/assets/holiva-5.png";

const projects = [
  {
    image: delara1,
    title: "Délara — Éclat Floral",
    category: "Délara",
    description: "Mise en scène lumineuse et raffinée pour un parfum d'exception, sublimé par des accents floraux délicats.",
  },
  {
    image: delara2,
    title: "Délara — L'Essence Captivante",
    category: "Délara",
    description: "Direction artistique sombre et cinématographique capturant l'intensité et le mystère du parfum.",
  },
  {
    image: delara3,
    title: "Délara — Prestige Émeraude",
    category: "Délara",
    description: "Identité visuelle luxueuse avec carte de visite assortie, alliant vert profond et finitions dorées.",
  },
  {
    image: delara4,
    title: "Délara — Rouge Passion",
    category: "Délara",
    description: "Photographie produit sensuelle aux tons bordeaux, évoquant l'audace et la féminité.",
  },
  {
    image: delara5,
    title: "Délara — Élégance Nude",
    category: "Délara",
    description: "Campagne épurée et naturelle, mettant en valeur la beauté brute et l'authenticité de la marque.",
  },
  {
    image: delara6,
    title: "Délara — Carte de Visite",
    category: "Délara",
    description: "Design de carte de visite premium avec typographie dorée sur fond vert émeraude.",
  },
  {
    image: delara7,
    title: "Délara — Lumière Dorée",
    category: "Délara",
    description: "Ambiance poétique et chaleureuse, baignée de lumière naturelle pour un rendu intemporel.",
  },
  {
    image: veralis1,
    title: "Veralis — Packaging Naturel",
    category: "Veralis",
    description: "Conception d'un packaging écoresponsable pour une gamme d'aloe vera, alliant nature et élégance.",
  },
  {
    image: veralis2,
    title: "Veralis — Boîte Produit",
    category: "Veralis",
    description: "Design minimaliste et organique pour un packaging 100% naturel, fabriqué au Maroc.",
  },
  {
    image: veralis3,
    title: "Veralis — Visuel Promotionnel",
    category: "Veralis",
    description: "Création d'un visuel publicitaire vibrant et dynamique pour une campagne réseaux sociaux.",
  },
  {
    image: veralis4,
    title: "Veralis — Duo Produit & Packaging",
    category: "Veralis",
    description: "Mise en scène harmonieuse du flacon et de son étui, mettant en avant l'univers botanique de la marque.",
  },
  {
    image: veralis5,
    title: "Veralis — Patron de Boîte",
    category: "Veralis",
    description: "Conception technique du packaging déplié avec face avant et arrière, intégrant l'histoire de la marque.",
  },
  {
    image: veralis6,
    title: "Veralis — Carte de Visite",
    category: "Veralis",
    description: "Design de carte de visite épuré aux tons crème et vert forêt, reflétant l'identité naturelle de la marque.",
  },
  {
    image: veralis7,
    title: "Veralis — Étiquette Ronde",
    category: "Veralis",
    description: "Création d'une étiquette produit circulaire avec illustrations botaniques pour un sachet d'aloe vera bio.",
  },
  {
    image: veralis8,
    title: "Veralis — Sachet Infusion",
    category: "Veralis",
    description: "Design de packaging transparent avec étiquette ovale, mettant en avant le produit naturel et ses vertus.",
  },
  {
    image: holiva1,
    title: "Holiva — Carte de Visite",
    category: "Holiva",
    description: "Identité visuelle vibrante aux dégradés chauds, alliant modernité et esprit naturel pour une marque de jus.",
  },
  {
    image: holiva2,
    title: "Holiva — Campagne Produit",
    category: "Holiva",
    description: "Visuel publicitaire éclatant mettant en scène le jus exotique avec des fruits frais et un univers coloré.",
  },
  {
    image: holiva3,
    title: "Holiva — Flyer Lancement",
    category: "Holiva",
    description: "Création d'un flyer promotionnel captivant pour le lancement du nouveau jus kiwano, pitahaya & mangue.",
  },
  {
    image: holiva4,
    title: "Holiva — Affiche Tropicale",
    category: "Holiva",
    description: "Affiche grand format aux couleurs solaires, célébrant l'explosion de fraîcheur tropicale de la gamme.",
  },
  {
    image: holiva5,
    title: "Holiva — Packaging Doypack",
    category: "Holiva",
    description: "Design de packaging doypack aux dégradés mangue-myrtille, évoquant gourmandise et naturalité.",
  },
];

const categories = ["Tous", "Délara", "Veralis", "Holiva"];

const PortfolioSection = () => {
  const [active, setActive] = useState("Tous");

  const filtered = active === "Tous" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-48 h-48 border border-primary/5 rotate-12 -translate-x-1/2" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Travaux récents</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Mon <span className="text-gradient-rosegold">Portfolio</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-rosegold mx-auto mt-6" />
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-body text-xs tracking-widest uppercase px-5 py-2 rounded-sm border transition-all duration-300 ${
                active === cat
                  ? "bg-gradient-rosegold text-primary-foreground border-transparent shadow-rosegold"
                  : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-sm shadow-card ${
                i === 0 ? "sm:row-span-2" : ""
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover min-h-[280px] transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center px-6 text-center">
                <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-2">{project.category}</p>
                <h3 className="font-display text-xl font-bold mb-2">{project.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
