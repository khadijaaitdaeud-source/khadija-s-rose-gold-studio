import { Palette, Layers, Share2, FileText } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Création de Logo",
    description: "Des logos uniques et mémorables qui capturent l'essence de votre marque avec élégance.",
  },
  {
    icon: Layers,
    title: "Identité Visuelle",
    description: "Une identité cohérente et impactante : palette de couleurs, typographies, charte graphique complète.",
  },
  {
    icon: Share2,
    title: "Design Réseaux Sociaux",
    description: "Des visuels captivants et optimisés pour Instagram, Facebook, LinkedIn et plus encore.",
  },
  {
    icon: FileText,
    title: "Flyers & Supports Print",
    description: "Brochures, affiches, cartes de visite et tous supports imprimés avec finition professionnelle.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Geometric elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-primary/5 rotate-45" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border border-primary/5 rounded-full" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Ce que je fais</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Mes <span className="text-gradient-rosegold">Services</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-rosegold mx-auto mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-sm p-8 shadow-card hover:border-primary/30 transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-sm bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon size={22} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
