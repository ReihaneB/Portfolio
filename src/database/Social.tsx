import github from "../assets/icon/github.svg";
import linkedin from "../assets/icon/linkedin.svg";
import resume from "../assets/icon/resume.svg";
import email from "../assets/icon/email.svg";

type Social = {
  [key: number]: { intitule: string; img: string; link: string; alt: string };
};

export default function Social(): Social[] {
  return [
    {
      1: {
        intitule: "Github",
        img: github,
        link: "https://github.com/ReihaneB",
        alt: "Github logo",
      },
      2: {
        intitule: "LinkedIn",
        img: linkedin,
        link: "https://www.linkedin.com/in/reihaneb/",
        alt: "LinkedIn logo",
      },
      3: {
        intitule: "Email",
        img: email,
        link: "mailto:hello@reihaneb.fr",
        alt: "Email logo",
      },
      4: {
        intitule: "CV",
        img: resume,
        link: "https://firebasestorage.googleapis.com/v0/b/reihaneb-dea94.appspot.com/o/CV_Reihane_B.pdf?alt=media&token=35c75f4c-d64e-457f-8076-a872754b4755",
        alt: "Resume logo",
      },
    },
  ];
}
