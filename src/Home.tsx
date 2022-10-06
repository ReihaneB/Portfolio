import Logo from "./components/Logo";
import Footer from "./components/Footer";
import WorkOrLab from "./components/WorkOrLab";
import reactLogo from "./assets/react.svg";
import profilePicture from "./assets/profile-picture.png";
import { NavLink } from "react-router-dom";
import WorkData from "./database/WorkData";
import { useRef } from "react";

export default function Home(): JSX.Element {
  const workArr = WorkData();

  return (
    <>
      <div className="mx-16">
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              id ut sollicitudin facilisi. Nibh ornare ac adipiscing laoreet.
              Euismod justo sagittis, non pellentesque vitae. Mauris faucibus
              proin nisi, faucibus.
            </p>
          </div>
        </div>

        <div className="mt-32">
          {workArr.map((project: any, index: number) => (
            <NavLink to={`/project/${project.id}`} key={index}>
              <div className="flex flex-nowrap justify-center items-center my-32">
                <hr className=" border-gray-400 mr-4 w-1/2" />
                <span className="text-gray-400">{index + 1}</span>
                <hr className=" border-gray-400 ml-4 w-1/2" />
              </div>
              <div className="">
                <h2 className="">{project.projectName}</h2>
                <p className="">{project.jobTitle}</p>
                <div className="flex flex-wrap">
                  {project.stackSummary.map((stack: any, index: any) => (
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
            </NavLink>
          ))}
        </div>
        <hr className="my-36 border-gray-400" />
        <div className="sticky bottom-10 w-full px-16">
          <WorkOrLab />
        </div>
        <hr className="my-36 border-gray-400" />
        <div className="mb-36">
          <Footer />
        </div>
      </div>
    </>
  );
}
