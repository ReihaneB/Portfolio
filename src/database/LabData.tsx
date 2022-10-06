import liomewebsite from "../assets/liome-website.png";
import reactLogo from "../assets/react.svg";

export default function LabData(): any {
  return [
    {
      id: 1,
      url: "reihane-b-front-end-developer",
      projectName: "Reihane B.",
      jobTitle: "Front-end developer",
      firstImage: liomewebsite,
      buttonText: "Code du site",
      projectDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt ut proin tortor, condimentum dignissim vitae. Sagittis dolor vel eu rhoncus odio. Ultrices sagittis ac dui sagittis, dui nulla egestas.",
      theGoal: "Augmenter les ventes grâce à une meilleure UX",
      theGoalDescription:
        "Refaire le site de façon à coller au visuel et son identité forte, tout en laissant la possibilité au client de pouvoir modifier le contenu graphique du site chaque année sans revoir la structure.",
      stackSummary: ["React.Js", "Recoil", "TailwindCSS", "Firebase"],
      stack: {
        frontend: {
          frontendframework: {
            1: { intitule: "React.Js", img: reactLogo },
            2: { intitule: "Recoil", img: reactLogo },
          },

          cssframework: { 1: { intitule: "TailwindCSS", img: reactLogo } },
        },

        versioncontrol: {
          control: {
            1: { intitule: "Github", img: reactLogo },
          },
        },
        uxuidesign: {
          graphism: {
            1: { intitule: "Figma", img: reactLogo },
          },
        },
      },
      images: {
        homepage: {
          1: { alt: "Homepage", img: liomewebsite },
          2: { alt: "Homepage", img: liomewebsite },
          3: { alt: "Homepage", img: liomewebsite },
        },
        productPage: {
          1: { alt: "Homepage", img: liomewebsite },
          2: { alt: "Homepage", img: liomewebsite },
          3: { alt: "Homepage", img: liomewebsite },
        },
        accountPage: {
          1: { alt: "Homepage", img: liomewebsite },
          2: { alt: "Homepage", img: liomewebsite },
        },
      },
      additionalinformations: {
        delivreables: ["Web-site", "Prototypage Figma", "UX/UI Design"],
        graphicalcharter: {
          typography: ["Montserrat", "Antic didone"],

          colors: {
            1: { name: "Fond", color: "#282828" },
            2: { name: "Card", color: "#666666" },
            3: { name: "Surlign", color: "#59B5C9" },
          },
        },
        projectInformations: {
          client: "Liome",
          clientwebsite: "https://www.liome.fr",
          projectduration: "6 mois",

          credits: {
            frontenddeveloper: {
              1: { name: "Reihane B.", link: "linkedin.com" },
            },

            uxuidesigner: {
              1: { name: "Reihane B.", link: "linkedin.com" },
            },
          },
        },
      },
    },
  ];
}
