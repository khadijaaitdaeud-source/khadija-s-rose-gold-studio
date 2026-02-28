import { Mail, Instagram, Linkedin, Dribbble } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-10 right-20 w-24 h-24 border border-primary/5 rounded-full" />
      <div className="absolute bottom-20 left-10 w-16 h-16 border border-primary/5 rotate-45" />

      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Collaborons</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Envie de <span className="text-gradient-rosegold">créer</span> ensemble ?
          </h2>
          <div className="w-16 h-0.5 bg-gradient-rosegold mx-auto mb-8" />
          <p className="font-body text-muted-foreground text-lg mb-10">
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour discuter de vos besoins en design graphique.
          </p>

          <a
            href="mailto:contact@khadija-design.com"
            className="inline-flex items-center gap-3 bg-gradient-rosegold text-primary-foreground font-body text-sm tracking-widest uppercase px-10 py-4 rounded-sm shadow-rosegold hover:opacity-90 transition-opacity duration-300 mb-12"
          >
            <Mail size={18} />
            Me contacter
          </a>

          <div className="flex items-center justify-center gap-6 mt-4">
            {[
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Dribbble, href: "#", label: "Dribbble" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-300"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-border">
        <p className="font-body text-xs text-muted-foreground text-center tracking-widest">
          © 2026 Khadija Ait Daoud — Tous droits réservés
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
