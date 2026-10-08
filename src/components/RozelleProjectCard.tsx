import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export type PortfolioVisual = {
  image: string;
  title: string;
  category: string;
  description: string;
  details: { concept: string; choices: string; objective: string; skills: string[] };
};

const RozelleProjectCard = ({ project }: { project: PortfolioVisual }) => (
  <Dialog>
    <article className="overflow-hidden rounded-sm shadow-card bg-card flex flex-col">
      <DialogTrigger asChild>
        <Button variant="ghost" className="block h-auto w-full p-0 rounded-none overflow-hidden hover:bg-transparent" aria-label={`Voir le détail : ${project.title}`}>
          <img src={project.image} alt={project.title} loading="lazy" className="w-full aspect-[4/5] object-contain transition-transform duration-500 motion-safe:hover:scale-[1.02]" />
        </Button>
      </DialogTrigger>
      <div className="p-5">
        <p className="font-body text-xs uppercase text-primary mb-2">{project.category} · Identité visuelle & beauté</p>
        <h3 className="font-display text-xl font-bold mb-2">{project.title}</h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">{project.description}</p>
      </div>
    </article>
    <DialogContent className="w-[calc(100%-2rem)] max-w-5xl max-h-[90dvh] overflow-y-auto p-5 md:p-8 font-body">
      <div className="pr-6">
        <p className="text-xs uppercase text-primary mb-3">{project.category} · Identité visuelle & beauté</p>
        <DialogTitle className="font-display text-2xl font-bold leading-snug tracking-normal">{project.title}</DialogTitle>
        <DialogDescription className="mt-3 leading-relaxed">{project.description}</DialogDescription>
      </div>
      <div className="grid md:grid-cols-2 gap-6 items-start min-w-0">
        <img src={project.image} alt={project.title} className="w-full h-auto rounded-sm" />
        <dl className="space-y-5 text-sm leading-relaxed min-w-0">
          {[
            ["Description du visuel", project.description],
            ["Concept créatif", project.details.concept],
            ["Choix graphiques", project.details.choices],
            ["Objectif du visuel", project.details.objective],
            ["Mon rôle", "Votre contribution précise à ce visuel n’a pas encore été renseignée. Les compétences ci-dessous décrivent les éléments observables, sans attribuer la photographie, la retouche ou la création du logo."],
          ].map(([label, text]) => (
            <div key={label}>
              <dt className="font-semibold text-foreground mb-1">{label}</dt>
              <dd className="text-muted-foreground">{text}</dd>
            </div>
          ))}
          <div>
            <dt className="font-semibold text-foreground mb-1">Compétences mobilisées</dt>
            <dd><ul className="list-disc pl-5 text-muted-foreground space-y-1">{project.details.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></dd>
          </div>
        </dl>
      </div>
    </DialogContent>
  </Dialog>
);

export default RozelleProjectCard;