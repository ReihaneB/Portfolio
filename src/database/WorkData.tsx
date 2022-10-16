import quarry from "../assets/decors-quarry.png";
import liomewebsite from "../assets/liome-website.png";
import ultrabook from "../assets/ultrabook.png";
import reactLogo from "../assets/react.svg";

export default function WorkData(): any {
  return [
    {
      id: 1,
      url: "liome-front-end-developer",
      projectName: "Liome",
      jobTitle: "Full-Stack developer",
      firstImage: liomewebsite,
      buttonText: "En cours de développement",
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
          frameworkstatemanagement: {
            1: { intitule: "Recoil", img: reactLogo },
          },
        },
        backend: {
          backendframework: { 1: { intitule: "Firebase", img: reactLogo } },
          backendlanguage: {
            1: { intitule: "Cloud Functions (Node.Js)", img: reactLogo },
          },
          databasemanagement: { 1: { intitule: "Firestore", img: reactLogo } },
          usermanagement: { 1: { intitule: "Authentication", img: reactLogo } },
          contents: { 1: { intitule: "Storage", img: reactLogo } },
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
        delivreables: [
          "Web-site",
          "CMS personnalisé",
          "Prototypage Figma",
          "UX/UI Design",
        ],
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
              2: { name: "Jawed M.", link: "linkedin.com" },
            },
            backenddeveloper: {
              1: { name: "Reihane B.", link: "linkedin.com" },
            },
            uxuidesigner: {
              1: { name: "Reihane B.", link: "linkedin.com" },
              2: { name: "Jawed M.", link: "linkedin.com" },
            },
            projectmanager: {
              1: { name: "Reihane B.", link: "linkedin.com" },
            },
          },
        },
      },
    },
    {
      id: 2,
      url: "liome-3d-artist",
      projectName: "Liome",
      jobTitle: "3D Artist",
      firstImage: quarry,
      buttonText: "En cours de développement",
      projectDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt ut proin tortor, condimentum dignissim vitae. Sagittis dolor vel eu rhoncus odio. Ultrices sagittis ac dui sagittis, dui nulla egestas.",
      theGoal: "Réaliser des visuels pour le site web",
      theGoalDescription:
        "Refaire le site de façon à coller au visuel et son identité forte, tout en laissant la possibilité au client de pouvoir modifier le contenu graphique du site chaque année sans revoir la structure.",
      stackSummary: ["Blender", "Photoshop", "Lightroom", "Panther 3D"],
      stack: {
        creation: {
          jewelmodelisation: {
            1: { intitule: "Panther 3D", img: reactLogo },
            2: { intitule: "Blender", img: reactLogo },
          },
        },
        edition: {
          colorimetry: { 1: { intitule: "Lightroom", img: reactLogo } },
          effects: {
            1: { intitule: "Photoshop", img: reactLogo },
          },
        },
      },
      images: {
        jewelname: {
          1: { alt: "Homepage", img: quarry },
          2: { alt: "Homepage", img: quarry },
          3: { alt: "Homepage", img: quarry },
        },
        jewelnamee: {
          1: { alt: "Homepage", img: quarry },
          2: { alt: "Homepage", img: quarry },
          3: { alt: "Homepage", img: quarry },
        },
      },
      additionalinformations: {
        delivreables: [
          "Modélisation 3D de bijoux",
          "Modélisation 3D prête pour l'impression 3D",
          "Décors 3D",
        ],

        projectInformations: {
          client: "Liome",
          clientwebsite: "https://www.liome.fr",
          projectduration: "1.2 years",

          credits: {
            artist3d: {
              1: { name: "Reihane B.", link: "linkedin.com" },
            },
          },
        },
      },
    },
    {
      id: 3,
      url: "ultrabook-front-end-developer",
      projectName: "Ultrabook",
      jobTitle: "Front-end developer",
      firstImage: ultrabook,
      buttonText: "Visiter le site",
      projectDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt ut proin tortor, condimentum dignissim vitae. Sagittis dolor vel eu rhoncus odio. Ultrices sagittis ac dui sagittis, dui nulla egestas.",
      theGoal: "Améliorer l'expérience utilisateur avec un nouveau design",
      theGoalDescription:
        "Refaire le site de façon à coller au visuel et son identité forte, tout en laissant la possibilité au client de pouvoir modifier le contenu graphique du site chaque année sans revoir la structure.",
      stackSummary: ["HTML", "PHP", "Figma"],
      stack: {
        frontend: {
          frontendlanguage: {
            1: { intitule: "HTML", img: reactLogo },
          },
          csslanguage: {
            1: { intitule: "CSS vanilla", img: reactLogo },
          },
        },
        backend: {
          backendlanguage: {
            1: { intitule: "PHP", img: reactLogo },
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
          1: { alt: "Homepage", img: ultrabook },
          2: { alt: "Homepage", img: ultrabook },
          3: { alt: "Homepage", img: ultrabook },
        },
        productPage: {
          1: { alt: "Homepage", img: ultrabook },
          2: { alt: "Homepage", img: ultrabook },
          3: { alt: "Homepage", img: ultrabook },
        },
      },
      additionalinformations: {
        delivreables: [
          "Amélioration de l'UX/UI",
          "Prototypage Figma",
          "UX/UI Design",
        ],
        graphicalcharter: {
          typography: ["Montserrat", "Antic didone"],

          colors: {
            1: { name: "Fond", color: "#282828" },
            2: { name: "Card", color: "#666666" },
            3: { name: "Surlign", color: "#59B5C9" },
          },
        },

        projectInformations: {
          client: "Ultrabook",
          clientwebsite: "https://www.ultra-book.com/",
          projectduration: "2 months",

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

    //
  ];
}
