import Logo from "../components/Logo";
import Footer from "../components/Footer";
import WorkOrLab from "../components/WorkOrLab";
import profilePicture from "../assets/profile-picture.png";
import { NavLink, useParams } from "react-router-dom";
import WorkData from "../database/WorkData";
import { useRef, useState } from "react";
<<<<<<< Updated upstream:src/Home.tsx
import LabData from "./database/LabData";
import ContactForm from "./components/ContactForm";
=======
import LabData from "../database/LabData";
import ContactForm from "../components/ContactForm";
import Social from "../database/Social";
import react from "../assets/skills/react.json";
import Lottie from "react-lottie-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import typescript from "../assets/icon/typescript.svg";
import firebase from "../assets/icon/firebase.svg";
import tailwindcss from "../assets/icon/tailwindcss.svg";
>>>>>>> Stashed changes:src/pages/Home.tsx

export default function Home(): JSX.Element {
  const { id } = useParams();
  const workArr = WorkData();
  const labArr = LabData();

  const [isContactFormOpen, setIsContactFormOpen] = useState<boolean>(false);

  return (
    <>
      {isContactFormOpen && (
        <ContactForm close={() => setIsContactFormOpen(!isContactFormOpen)} />
      )}
<<<<<<< Updated upstream:src/Home.tsx
      <div className="mx-16">
        <div className="pt-12 flex justify-center ">
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
          <button
            onClick={() => setIsContactFormOpen(!isContactFormOpen)}
            className="w-full max-w-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full  py-3 text-white"
          >
            Démarrer un projet
          </button>
        </div>

        <NavLink to="/about">
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
        </NavLink>

        <div className="mt-32">
          {id === "lab"
            ? labArr.map((project: any, index: number) => (
                <NavLink to={`/project/${project.url}`} key={index}>
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
=======
      <div className="mt-12 lg:flex lg:justify-center mb-36">
        <div className="mx-16 lg:w-[1024px]">
          <header className="flex justify-center lg:place-content-between">
            <Logo />
            <div className="hidden lg:flex lg:items-center">
              <WorkOrLab />
            </div>
            <div className="hidden lg:flex lg:items-center">
              <NavLink to="/about">À propos</NavLink>
            </div>
          </header>

          <div className="mt-28 text-center">
            <h3 className="text-xl lg:text-2xl font-light">Reihane B.</h3>
            <h1 className="text-5xl font-bold mt-4">Développeur front-end</h1>
            <h3 className=" text-blue-300 font-light mt-8">
              <FontAwesomeIcon icon={faLocationArrow} className="mr-4" />
              Basé à Paris, FR
            </h3>
            <div className="flex justify-center space-x-8 mt-16 animate-pulse">
              <img
                src={typescript}
                alt="Typescript logo"
                className="h-8 lg:h-12"
              />
              <Lottie
                loop
                animationData={react}
                play
                className="h-8 lg:h-12 "
              />
              <img src={firebase} alt="Firebase logo" className="h-8 lg:h-12" />
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setIsContactFormOpen(!isContactFormOpen)}
              className="w-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full  py-3 text-white"
            >
              Démarrer un projet
            </button>
          </div>

          <div className="lg:flex lg:space-x-8 mt-36">
            <NavLink to="/about" className="lg:w-1/2">
              <img
                src={profilePicture}
                alt="Profile picture of Reihane B."
                className="rounded-xl w-full "
              />
            </NavLink>
            <div className="lg:w-1/2 lg:flex lg:flex-wrap lg:items-center">
              <div className="">
                <p className="flex flex-wrap justify-center items-center ">
                  {social.map((item: any) =>
                    Object.values(item).map((item: any, index: number) => (
                      <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-500 bg-blue-100 rounded-full px-4 mt-4 py-2 mr-2 flex flex-nowrap"
                      >
                        <img
                          src={item.img}
                          alt="React logo"
                          className="w-4 mr-2"
                        />
                        {item.intitule}
                      </a>
                    ))
                  )}
                </p>
                <div className="mt-6">
                  <h2 className="">Grand fan de simplicité et d'efficacité</h2>
                  <p className="mt-4">
                    J'aime prendre le temps de rendre chaque projet unique et
                    efficace en apportant une valeur ajoutée aux utilisateurs.
                    Cela me permet de satisfaire au mieux les besoins de chaque
                    personne et de leur offrir une expérience inédite.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-32">
            {id === "lab"
              ? labArr.map((project: any, index: number) => (
                  <NavLink to={`/project/${project.url}`} key={index}>
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
                ))
              : workArr.map((project: any, index: number) => (
                  <NavLink to={`/project/${project.url}`} key={index}>
                    <div className="flex flex-nowrap justify-center items-center my-32">
                      <hr className=" border-gray-400 mr-4 w-1/2" />
                      <span className="text-gray-400">{index + 1}</span>
                      <hr className=" border-gray-400 ml-4 w-1/2" />
>>>>>>> Stashed changes:src/pages/Home.tsx
                    </div>
                    <img
                      src={project.firstImage}
                      alt="Quarry"
                      className="mt-6 w-full rounded-xl"
                    />
                  </div>
                </NavLink>
              ))
            : workArr.map((project: any, index: number) => (
                <NavLink to={`/project/${project.url}`} key={index}>
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
<<<<<<< Updated upstream:src/Home.tsx
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
=======
                  </NavLink>
                ))}
          </div>
          <hr className="my-36 border-gray-400 lg:hidden" />
          <div className="sticky bottom-10 flex justify-center lg:hidden">
            <WorkOrLab />
          </div>
          <div className="">
            <Footer />
          </div>
>>>>>>> Stashed changes:src/pages/Home.tsx
        </div>
      </div>
    </>
  );
}
