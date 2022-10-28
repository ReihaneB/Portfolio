import Logo from "../components/Logo";
import Footer from "../components/Footer";
import WorkOrLab from "../components/WorkOrLab";
import profilePicture from "../assets/profile-picture.png";
import { NavLink, useParams } from "react-router-dom";
import WorkData from "../database/WorkData";
import { useState } from "react";
import LabData from "../database/LabData";
import ContactForm from "../components/ContactForm";
import Social from "../database/Social";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import typescript from "../assets/icon/typescript.svg";
import firebase from "../assets/icon/firebase.svg";
import react from "../assets/icon/react.svg";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const transition: { duration: number; ease: number[] } = {
  duration: 0.3,
  ease: [0.6, 0.01, -0.05, 0.9],
};

export default function Home(): JSX.Element {
  const { id } = useParams<string>();
  const workArr = WorkData();
  const labArr = LabData();
  const social = Social();

  const project = id === "lab" ? labArr : workArr;

  const [isContactFormOpen, setIsContactFormOpen] = useState<boolean>(false);

  return (
    <>
      <Helmet>
        {id === "lab" ? (
          <title>Lab · Reihane B.</title>
        ) : id === "work" ? (
          <title>Work . Reihane B.</title>
        ) : (
          <title>
            Développeur web front-end (React, Typescript, Firebase) · Reihane B.
          </title>
        )}
        {id === "lab" ? (
          <meta
            name="description"
            content="Vous retrouverez ici mes side-projects, expériences et outils que j'ai développé sur mon temps libre et qui ne sont pas encore assez matures pour être intégrées dans mes projets."
          />
        ) : id === "work" ? (
          <meta
            name="description"
            content="Vous retrouverez ici mes projets professionnels, réalisés pour des clients ou des employeurs."
          />
        ) : (
          <meta
            name="description"
            content="Vous recherchez un développeur web front-end ? Vous êtes au bon
            endroit ! Je suis Reihane, développeur web front-end basé à Paris.
            Je suis spécialisé dans le développement d'applications web avec
            React, Typescript et Firebase. Je suis également passionné par le
            design et l'UX/UI."
          />
        )}
        <meta property="og:image" content={profilePicture} />
      </Helmet>
      {isContactFormOpen && (
        <ContactForm close={() => setIsContactFormOpen(!isContactFormOpen)} />
      )}
      <div className="mt-12 lg:flex lg:justify-center mb-36">
        <div className="mx-8 lg:mx-16 lg:w-[1024px]">
          <header>
            <nav className="flex justify-center lg:place-content-between">
              <div className="flex items-center">
                <Logo />
              </div>
              <div className="hidden lg:flex lg:items-center">
                <WorkOrLab />
              </div>
              <div className="hidden lg:flex lg:items-center">
                <NavLink to="/about">
                  <motion.button
                    whileHover={{ scale: 0.95 }}
                    transition={transition}
                    className="bg-blue-500 text-blue-100 rounded-full px-4 py-3"
                  >
                    Voir mon profil
                  </motion.button>
                </NavLink>
              </div>
            </nav>
          </header>
          <main>
            <section>
              <div className="mt-8 lg:mt-28 text-center">
                <h3 className="text-xl lg:text-2xl font-light">Reihane B.</h3>
                <h1 className="text-5xl font-bold mt-4">
                  Développeur front-end
                </h1>
                <h3 className=" text-blue-500 font-light mt-8">
                  <FontAwesomeIcon icon={faLocationArrow} className="mr-4" />
                  Basé à Paris, FR
                </h3>
                <div className="flex justify-center space-x-8 mt-8 lg:mt-16">
                  <img
                    src={typescript}
                    alt="Typescript logo"
                    className="h-8 lg:h-12"
                  />
                  <img
                    src={react}
                    alt="Typescript logo"
                    className="h-8 lg:h-12"
                  />
                  <img
                    src={firebase}
                    alt="Firebase logo"
                    className="h-8 lg:h-12"
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  transition={transition}
                  onClick={() => setIsContactFormOpen(!isContactFormOpen)}
                  className="w-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full  py-3 text-white"
                >
                  Démarrer un projet
                </motion.button>
              </div>
            </section>

            <section className="lg:flex lg:space-x-8 mt-36">
              <NavLink to="/about" className="lg:w-1/2">
                <motion.img
                  whileHover={{ scale: 0.98 }}
                  transition={transition}
                  src={profilePicture}
                  alt="Profile picture of Reihane B."
                  className="rounded-xl w-full shadow-[0_0_5px_rgba(0,0,0,0.1)]"
                />
              </NavLink>
              <div className="lg:w-1/2 lg:flex lg:flex-wrap lg:items-center">
                <div>
                  <ul className="flex flex-wrap justify-center items-center ">
                    {social.map((item) =>
                      Object.values(item).map((item, index) => (
                        <li key={index}>
                          <motion.a
                            whileHover={{ scale: 0.95 }}
                            transition={transition}
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
                          </motion.a>
                        </li>
                      ))
                    )}
                  </ul>
                  <div className="mt-6">
                    <h2>Grand fan de simplicité et d'efficacité</h2>
                    <p className="mt-4">
                      J'aime prendre le temps de rendre chaque projet unique et
                      efficace en apportant une valeur ajoutée aux utilisateurs.
                      Cela me permet de satisfaire au mieux les besoins de
                      chaque personne et de leur offrir une expérience inédite.
                    </p>
                  </div>
                  <NavLink
                    to="/about"
                    className="mt-8 flex justify-center lg:hidden"
                  >
                    <motion.button
                      whileHover={{ scale: 0.98 }}
                      transition={transition}
                      className="bg-blue-500 text-blue-100 rounded-full px-4 py-3"
                    >
                      Voir mon profil
                    </motion.button>
                  </NavLink>
                </div>
              </div>
            </section>
            <section>
              <div className="text-center mt-32">
                {id === "lab" ? (
                  <>
                    <h2 className="text-3xl font-bold text-left lg:text-center">
                      Lab
                    </h2>
                    <div className="flex justify-center">
                      <p className="mt-4 text-left lg:text-center lg:w-[650px]">
                        Vous retrouverez ici mes side-projects, expériences et
                        outils que j'ai développé sur mon temps libre et qui ne
                        sont pas encore assez matures pour être intégrées dans
                        mes projets.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className="text-3xl font-bold text-left lg:text-center">
                      Work
                    </h2>
                    <p className="mt-4 text-left lg:text-center">
                      Vous retrouverez ici mes projets professionnels, réalisés
                      pour des clients ou des employeurs.
                    </p>
                  </>
                )}
              </div>
              <div className="mt-32">
                {project.map((project, index) => (
                  <article key={index}>
                    <NavLink to={`/project/${project.url}`}>
                      <div className="flex flex-nowrap justify-center items-center my-32">
                        <hr className=" border-gray-400 mr-4 w-1/2" />
                        <span className="text-gray-400">{index + 1}</span>
                        <hr className=" border-gray-400 ml-4 w-1/2" />
                      </div>
                      <div>
                        <h2>{project.projectName}</h2>
                        <p>{project.jobTitle}</p>
                        <ul className="flex flex-wrap">
                          {project.stackSummary.map((stack, index) => (
                            <li
                              key={index}
                              className="mt-4 bg-gray-200 px-6 py-2 rounded-xl w-fit mr-4"
                            >
                              {stack}
                            </li>
                          ))}
                        </ul>
                        <motion.img
                          whileHover={{ scale: 0.98 }}
                          transition={transition}
                          src={project.firstImage}
                          alt={project.firstImageAlt}
                          className="mt-6 w-full rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.1)]"
                        />
                      </div>
                    </NavLink>
                  </article>
                ))}
              </div>
            </section>
          </main>
          <hr className="my-36 border-gray-400 lg:hidden" />
          <div className="sticky bottom-8 flex justify-center lg:hidden">
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
