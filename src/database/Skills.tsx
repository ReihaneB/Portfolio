import integratemodel from "../assets/skills/integrate-model.json";
import strengthenyourteam from "../assets/skills/strengthen-your-team.json";
import bugs from "../assets/skills/bugs.json";
import react from "../assets/skills/react.json";
import integration from "../assets/skills/integration.json";

type Skills = {
  whaticandoforyou: {
    [key: number]: {
      intitule: string;
      img: {};
      description: string;
      livrables: string[];
    };
  };
  contractinterested: string[];
};

export default function Skills(): Skills[] {
  return [
    {
      whaticandoforyou: {
        1: {
          intitule: "Développer et manager une application React",
          img: react,
          description:
            "Je mettrai à bon escient mes compétences en React afin de vous réaliser un site web unique, performant et conforme aux normes W3C. Je m'engage à fournir un code propre et maintenable, ainsi qu'un site responsive et optimisé pour le référencement. En me confiant votre projet, vous bénéficierez d'un site de qualité professionnelle, livré rapidement.",
          livrables: [
            "Un site web conforme aux normes W3C",
            "Un code propre et maintenable",
            "Un site responsive et optimisé pour le référencement",
            "Un site de qualité professionnelle",
            "Un délai de livraison rapide",
          ],
        },
        2: {
          intitule: "Mettre en place une intégration continue",
          img: integration,
          description:
            "Je m'assurerai de mettre en place les tâches nécessaires à l'intégration continue d'une nouvelle fonctionnalité en vous assurant une bonne continuité grâce à des rapports d'analyses KPI. Cette intégration vous permettra de profiter de votre nouvelle  fonctionnalité en étant certain que celle-ci ne perturbe pas le reste de votre site web.",
          livrables: [
            "Ajout d'une nouvelle fonctionnalité technologique",
            "Rapports d'analyses KPI",
            "Documentation sur les processus d'intégration continue mis en place",
            "Documentation sur les outils et technologies utilisés",
            "Continuité de votre site web",
          ],
        },
        3: {
          intitule: "Réaliser un audit et mettre fin à des bugs récurrents",
          img: bugs,
          description:
            "Je réaliserai un audit de votre site web étape par étape, en commençant par une analyse de votre code source, puis en passant à une analyse de votre contenu et de votre structure de liens. Je vérifierai également vos balises méta et vos titres de pages, ainsi que votre référencement, pour vous assurer que votre site est optimisé pour les moteurs de recherche. Enfin, je vous fournirai un rapport détaillé avec mes recommandations pour améliorer votre site web ainsi qu'une correction des erreurs que j'aurai pu détecter.",
          livrables: [
            "Rapport d'audit détaillé",
            "Correction des erreurs détectées",
            "Recommandations pour améliorer votre site web",
            "Analyse de votre code source",
            "Vérification de votre référencement",
          ],
        },
        4: {
          intitule: "Renforcer votre équipe en vue d'un projet important",
          img: strengthenyourteam,
          description:
            "Je saurai vous accompagner et vous aider à renforcer votre équipe en vue d'un projet important afin que vous puissiez atteindre vos objectifs plus rapidement. Grâce à mon expérience de chef de projet digital, je serai disponible pour fournir un soutien continu et régulier à votre équipe en fournissant des conseils sur la façon de mieux gérer le projet et d'atteindre les meilleurs résultats.",
          livrables: [
            "Un support continu et régulier à votre équipe",
            "Des conseils sur la façon de mieux gérer le projet",
            "Une aide à la résolution de problèmes",
            "Une meilleure compréhension des objectifs du projet",
            "Des résultats plus rapides",
          ],
        },
        5: {
          intitule: "Intégrer une maquette en page web performante",
          img: integratemodel,
          description:
            "Je respecterai intégralement la maquette fournie afin de réaliser une page web conforme à ce qui a été demandé. Grâce à mon expérience en communication visuelle, je saurai adapter parfaitement votre maquette aux différents supports (ordinateur, tablette, smartphone). La page web sera optimisée pour les moteurs de recherche (SEO) et sera facilement accessible depuis n'importe quel appareil.",
          livrables: [
            "Une page web conforme à la maquette fournie",
            "Un code propre et maintenable",
            "Un page web aux normes W3C",
            "Une page web optimisé pour les moteurs de recherche",
            "Une page web facilement accessible depuis n'importe quel appareil",
            "Une adaptation de la maquette aux différents supports",
          ],
        },
      },
      contractinterested: ["Freelance", "CDI", "CDD"],
    },
  ];
}
