import Logo from "../components/Logo";
import { NavLink, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import WorkData from "../database/WorkData";
import Footer from "../components/Footer";
import LabData from "../database/LabData";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const transition: { duration: number; ease: number[] } = {
  duration: 0.3,
  ease: [0.6, 0.01, -0.05, 0.9],
};

export default function Project(): JSX.Element {
  const { id } = useParams<string>();
  const workArr = WorkData();
  const labArr = LabData();

  const workExist = workArr.filter((work) => work.url === id);
  const labExist = labArr.filter((work) => work.url === id);
  const isLabActive: boolean = labExist.length > 0 && true;

  const actualWorkProjectID: number =
    workArr.findIndex((projectID) => projectID.url === id) + 1;
  const nextWorkProjectID: number =
    actualWorkProjectID < workArr.length ? actualWorkProjectID + 1 : 1;

  const actualLabProjectID: number =
    workArr.findIndex((projectID) => projectID.url === id) + 1;
  const nextLabProjectID: number =
    actualLabProjectID < labArr.length ? actualLabProjectID + 1 : 1;

  const projects = [...workExist, ...labExist];

  const nextproject =
    isLabActive && labArr.length > 1
      ? labArr
      : !isLabActive && workArr.length > 1
      ? workArr
      : null;

  return (
    <div className="mt-12 lg:flex lg:justify-center mb-36">
      <div className="mx-8 lg:mx-16 lg:w-[1024px]">
        <header>
          <nav className="flex justify-center ">
            <NavLink to={isLabActive ? "/lab" : "/work"}>
              <Logo />
            </NavLink>
          </nav>
        </header>

        <main>
          {projects.map((project, index) => (
            <article key={index}>
              <Helmet>
                <title>
                  {project.projectName} - {project.jobTitle} · Reihane B.
                </title>
                <meta name="description" content={project.projectDescription} />
                <meta property="og:image" content={project.firstImage} />
              </Helmet>
              <header className="mt-8 lg:mt-28">
                <h2 className="">{project.projectName}</h2>
                <p className="">{project.jobTitle}</p>
                <div className="flex place-content-between">
                  <ul className="flex flex-wrap ">
                    {project.stackSummary.map((stack, index) => (
                      <li
                        key={index}
                        className="mt-4 bg-gray-200 px-6 py-2 rounded-xl w-fit mr-4"
                      >
                        {stack}
                      </li>
                    ))}
                  </ul>
                  <div className="hidden lg:flex lg:justify-end lg:items-end">
                    {project.externalLink ? (
                      <motion.a
                        whileHover={{ scale: 0.95 }}
                        transition={transition}
                        href={project.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full  py-3 text-white"
                      >
                        {project.buttonTextExternalLink}
                      </motion.a>
                    ) : (
                      <div className="border-blue-200 px-8 cursor-not-allowed text-transparent border-2 bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full py-3 ">
                        {project.buttonTextExternalLink}
                      </div>
                    )}
                  </div>
                </div>
                <img
                  src={project.firstImage}
                  alt={project.firstImageAlt}
                  className="mt-6 w-full rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.1)]"
                />
                <div className="mt-6 flex justify-center lg:hidden">
                  {project.externalLink ? (
                    <motion.a
                      whileHover={{ scale: 0.95 }}
                      transition={transition}
                      href={project.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full  py-3 text-white"
                    >
                      {project.buttonTextExternalLink}
                    </motion.a>
                  ) : (
                    <div className="border-blue-200 px-8 cursor-not-allowed text-transparent border-2 bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full py-3 ">
                      {project.buttonTextExternalLink}
                    </div>
                  )}
                </div>
              </header>
              <main>
                <section className="lg:grid lg:grid-cols-[350px_1fr]">
                  <div>
                    <h2 className="mt-12">Contexte</h2>
                    <p className="mt-4">{project.projectDescription}</p>
                    <div className="bg-cyan-100 rounded-xl p-8 mt-16">
                      <div className="flex justify-center">
                        <div className="bg-white  rounded-full w-fit px-4 py-3 flex items-center justify-center">
                          <h2>
                            <FontAwesomeIcon
                              icon={faCrosshairs}
                              className="mr-2"
                            />
                            L'objectif
                          </h2>
                        </div>
                      </div>
                      <h3 className="mt-4">{project.theGoal}</h3>
                      <p className="mt-4">{project.theGoalDescription}</p>
                    </div>
                  </div>
                  <div className="hidden lg:ml-8 lg:flex lg:items-center">
                    <img
                      src={project.secondImage}
                      alt={project.secondImageAlt}
                      className="mt-6 w-full rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.1)]"
                    />
                  </div>
                </section>
                <section>
                  <div className="flex flex-nowrap justify-center items-center my-32">
                    <hr className=" border-gray-400 mr-4 w-1/2" />
                    <span className="text-gray-400">Stack</span>
                    <hr className=" border-gray-400 ml-4 w-1/2" />
                  </div>
                  {Object.values(project.stack).map((stack, index) => (
                    <div key={index}>
                      <h2 className="mt-16">
                        {Object.keys(project.stack)[index]}
                      </h2>
                      <div className="lg:flex lg:flex-wrap">
                        {Object.values(stack).map((item, index) => (
                          <div key={index} className="lg:mr-16 mt-8">
                            <h3>{Object.keys(stack)[index]} </h3>
                            <ul className="flex flex-wrap">
                              {Object.values(item).map((item, index) => (
                                <li
                                  key={index}
                                  className="mt-4 bg-gray-200 px-6 py-2 rounded-xl w-fit mr-4 flex items-center"
                                >
                                  <img
                                    alt={item.alt}
                                    src={item.img}
                                    className="mr-3 h-5 w-5"
                                  />
                                  {item.intitule}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </section>
                <section>
                  <div className="flex flex-nowrap justify-center items-center my-32">
                    <hr className=" border-gray-400 mr-4 w-1/2" />
                    <span className="text-gray-400">Wireframes</span>
                    <hr className=" border-gray-400 ml-4 w-1/2" />
                  </div>
                  {Object.values(project.images).map((image, index) => (
                    <div key={index}>
                      <h2 className="mt-16">
                        {Object.keys(project.images)[index]}
                      </h2>
                      {Object.values(image).map((item, index) => (
                        <img
                          key={index}
                          src={item.img}
                          alt={item.alt}
                          className="mt-6 w-full rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.1)]"
                        />
                      ))}
                    </div>
                  ))}
                </section>
                <section>
                  <div className="flex flex-nowrap justify-center items-center my-32">
                    <hr className=" border-gray-400 mr-4 w-1/2" />
                    <span className="text-gray-400">Informations</span>
                    <hr className=" border-gray-400 ml-4 w-1/2" />
                  </div>
                  {project.additionalinformations.delivreables && (
                    <h2 className="mt-16">Livrables</h2>
                  )}
                  {project.additionalinformations.delivreables && (
                    <ul>
                      {project.additionalinformations.delivreables.map(
                        (item, index) => (
                          <li key={index} className="mt-4">
                            {item}
                          </li>
                        )
                      )}
                    </ul>
                  )}
                  {project.additionalinformations.projectInformations && (
                    <h2 className="mt-16">Informations sur le projet</h2>
                  )}
                  <div className="flex flex-wrap">
                    {project.additionalinformations.projectInformations
                      .client && (
                      <div className="mt-4  mr-16">
                        <h4 className="">Client</h4>
                        <p className="mt-4">
                          {
                            project.additionalinformations.projectInformations
                              .client
                          }
                        </p>
                      </div>
                    )}
                    {project.additionalinformations.projectInformations
                      .clientwebsite && (
                      <div className="mt-4  mr-16">
                        <h4 className="">Site</h4>
                        <p className="mt-4">
                          <a
                            href={
                              project.additionalinformations.projectInformations
                                .clientwebsite
                            }
                          >
                            {project.additionalinformations.projectInformations.clientwebsite.replace(
                              "https://www.",
                              ""
                            )}
                          </a>
                        </p>
                      </div>
                    )}
                    {project.additionalinformations.projectInformations
                      .projectduration && (
                      <div className="mt-4 ">
                        <h4 className="">Durée</h4>
                        <p className="mt-4">
                          {
                            project.additionalinformations.projectInformations
                              .projectduration
                          }
                        </p>
                      </div>
                    )}
                  </div>
                  {project.additionalinformations.projectInformations
                    .credits && <h2 className="mt-16">Crédits</h2>}
                  <ul className="flex flex-wrap">
                    {Object.values(
                      project.additionalinformations.projectInformations.credits
                    ).map((item, index) => (
                      <li key={index} className="mr-16">
                        <h4 className="mr-4 mt-4">
                          {
                            Object.keys(
                              project.additionalinformations.projectInformations
                                .credits
                            )[index]
                          }
                        </h4>
                        <div className="mt-4">
                          {Object.values(item).map((item, index) => (
                            <div key={index} className="">
                              <a href={item.link}>{item.name}</a>
                            </div>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
                {nextproject
                  ? nextproject
                      .filter((work) => work.id === nextWorkProjectID)
                      .map((project, index) => (
                        <NavLink to={`/project/${project.url}`} key={index}>
                          <div className="flex flex-nowrap justify-center items-center my-32">
                            <hr className=" border-gray-400 mr-4 w-1/2" />
                            <span className="text-gray-400 whitespace-nowrap ">
                              Projet suivant
                            </span>
                            <hr className=" border-gray-400 ml-4 w-1/2" />
                          </div>
                          <div>
                            <div className="mt-32">
                              <h2 className="">{project.projectName}</h2>
                              <p className="">{project.jobTitle}</p>
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
                          </div>
                        </NavLink>
                      ))
                  : null}
              </main>
            </article>
          ))}
        </main>
        <Footer />
      </div>
    </div>
  );
}
