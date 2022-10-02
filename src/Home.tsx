import Logo from "./components/Logo";
import WorkOrLab from "./components/WorkOrLab";
import reactLogo from "./assets/react.svg";
import profilePicture from "./assets/profile-picture.png";
import quarry from "./assets/decors-quarry.png";
import liomewebsite from "./assets/liome-website.png";
import ultrabook from "./assets/ultrabook.png";

const projectArr = [
  {
    projectName: "Liome",
    jobTitle: "Frontend Developer",
    stack: {
      stackSummary: ["React.Js", "Recoil", "TailwindCSS", "Firebase"],
    },
    firstImage: liomewebsite,
  },
  {
    projectName: "Liome",
    jobTitle: "3D Artist",
    stack: {
      stackSummary: ["Blender", "Photoshop", "Panther 3D"],
    },
    firstImage: quarry,
  },
  {
    projectName: "Ultrabook",
    jobTitle: "Développeur Front-End · Webdesigner",
    stack: {
      stackSummary: ["HTML", "PHP", "Figma"],
    },
    firstImage: ultrabook,
  },
];

export default function Home() {
  return (
    <div className="mx-16">
    <div className="sticky top-[700px] z-10">
    <WorkOrLab />
    </div>
      <div className="mt-12 flex justify-center ">
        <Logo />
      </div>
      <p className="mt-36 text-3xl text-center">
        Bonjour ! Je suis
        <br />
        Reihane B.
        <br />
        <b>Développeur Front-end</b>
      </p>
      <div className="flex justify-center mt-6">
        <img src={reactLogo} className="animate-spin" alt="React logo" />
      </div>
      <div className="mt-6">
        <button className="w-full max-w-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full  py-3 text-white">
          Démarrer un projet
        </button>
      </div>

      <div className="flex justify-center mt-36">
        <img
          src={profilePicture}
          alt="Profile picture of Reihane B."
          className="rounded-xl w-full"
        />
      </div>
      <div className="">
        <p className="mt-6 text-center">
          <a
            href="
https://www.linkedin.com/in/reihaneb/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 bg-blue-100 rounded-full px-4 py-2 mr-2"
          >
            LinkedIn
          </a>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 bg-blue-100 rounded-full px-4 py-2"
          >
            GitHub
          </a>
        </p>
        <div className="mt-6">
          <h2 className="">Jewelry, front web development, luxurytech</h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id
            ut sollicitudin facilisi. Nibh ornare ac adipiscing laoreet. Euismod
            justo sagittis, non pellentesque vitae. Mauris faucibus proin nisi,
            faucibus.
          </p>
        </div>
      </div>

      <div className="mt-32">
        {projectArr.map((project, index: number) => (
          <div key={index}>
            <div className="flex flex-nowrap justify-center items-center my-32">
              <hr className=" border-gray-400 mr-4 w-1/2" />
              <span className="text-gray-400">{index + 1}</span>
              <hr className=" border-gray-400 ml-4 w-1/2" />
            </div>
            <div className="">
              <h2 className="">{project.projectName}</h2>
              <p className="">{project.jobTitle}</p>
              <div className="flex flex-wrap">
                {project.stack.stackSummary.map((stack, index) => (
                  <p
                    key={index}
                    className="mt-4 bg-gray-200 px-6 py-2 rounded-xl w-fit mr-4"
                  >
                    {stack}
                  </p>
                ))}
              </div>
              <img
                src={project.firstImage}
                alt="Quarry"
                className="mt-6 w-full rounded-xl"
              />
            </div>
          </div>
        ))}
        <hr className="my-32 border-gray-400" />
        <span className="flex justify-center">Reihane B.</span>
        
      </div>
    </div>
  );
}
