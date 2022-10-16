import Logo from "./components/Logo";
import Footer from "./components/Footer";
import WorkOrLab from "./components/WorkOrLab";
import reactLogo from "./assets/react.svg";
import profilePicture from "./assets/profile-picture.png";
import { NavLink, useParams } from "react-router-dom";
import WorkData from "./database/WorkData";
import { useRef, useState } from "react";
import LabData from "./database/LabData";
import ContactForm from "./components/ContactForm";
import Social from "./database/Social";

export default function Home(): JSX.Element {
  const { id } = useParams();
  const workArr = WorkData();
  const labArr = LabData();
  const social = Social();

  const [isContactFormOpen, setIsContactFormOpen] = useState<boolean>(false);

  return (
    <>
      {isContactFormOpen && (
        <ContactForm close={() => setIsContactFormOpen(!isContactFormOpen)} />
      )}
      <div className="mt-12 lg:flex lg:justify-center mb-36">
        <div className="mx-16 lg:w-[1024px]">

          
          <header className="flex justify-center lg:place-content-between">
              <Logo />
        <div className="hidden lg:flex lg:items-center">
          <WorkOrLab />
        </div>
        <div className="hidden lg:flex lg:items-center">
          <NavLink to="/about">
          À propos
          </NavLink>
        </div>
          </header>



          <p className="mt-36 text-3xl text-center lg:text-5xl">
            Bonjour ! Je suis
            <br />
            Reihane B.
            <br />
            <b>Développeur Front-end</b>
          </p>
          <div className="flex justify-center mt-6">
            <img src={reactLogo} className="animate-spin" alt="React logo" />
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
                <img src={item.img} alt="React logo" className="w-4 mr-2" />
                {item.intitule}
              </a>
            ))
          )}
                </p>
                <div className="mt-6">
                  <h2 className="">Grand fan de simplicité et d'efficacité</h2>
                  <p className="mt-4">
                  J'aime prendre le temps de rendre chaque projet unique et efficace
            en apportant une valeur ajoutée aux utilisateurs. Cela me permet de
            satisfaire au mieux les besoins de chaque personne et de leur offrir
            une expérience inédite.
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
                        className="mt-6 rounded-xl"
                      />
                    </div>
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
        </div>
      </div>
    </>
  );
}
