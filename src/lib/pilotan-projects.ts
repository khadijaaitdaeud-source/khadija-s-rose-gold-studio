import pilotan1 from "@/assets/pilotan-1.png.asset.json";
import pilotan2 from "@/assets/pilotan-2.png.asset.json";
import pilotan3 from "@/assets/pilotan-3.png.asset.json";
import pilotan4 from "@/assets/pilotan-4.png.asset.json";
import pilotan5 from "@/assets/pilotan-5.png.asset.json";

type PilotanVisual = {
  image: string;
  title: string;
  category: "PILOTAN";
  description: string;
};

export const pilotanProjects: PilotanVisual[] = [
  {
    image: pilotan1.url,
    title: "PILOTAN — La précision en lumière",
    category: "PILOTAN",
    description: "Une compteuse de billets occupe le centre d’un fond bleu rayonnant, sous le logo jaune orangé. La typographie arabe et les pictogrammes structurent les arguments de rapidité, de précision et de sécurité présentés dans l’affiche.",
  },
  {
    image: pilotan2.url,
    title: "PILOTAN — Le passage au comptage automatique",
    category: "PILOTAN",
    description: "Un personnage en costume accompagne la présentation de la compteuse et de liasses de billets sur fond bleu profond. Les deux accroches arabes, mises en valeur dans des bandeaux arrondis, invitent à délaisser le comptage manuel au profit de la vitesse et de la précision.",
  },
  {
    image: pilotan3.url,
    title: "PILOTAN — Une solution, plusieurs métiers",
    category: "PILOTAN",
    description: "Une bulle jaune orangé ouvre le dialogue, tandis qu’un personnage pointe vers la marque blanche sur fond bleu lumineux. Quatre encadrés en arabe identifient les publics représentés : commerçants, bureaux et agences, comptables et entreprises, supermarchés et grandes épiceries.",
  },
  {
    image: pilotan4.url,
    title: "PILOTAN — Le temps au service de l’activité",
    category: "PILOTAN",
    description: "Cette affiche verticale privilégie une hiérarchie typographique arabe expressive, alternant blanc et jaune orangé sur un fond bleu à motifs tramés. Les pictogrammes et le logo rythment un message associant gain de temps, rapidité et précision, sans constituer une preuve des performances annoncées.",
  },
  {
    image: pilotan5.url,
    title: "PILOTAN — Panorama du comptage professionnel",
    category: "PILOTAN",
    description: "Une bannière panoramique place la compteuse entre un panneau d’avantages numérotés et une accroche arabe sur la vitesse et la précision. Les billets en arrière-plan, les contrastes bleu et doré et les courbes du bas composent un univers publicitaire centré sur le produit.",
  },
];