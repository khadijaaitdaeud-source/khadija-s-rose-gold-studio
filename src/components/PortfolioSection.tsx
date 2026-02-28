import { useState } from "react";
import projectLogo from "@/assets/project-logo.webp";
import projectBranding from "@/assets/project-branding.webp";
import projectSocial from "@/assets/project-social.webp";
import projectPrint from "@/assets/project-print.webp";
import projectPackaging from "@/assets/project-packaging.webp";
import projectEditorial from "@/assets/project-editorial.webp";

const projects = [
  { image: projectLogo, title: "Luxury Brand", category: "Logo Design", },
  { image: projectBranding, title: "Prima Identité", category: "Identité Visuelle", },
  { image: projectSocial, title: "Social Templates", category: "Réseaux Sociaux", },
  { image: projectPrint, title: "Nuna Ruum Event", category: "Print Design", },
  { image: projectPackaging, title: "Cosmetics Line", category: "Packaging", },
  { image: projectEditorial, title: "Editorial Spread", category: "Design Éditorial", },
];

const categories = ["Tous", ...new Set(projects.map((p) => p.category))];

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

        {/* Grid - asymmetric */}
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
              <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
                <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-2">{project.category}</p>
                <h3 className="font-display text-2xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
