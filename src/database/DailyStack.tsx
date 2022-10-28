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
import tailwindcss from "../assets/icon/tailwindcss.svg";
import recoil from "../assets/icon/recoil.svg";
import jest from "../assets/icon/jest.svg";
import eslint from "../assets/icon/eslint.svg";
import typescript from "../assets/icon/typescript.svg";
import nodejs from "../assets/icon/nodejs.svg";
import vscode from "../assets/icon/vscode.svg";
import xd from "../assets/icon/xd.svg";
import illustrator from "../assets/icon/illustrator.svg";
import indesign from "../assets/icon/indesign.svg";
import premierepro from "../assets/icon/premierepro.svg";
import aftereffects from "../assets/icon/aftereffects.svg";
import panther3d from "../assets/icon/panther3d.webp";
import nomadsculpt from "../assets/icon/nomadsculpt.webp";
import keyshot from "../assets/icon/keyshot.svg";
import scrum from "../assets/icon/scrum.svg";
import pairprogramming from "../assets/icon/pairprogramming.svg";
import atomicdesign from "../assets/icon/atomicdesign.svg";
import cleancode from "../assets/icon/cleancode.svg";
import next from "../assets/icon/next.svg";
import three from "../assets/icon/three.svg";
import augmentedreality from "../assets/icon/augmentedreality.svg";
import solidity from "../assets/icon/solidity.svg";
import i18next from "../assets/icon/i18next.svg";
import framermotion from "../assets/icon/framermotion.svg";

type DailyStack = {
  [key: string]: {
    [key: number]: {
      intitule: string;
      img: string;
      alt: string;
    };
  };
};

export default function DailyStack(): DailyStack[] {
  return [
    {
      "Front-end": {
        1: { intitule: "React", img: react, alt: "React logo" },
        2: {
          intitule: "TailwindCSS",
          img: tailwindcss,
          alt: "TailwindCSS logo",
        },
        3: { intitule: "Recoil", img: recoil, alt: "Recoil logo" },
        4: { intitule: "Typescript", img: typescript, alt: "Typescript logo" },
        5: { intitule: "Javascript", img: javascript, alt: "Javascript logo" },
        6: { intitule: "HTML", img: html, alt: "HTML logo" },
        7: { intitule: "CSS", img: css, alt: "CSS logo" },
        8: {
          intitule: "Framer Motion",
          img: framermotion,
          alt: "Framer Motion logo",
        },
        9: { intitule: "i18next", img: i18next, alt: "NextJS logo" },
        10: { intitule: "A11Y", img: a11y, alt: "A11Y logo" },
        11: { intitule: "SEO", img: seo, alt: "SEO logo" },
        12: { intitule: "W3C", img: w3c, alt: "W3C logo" },
      },
      "Back-end": {
        1: { intitule: "Firebase", img: firebase, alt: "Firebase logo" },
        2: { intitule: "Node.Js", img: nodejs, alt: "Node.Js logo" },
      },
      Tests: {
        1: { intitule: "EsLint", img: eslint, alt: "EsLint logo" },
        2: { intitule: "Jest", img: jest, alt: "Jest logo" },
      },
      "Gestion des versions": {
        1: { intitule: "Github", img: github, alt: "Github logo" },
      },
      IDE: {
        1: {
          intitule: "Visual Studio Code",
          img: vscode,
          alt: "Visual Studio Code logo",
        },
      },
      "Design 2D": {
        1: { intitule: "Figma", img: figma, alt: "Figma logo" },
        2: { intitule: "XD", img: xd, alt: "Adobe XD logo" },
        3: { intitule: "Photoshop", img: photoshop, alt: "Photoshop logo" },
        4: {
          intitule: "Illustrator",
          img: illustrator,
          alt: "Illustrator logo",
        },
        5: { intitule: "InDesign", img: indesign, alt: "InDesign logo" },
        6: { intitule: "Lightroom", img: lightroom, alt: "Lightroom logo" },
      },
      "Design 3D": {
        1: { intitule: "Blender", img: blender, alt: "Blender logo" },
        2: {
          intitule: "Substance Painter",
          img: substancepainter,
          alt: "Substance Painter logo",
        },
        3: { intitule: "Panther 3D", img: panther3d, alt: "Panther 3D logo" },
        4: {
          intitule: "Nomad sculpt",
          img: nomadsculpt,
          alt: "Nomad sculpt logo",
        },
        5: { intitule: "ZBrush", img: zbrush, alt: "ZBrush logo" },
        6: { intitule: "Keyshot", img: keyshot, alt: "Keyshot logo" },
      },
      "Motion design": {
        1: {
          intitule: "After Effects",
          img: aftereffects,
          alt: "After Effects logo",
        },
        2: {
          intitule: "Premiere Pro",
          img: premierepro,
          alt: "Premiere Pro logo",
        },
      },
      "Méthodes de travail": {
        1: { intitule: "SCRUM", img: scrum, alt: "SCRUM logo" },
        2: { intitule: "Agile", img: scrum, alt: "SCRUM logo" },
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
        5: { intitule: "Clean code", img: cleancode, alt: "Clean code logo" },
      },
      "En cours d'apprentissage": {
        1: { intitule: "Next", img: next, alt: "Next logo" },
        2: { intitule: "Three", img: three, alt: "Three logo" },
        3: {
          intitule: "Réalité augmentée",
          img: augmentedreality,
          alt: "Réalité augmentée logo",
        },
        4: { intitule: "Solidity", img: solidity, alt: "Solidity logo" },
      },
    },
  ];
}
