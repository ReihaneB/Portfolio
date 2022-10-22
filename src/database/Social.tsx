import github from "../assets/icon/github.svg";
import linkedin from "../assets/icon/linkedin.svg";
import resume from "../assets/icon/resume.svg";
import email from "../assets/icon/email.svg";

export default function Social(): any {
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
      3: { intitule: "Email", img: email, link: "mailto:hello@reihaneb.fr" },
      4: {
        intitule: "CV",
        img: resume,
        link: "https://firebasestorage.googleapis.com/v0/b/reihaneb-dea94.appspot.com/o/CV_Reihane_B.pdf?alt=media&token=43a38bf6-78d4-4336-a8b5-ed530cdad523",
        alt: "Resume logo",
      },
    },
  ];
}
