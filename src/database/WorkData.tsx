// import icon
import react from "../assets/icon/react.svg";
import figma from "../assets/icon/figma.svg";
import html from "../assets/icon/html5.svg";
import css from "../assets/icon/css3.svg";
import javascript from "../assets/icon/javascript.svg";
import w3c from "../assets/icon/w3c.svg";
import a11y from "../assets/icon/a11y.svg";
import seo from "../assets/icon/seo.svg";
import zbrush from "../assets/icon/zbrush.svg";
import blender from "../assets/icon/blender.svg";
import lightroom from "../assets/icon/lightroom.svg";
import photoshop from "../assets/icon/photoshop.svg";
import substancepainter from "../assets/icon/substancepainter.svg";
import github from "../assets/icon/github.svg";
import firebase from "../assets/icon/firebase.svg";
import cloudfunction from "../assets/icon/cloud-functions.svg";
import firestore from "../assets/icon/firestore.svg";
import authentication from "../assets/icon/authentication.svg";
import storage from "../assets/icon/storage.svg";
import stripe from "../assets/icon/stripe.svg";
import tailwindcss from "../assets/icon/tailwindcss.svg";
import recoil from "../assets/icon/recoil.svg";
import jest from "../assets/icon/jest.svg";
import eslint from "../assets/icon/eslint.svg";
import scrum from "../assets/icon/scrum.svg";
import pairprogramming from "../assets/icon/pairprogramming.svg";
import atomicdesign from "../assets/icon/atomicdesign.svg";
import cleancode from "../assets/icon/cleancode.svg";
import panther3d from "../assets/icon/panther3d.webp";
import nomadsculpt from "../assets/icon/nomadsculpt.webp";
import keyshot from "../assets/icon/keyshot.svg";
import axios from "../assets/icon/axios.png";
import i18next from "../assets/icon/i18next.svg";
import reactrouter from "../assets/icon/reactrouter.svg";
import framermotion from "../assets/icon/framermotion.svg";
import createreactapp from "../assets/icon/createreactapp.svg";
import babel from "../assets/icon/babel.svg";
import webpack from "../assets/icon/webpack.svg";
import postcss from "../assets/icon/postcss.svg";
import npm from "../assets/icon/npm.svg";
import analytics from "../assets/icon/analytics.svg";
import hosting from "../assets/icon/hosting.svg";
// import wireframes liome full stack

import liomehomepage from "../assets/liome-full-stack-developer/homepage/liome-homepage-1.webp";
import liomeproduct from "../assets/liome-full-stack-developer/product/liome-product-1.webp";
import liomeproduct2 from "../assets/liome-full-stack-developer/product/liome-product-2.webp";
import liomeproduct3 from "../assets/liome-full-stack-developer/product/liome-product-3.webp";
import liomeproduct4 from "../assets/liome-full-stack-developer/product/liome-product-4.webp";
import liomeaccount from "../assets/liome-full-stack-developer/account/liome-account-1.webp";
import liomeorder from "../assets/liome-full-stack-developer/order/liome-order-1.webp";

// import wireframes liome 3D artist

import u92 from "../assets/liome-3d-artist/92u/92u-1.webp";
import u922 from "../assets/liome-3d-artist/92u/92u-2.webp";
import ancestral from "../assets/liome-3d-artist/ancestral/ancestral-1.webp";
import ancestral2 from "../assets/liome-3d-artist/ancestral/ancestral-2.webp";
import ancestral3 from "../assets/liome-3d-artist/ancestral/ancestral-3.webp";
import core from "../assets/liome-3d-artist/core/core-1.webp";
import dune from "../assets/liome-3d-artist/dune/dune-1.webp";
import dune2 from "../assets/liome-3d-artist/dune/dune-2.webp";
import petitprince from "../assets/liome-3d-artist/petit-prince/petit-prince-1.webp";
import quarry from "../assets/liome-3d-artist/quarry/quarry-1.webp";
import quarry2 from "../assets/liome-3d-artist/quarry/quarry-2.webp";
import sealed from "../assets/liome-3d-artist/sealed/sealed-1.webp";
import sealed2 from "../assets/liome-3d-artist/sealed/sealed-2.webp";
import star from "../assets/liome-3d-artist/star/star-1.webp";
import star2 from "../assets/liome-3d-artist/star/star-2.webp";
import tear from "../assets/liome-3d-artist/tear/tear-1.webp";

// import wireframes ultra-book
import ultrabookhomepage from "../assets/ultrabook-front-end-developer/homepage/ultrabook-homepage-1.webp";
import ultrabookhomepage2 from "../assets/ultrabook-front-end-developer/homepage/ultrabook-homepage-2.webp";
import ultrabookhomepage3 from "../assets/ultrabook-front-end-developer/homepage/ultrabook-homepage-3.webp";
import ultrabookporfolio from "../assets/ultrabook-front-end-developer/portfolio/ultrabook-portfolio-theme-custom.webp";
import ultrabookporfolio2 from "../assets/ultrabook-front-end-developer/portfolio/ultrabook-portfolio-theme-ultrafrais.webp";

const ReihaneBSocial = "https://github.com/ReihaneB";
const JawedMSocial = "https://github.com/Jawed-Mokeddem";

type WorkData = {
  id: number;
  url: string;
  projectName: string;
  jobTitle: string;
  firstImage: string;
  firstImageAlt: string;
  secondImage: string;
  secondImageAlt: string;
  buttonTextExternalLink: string;
  externalLink?: string;
  projectDescription: string;
  theGoal: string;
  theGoalDescription: string;
  stackSummary: string[];
  stack: {
    [key: string]: {
      [key: string]: {
        [key: number]: { intitule: string; img: string; alt: string };
      };
    };
  };
  images: { [key: string]: { [key: number]: { img: string; alt: string } } };
  additionalinformations: {
    delivreables: string[];
    projectInformations: {
      client: string;
      clientwebsite: string;
      projectduration: string;
      credits: {
        [key: string]: { [key: number]: { name: string; link: string } };
      };
    };
  };
};

export default function WorkData(): WorkData[] {
  return [
    {
      id: 1,
      url: "liome-full-stack-developer",
      projectName: "Liome",
      jobTitle: "D??veloppeur full-stack",
      firstImage: liomehomepage,
      firstImageAlt: "Page d'accueil de Liome",
      secondImage: liomeproduct,
      secondImageAlt: "Page produit de Liome avec personnalisation",
      buttonTextExternalLink: "En cours de d??veloppement",
      projectDescription:
        "La joaillerie Liome est une entreprise du secteur du luxe qui vend des bijoux pour homme en mat??riaux pr??cieux. La marque utilise des technologies de pointe pour concevoir et fabriquer ses bijoux, afin de garantir la plus haute qualit?? et la plus grande pr??cision possible. Les bijoux Liome sont ??galement ??thiques et respectueux de l'environnement car ils sont fabriqu??s ?? partir de mat??riaux recycl??s et recyclables.",
      theGoal:
        "Concevoir une boutique en ligne et un CMS pour permettre aux clients de d??couvrir et d'acheter les bijoux de la marque",
      theGoalDescription:
        "La marque de bijoux fait preuve d'un fort potentiel de croissance, notamment gr??ce ?? son identit?? visuelle forte et ?? ses nouvelles technologies in??dites. Le site e-commerce doit donc coller au visuel de la marque et offrir aux utilisateurs une nouvelle mani??re de d??couvrir les bijoux. Pour ce faire, le site doit proposer une exp??rience utilisateur fluide et intuitive, ainsi qu'un design ??pur?? et moderne. De plus, il doit offrir une gamme de fonctionnalit??s innovantes permettant aux utilisateurs de d??couvrir les bijoux de mani??re interactive. Enfin, le site e-commerce doit ??tre optimis?? pour les moteurs de recherche afin d'attirer un maximum de visiteurs.",
      stackSummary: ["React", "Recoil", "TailwindCSS", "Firebase"],
      stack: {
        "Front-end": {
          "Librairie front-end": {
            1: { intitule: "React", img: react, alt: "React logo" },
          },

          "Librairie CSS": {
            1: {
              intitule: "TailwindCSS",
              img: tailwindcss,
              alt: "TailwindCSS logo",
            },
          },
          "Librairie de gestion d'??tat": {
            1: { intitule: "Recoil", img: recoil, alt: "Recoil logo" },
          },

          "Transitions et animations": {
            1: {
              intitule: "Framer motion",
              img: framermotion,
              alt: "Framer motion logo",
            },
          },
          "Gestion des routes": {
            1: {
              intitule: "React routeur",
              img: reactrouter,
              alt: "React routeur logo",
            },
          },
          "Gestion des API": {
            1: { intitule: "Axios", img: axios, alt: "Axios logo" },
          },
          "Gestion des langues": {
            1: { intitule: "i18next", img: i18next, alt: "i18next logo" },
          },
          Accessibilit??: {
            1: { intitule: "A11Y", img: a11y, alt: "A11yY logo" },
            2: { intitule: "SEO", img: seo, alt: "SEO logo" },
          },
        },
        "Back-end": {
          "Librairie back-end": {
            1: { intitule: "Firebase", img: firebase, alt: "Firebase logo" },
          },
          "Langage back-end": {
            1: {
              intitule: "Cloud Functions (Node.Js)",
              img: cloudfunction,
              alt: "Cloud Functions logo",
            },
          },
          "Base de donn??es": {
            1: { intitule: "Firestore", img: firestore, alt: "Firestore logo" },
          },
          "Gestion des utilisateurs": {
            1: {
              intitule: "Authentication",
              img: authentication,
              alt: "Authentication logo",
            },
          },
          "Gestion du contenu": {
            1: { intitule: "Storage", img: storage, alt: "Storage logo" },
          },
          H??bergement: {
            1: { intitule: "Hosting", img: hosting, alt: "Hosting logo" },
          },
          "Gestion du paiement": {
            1: { intitule: "Stripe", img: stripe, alt: "Stripe logo" },
          },
          "Analyse KPI": {
            1: {
              intitule: "Analytics",
              img: analytics,
              alt: "Analytics logo",
            },
          },
        },
        Tests: {
          "Librarie de test": {
            1: { intitule: "Jest", img: jest, alt: "Jest logo" },
          },
          "Analyse du code": {
            1: { intitule: "ESLint", img: eslint, alt: "ESLint logo" },
          },
        },
        Configuration: {
          "Gestion des versions": {
            1: { intitule: "Github", img: github, alt: "Github logo" },
          },
          "Cr??ateur d'environnement": {
            1: {
              intitule: "Create react app",
              img: createreactapp,
              alt: "Create react app logo",
            },
          },
          Transcompilateur: {
            1: { intitule: "Babel", img: babel, alt: "Babel logo" },
          },
          Bundler: {
            1: { intitule: "Webpack", img: webpack, alt: "Webpack logo" },
          },
          Pr??processeur: {
            1: { intitule: "PostCSS", img: postcss, alt: "PostCSS logo" },
          },
          "Gestion des paquets": {
            1: { intitule: "NPM", img: npm, alt: "NPM logo" },
          },
        },
        "UX / UI Design": {
          Maquette: {
            1: { intitule: "Figma", img: figma, alt: "Figma logo" },
          },
        },
        M??thodologie: {
          "M??thodes de travail": {
            1: { intitule: "Scrum", img: scrum, alt: "Scrum logo" },
            2: { intitule: "Agile", img: scrum, alt: "Scrum logo" },
            3: {
              intitule: "Pair programming",
              img: pairprogramming,
              alt: "Pair programming logo",
            },
            4: {
              intitule: "Atomic design",
              img: atomicdesign,
              alt: "Atomic design logo",
            },
            5: {
              intitule: "Clean code",
              img: cleancode,
              alt: "Clean code logo",
            },
          },
        },
      },
      images: {
        Accueil: {
          1: { alt: "Page d'accueil de Liome", img: liomehomepage },
        },
        Produit: {
          1: {
            alt: "Page produit de Liome avec personnalisation",
            img: liomeproduct,
          },
          2: {
            alt: "Page produit de Liome avec adresse de livraison",
            img: liomeproduct2,
          },
          3: {
            alt: "Page produit de Liome avec moyen de paiement",
            img: liomeproduct3,
          },
          4: {
            alt: "Page produit de Liome avec r??capitulatif",
            img: liomeproduct4,
          },
        },
        "Mon compte": {
          1: { alt: "Page mon compte de Liome", img: liomeaccount },
        },
        "Ma commande": {
          1: { alt: "Page commande de Liome", img: liomeorder },
        },
      },
      additionalinformations: {
        delivreables: [
          "Web-app responsive",
          "Gestion des paiements avec l'int??gration de l'API Stripe",
          "Gestion des livraisons avec l'int??gration de l'API UPS",
          "Gestion du contenu avec CMS propri??taire",
          "Optimisation SEO",
          "Optimisation de l'accessibilit??",
          "Prototypage Figma",
          "UX/UI Design",
        ],
        projectInformations: {
          client: "Liome",
          clientwebsite: "https://www.liome.fr",
          projectduration: "4 mois",

          credits: {
            "D??veloppeur front-end": {
              1: { name: "Reihane B.", link: ReihaneBSocial },
              2: { name: "Jawed M.", link: JawedMSocial },
            },
            "D??veloppeur back-end": {
              1: { name: "Reihane B.", link: ReihaneBSocial },
            },
            "UX / UI Designer": {
              1: { name: "Reihane B.", link: ReihaneBSocial },
              2: { name: "Jawed M.", link: JawedMSocial },
            },
            "Chef de projet": {
              1: { name: "Reihane B.", link: ReihaneBSocial },
            },
          },
        },
      },
    },

    {
      id: 2,
      url: "liome-3d-artist",
      projectName: "Liome",
      jobTitle: "Artiste 3D",
      firstImage: quarry,
      firstImageAlt: "Bague Quarry dans une grotte",
      secondImage: ancestral3,
      secondImageAlt: "Anneau Ancestral sur marbre",
      buttonTextExternalLink: "En cours de d??veloppement",
      projectDescription:
        "La joaillerie Liome est une entreprise du secteur du luxe qui vend des bijoux pour homme en mat??riaux pr??cieux. La marque utilise des technologies de pointe pour concevoir et fabriquer ses bijoux, afin de garantir la plus haute qualit?? et la plus grande pr??cision possible. Les bijoux Liome sont ??galement ??thiques et respectueux de l'environnement, car ils sont fabriqu??s ?? partir de mat??riaux recycl??s et recyclables.",
      theGoal: "R??aliser des visuels pour le site web",
      theGoalDescription:
        "Les visuels 3D permettent de mieux mettre en valeur les bijoux. Cela permet des les pr??senter sous diff??rents angles et avec diff??rents ??clairages pour montrer leur beaut?? sous tous les angles. Les visuels 3D peuvent ??galement ??tre utilis??s pour mettre en valeur les d??tails des bijoux, ce qui peut ??tre utile pour les clients qui souhaitent en savoir plus sur les bijoux qu'ils envisagent d'acheter.",
      stackSummary: ["Blender", "Photoshop", "Lightroom", "Substance painter"],
      stack: {
        "Cr??ation 3D": {
          "Mod??lisation des bijoux": {
            1: { intitule: "Blender", img: blender, alt: "Blender logo" },
            2: { intitule: "Zbrush", img: zbrush, alt: "Zbrush logo" },
            3: {
              intitule: "Panther 3D",
              img: panther3d,
              alt: "Panther 3D logo",
            },
            4: {
              intitule: "Nomad sculpt",
              img: nomadsculpt,
              alt: "Nomad sculpt logo",
            },
          },
          "Cr??ation des textures": {
            1: {
              intitule: "Substance Painter",
              img: substancepainter,
              alt: "Substance Painter logo",
            },
          },
          "Rendu 3D": {
            1: { intitule: "Keyshot", img: keyshot, alt: "keyshot logo" },
          },
        },
        ??dition: {
          Colorim??trie: {
            1: { intitule: "Lightroom", img: lightroom, alt: "Lightroom logo" },
          },
          "Effets visuels": {
            1: { intitule: "Photoshop", img: photoshop, alt: "Photoshop logo" },
          },
        },
      },
      images: {
        "Bague Quarry": {
          1: { alt: "Bague Quarry dans une grotte", img: quarry },
          2: { alt: "Bague Quarry sur marbre", img: quarry2 },
        },
        "Anneau 92U": {
          1: { alt: "Anneau 92U dans un r??acteur nucl??aire", img: u92 },
          2: { alt: "Anneau 92U sur fond noir", img: u922 },
        },
        "Pendentif Core": {
          1: { alt: "Pendentif Core sortant d'un portail", img: core },
        },
        "Bague Dune": {
          1: { alt: "Bague Dune sur du sable", img: dune },
          2: { alt: "Bague Dune port??e sur l'annulaire", img: dune2 },
        },
        "Anneau Ancestral": {
          1: { alt: "Anneau Ancestral sur marbre", img: ancestral },
          2: { alt: "Anneau Ancestral sur marbre", img: ancestral2 },
          3: { alt: "Anneau Ancestral sur marbre", img: ancestral3 },
        },
        "Anneau Petit prince": {
          1: {
            alt: "Le petit prince porte l'anneau Petit prince",
            img: petitprince,
          },
        },
        "Chevali??re Sealed": {
          1: { alt: "Chevali??re Sealed dans une mine", img: sealed },
          2: { alt: "Chevali??re Sealed sur fond noir", img: sealed2 },
        },
        "Bague Star": {
          1: { alt: "Bague Star sur roche volcanique", img: star },
          2: { alt: "Bague Star sur fond noir", img: star2 },
        },
        "Bague Tear": {
          1: { alt: "Bague Tear pos??e sur une table", img: tear },
        },
      },
      additionalinformations: {
        delivreables: [
          "Mod??lisation 3D de bijoux",
          "Mod??lisation 3D pr??te pour l'impression 3D",
          "D??cors 3D",
        ],

        projectInformations: {
          client: "Liome",
          clientwebsite: "https://www.liome.fr",
          projectduration: "1 an et 2 mois",

          credits: {
            "Artiste 3D": {
              1: { name: "Reihane B.", link: ReihaneBSocial },
            },
          },
        },
      },
    },

    {
      id: 3,
      url: "ultrabook-front-end-developer",
      projectName: "Ultra-book",
      jobTitle: "D??veloppeur front-end",
      firstImage: ultrabookhomepage,
      firstImageAlt: "Accueil de Ultra-book avec recherche",
      secondImage: ultrabookhomepage2,
      secondImageAlt:
        "Accueil de Ultra-book avec call-to-action pour cr??er un portfolio",
      buttonTextExternalLink: "Visiter le site",
      externalLink: "https://ultra-book.com",
      projectDescription:
        "Ultra-book est une plateforme de mise ?? disposition de th??me qui permet aux cr??atifs de tous les niveaux de cr??er un portfolio en ligne en quelques minutes. Plus de 60 000 cr??ateurs ont d??j?? un portfolio h??berg?? en ligne qui leurs permet de partager facilement leurs cr??ations ?? leurs clients et prospects. Le site propose ??galement des outils pour g??rer les contacts et les demandes de devis afin de permettre aux cr??atifs de gagner du temps et de se concentrer sur ce qu'ils font de mieux : cr??er !",
      theGoal: "Am??liorer l'exp??rience utilisateur avec un nouveau design",
      theGoalDescription:
        "Le site web de l'entreprise a ??t?? refait afin d'am??liorer l'exp??rience utilisateur et l'accessibilit??. Le nouveau design est plus moderne et ??pur??, avec des couleurs plus douces et des formes plus arrondies. L'objectif ??tant de rendre la navigation plus intuitive et agr??able. Les utilisateurs pourront trouver plus facilement toutes les informations dont ils ont besoin gr??ce ?? une navigation plus fluide et agr??able.",
      stackSummary: ["HTML", "JS", "A11Y", "Figma"],
      stack: {
        "Front-end": {
          "Langage front-end": {
            1: { intitule: "HTML", img: html, alt: "HTML logo" },
            2: { intitule: "CSS", img: css, alt: "CSS logo" },
            3: {
              intitule: "Javascript",
              img: javascript,
              alt: "Javascript logo",
            },
          },
          Accessibilit??: {
            1: { intitule: "W3C", img: w3c, alt: "W3C logo" },
            2: { intitule: "A11Y", img: a11y, alt: "A11Y logo" },
          },
        },
        "UX / UI Design": {
          Maquette: {
            1: { intitule: "Figma", img: figma, alt: "Figma logo" },
          },
        },
      },
      images: {
        Accueil: {
          1: {
            alt: "Accueil de Ultra-book avec recherche",
            img: ultrabookhomepage,
          },
          2: {
            alt: "Accueil de Ultra-book avec call-to-action pour cr??er un portfolio",
            img: ultrabookhomepage2,
          },
          3: {
            alt: "Accueil de Ultra-book avec les r??seaux sociaux",
            img: ultrabookhomepage3,
          },
        },
        "Mod??les de th??me de portfolio": {
          1: {
            alt: "Portfolio d'un th??me custom de Ultra-book",
            img: ultrabookporfolio,
          },
          2: {
            alt: "Portfolio du th??me ultra-frais de Ultra-book",
            img: ultrabookporfolio2,
          },
        },
      },
      additionalinformations: {
        delivreables: [
          "Am??lioration de l'UX/UI",
          "Am??lioration de l'accessibilit??",
          "Prototypage Figma",
        ],

        projectInformations: {
          client: "Ultra-book",
          clientwebsite: "https://www.ultra-book.com",
          projectduration: "2 mois",

          credits: {
            "D??veloppeur front-end": {
              1: { name: "Reihane B.", link: ReihaneBSocial },
            },
            "UX / UI Designer": {
              1: { name: "Reihane B.", link: ReihaneBSocial },
            },
          },
        },
      },
    },
  ];
}
