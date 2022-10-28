import liomewebsite from "../assets/liome-website.png";
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
import yarn from "../assets/icon/yarn.svg";
import vite from "../assets/icon/vite.svg";
import typescript from "../assets/icon/typescript.svg";

// import reihaneb wireframes

import reihanebhomepage1 from "../assets/reihane-b-front-end-developer/homepage/reihaneb-homepage-1.webp";
import reihanebhomepage2 from "../assets/reihane-b-front-end-developer/homepage/reihaneb-homepage-2.webp";
import reihanebhomepage3 from "../assets/reihane-b-front-end-developer/homepage/reihaneb-homepage-3.webp";
import reihanebfooter from "../assets/reihane-b-front-end-developer/footer/reihaneb-footer.webp";
import reihanebabout1 from "../assets/reihane-b-front-end-developer/about/reihaneb-about-1.webp";
import reihanebabout2 from "../assets/reihane-b-front-end-developer/about/reihaneb-about-2.webp";
import reihanebabout3 from "../assets/reihane-b-front-end-developer/about/reihaneb-about-3.webp";
import reihanebproject1 from "../assets/reihane-b-front-end-developer/project/reihaneb-project-1.webp";
import reihanebproject2 from "../assets/reihane-b-front-end-developer/project/reihaneb-project-2.webp";
import reihanebproject3 from "../assets/reihane-b-front-end-developer/project/reihaneb-project-3.webp";
import reihanebproject4 from "../assets/reihane-b-front-end-developer/project/reihaneb-project-4.webp";
import reihanebproject5 from "../assets/reihane-b-front-end-developer/project/reihaneb-project-5.webp";

type LabData = {
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

export default function LabData(): LabData[] {
  const ReihaneBSocial = "https://github.com/ReihaneB";

  return [
    {
      id: 1,
      url: "reihane-b-front-end-developer",
      projectName: "Reihane B.",
      jobTitle: "Développeur Front-End",
      firstImage: reihanebhomepage1,
      firstImageAlt: "Page d'accueil de Reihane B.",
      secondImage: reihanebabout1,
      secondImageAlt: "Page à propos de Reihane B.",
      buttonTextExternalLink: "Code du site sur GitHub",
      externalLink: "https://github.com/ReihaneB/Portfolio",
      projectDescription:
        "Moi même. Reihane, 23 ans, anciennement chef de projet digital, désormais développeur React front-end. Mes compétences en développement web s'étendent et j'ai besoin  d'un portfolio professionnel pour présenter mes travaux à des clients potentiels.",
      theGoal: "Créer une présence en ligne grâce à un ortfolio",
      theGoalDescription:
        "Présenter un portfolio interactif en ligne peut être un moyen efficace de montrer mon travail à un large public. Cela peut également m'aider à me démarquer des autres candidats lorsque je postule pour des emplois. Il me permet de présenter mes compétences et mon expérience de manière interactive et attrayante. De plus, cela me permet de contrôler la façon dont mon travail est visionné grâce à des analyses KPI.",
      stackSummary: ["React", "Typescript", "TailwindCSS"],
      stack: {
        "Front-end": {
          "Librairie front-end": {
            1: { intitule: "React", img: react, alt: "React logo" },
          },
          "Langage front-end": {
            1: {
              intitule: "Typescript",
              img: typescript,
              alt: "Typescript logo",
            },
          },
          "Librairie CSS": {
            1: {
              intitule: "TailwindCSS",
              img: tailwindcss,
              alt: "TailwindCSS logo",
            },
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
          Accessibilité: {
            1: { intitule: "A11Y", img: a11y, alt: "A11yY logo" },
            2: { intitule: "SEO", img: seo, alt: "SEO logo" },
          },
        },
        "Back-end": {
          Hébergement: {
            1: { intitule: "Hosting", img: hosting, alt: "Hosting logo" },
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
          "Créateur d'environnement": {
            1: {
              intitule: "Vite",
              img: vite,
              alt: "Vite logo",
            },
          },
          Transcompilateur: {
            1: { intitule: "Babel", img: babel, alt: "Babel logo" },
          },
          Préprocesseur: {
            1: { intitule: "PostCSS", img: postcss, alt: "PostCSS logo" },
          },
          "Gestion des paquets": {
            1: { intitule: "NPM", img: npm, alt: "NPM logo" },
            2: { intitule: "Yarn", img: yarn, alt: "Yarn logo" },
          },
        },
        "UX / UI Design": {
          Maquette: {
            1: { intitule: "Figma", img: figma, alt: "Figma logo" },
          },
        },
        Méthodologie: {
          "Méthodes de travail": {
            1: {
              intitule: "Atomic design",
              img: atomicdesign,
              alt: "Atomic design logo",
            },
            2: {
              intitule: "Clean code",
              img: cleancode,
              alt: "Clean code logo",
            },
          },
        },
      },
      images: {
        Accueil: {
          1: { alt: "Page d'accueil de Reihane B.", img: reihanebhomepage1 },
          2: { alt: "Page d'accueil de Reihane B.", img: reihanebhomepage2 },
          3: { alt: "Page d'accueil de Reihane B.", img: reihanebhomepage3 },
        },
        Projets: {
          1: { alt: "Page projet de Reihane B.", img: reihanebproject1 },
          2: { alt: "Page projet de Reihane B.", img: reihanebproject2 },
          3: { alt: "Page projet de Reihane B.", img: reihanebproject3 },
          4: { alt: "Page projet de Reihane B.", img: reihanebproject4 },
          5: { alt: "Page projet de Reihane B.", img: reihanebproject5 },
        },
        "À propos": {
          1: { alt: "Page à propos de Reihane B.", img: reihanebabout1 },
          2: { alt: "Page à propos de Reihane B.", img: reihanebabout2 },
          3: { alt: "Page à propos de Reihane B.", img: reihanebabout3 },
        },
        Footer: {
          1: { alt: "Footer de Reihane B.", img: reihanebfooter },
        },
      },
      additionalinformations: {
        delivreables: [
          "Web-site responsive",
          "Optimisation SEO",
          "Optimisation de l'accessibilité",
          "Prototypage Figma",
          "UX/UI Design",
        ],
        projectInformations: {
          client: "Reihane B.",
          clientwebsite: "https://www.reihaneb.fr",
          projectduration: "2 semaines",

          credits: {
            "Développeur front-end": {
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
