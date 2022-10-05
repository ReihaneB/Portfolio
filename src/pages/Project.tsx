import Logo from "../components/Logo";
import liomeWebsite from "../assets/liome-website.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import reactLogo from "../assets/react.svg";
import WorkData from "../database/WorkData";

export default function Project(): JSX.Element {
  const workArr = WorkData();

  return (
    <div className="mx-16">
      <div className="mt-12 flex justify-center ">
        <NavLink to="/">
          <Logo />
        </NavLink>
      </div>

      {workArr
        .filter((work: any) => work.id === 1)
        .map((project: any, index: number) => (
          <div key={index}>
            <div className="mt-32">
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
            <div className="mt-6">
              <button className="w-full max-w-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full  py-3 text-white">
                {project.buttonText}
              </button>
            </div>
            <h2 className="mt-12">Contexte</h2>
            <p className="mt-4">{project.projectDescription}</p>
            <div className="bg-cyan-100 rounded-xl p-8 mt-16">
              <div className="flex justify-center">
                <div className="bg-white  rounded-full w-fit px-4 py-3 flex items-center justify-center">
                  <h2>
                    <FontAwesomeIcon icon={faCrosshairs} className="mr-2" />
                    L'objectif
                  </h2>
                </div>
              </div>
              <h3 className="mt-4">{project.theGoal}</h3>
              <p className="mt-4">{project.theGoalDescription}</p>
            </div>
            <div className="flex flex-nowrap justify-center items-center my-32">
              <hr className=" border-gray-400 mr-4 w-1/2" />
              <span className="text-gray-400">Stack</span>
              <hr className=" border-gray-400 ml-4 w-1/2" />
            </div>

            {Object.values(project.stack).map((stack: any, index: number) => (
              <div key={index}>
                <h2 className="mt-16">{Object.keys(project.stack)[index]}</h2>

                {Object.values(stack).map((item: any, index: number) => (
                  <div key={index}>
                    <h3 className="mt-8">{Object.keys(stack)[index]} </h3>
                    <div className="flex flex-wrap">
                      {Object.values(item).map((item: any, index: number) => (
                        <div key={index}>
                          <p className="mt-4 bg-gray-200 px-6 py-2 rounded-xl w-fit mr-4 flex">
                            <img src={item.img} className="mr-3 w-5" />
                            {item.intitule}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
            <div className="flex flex-nowrap justify-center items-center my-32">
              <hr className=" border-gray-400 mr-4 w-1/2" />
              <span className="text-gray-400">Images</span>
              <hr className=" border-gray-400 ml-4 w-1/2" />
            </div>
            {Object.values(project.images).map((image: any, index: number) => (
              <div key={index}>
                <h2 className="mt-16">{Object.keys(project.images)[index]}</h2>
                {Object.values(image).map((item: any, index: number) => (
                  <div key={index}>
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="mt-6 w-full rounded-xl"
                    />
                  </div>
                ))}
              </div>
            ))}
            <div className="flex flex-nowrap justify-center items-center my-32">
              <hr className=" border-gray-400 mr-4 w-1/2" />
              <span className="text-gray-400">Informations</span>
              <hr className=" border-gray-400 ml-4 w-1/2" />
            </div>

            {project.additionalinformations.delivreables && (
              <h2 className="mt-16">Livrables</h2>
            )}
            {project.additionalinformations.delivreables &&
              project.additionalinformations.delivreables.map(
                (item: any, index: number) => (
                  <div key={index}>
                    <p className="mt-4">{item}</p>
                  </div>
                )
              )}

            {project.additionalinformations.graphicalcharter && (
              <h2 className="mt-16">Charte graphique</h2>
            )}
            {project.additionalinformations.graphicalcharter.typography && (
              <h3 className="mt-8">Typographie</h3>
            )}

            {project.additionalinformations.graphicalcharter.typography.map(
              (item: any, index: number) => (
                <div key={index}>
                  <p className="mt-4">{item}</p>
                  <p className="mt-4">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                  <p className="">abcdefghijklmnopqrstuvwxyz</p>
                </div>
              )
            )}

            {project.additionalinformations.graphicalcharter.colors && (
              <h3 className="mt-8">Couleurs</h3>
            )}
            <div className="flex flex-wrap">
              {Object.values(
                project.additionalinformations.graphicalcharter.colors
              ).map((item: any, index: number) => (
                <div key={index}>
                  <div className="">
                    <p className="mt-4">{item.name}</p>
                    <div
                      className={`bg-[${item.color}] w-32 h-32 rounded-xl mr-4 mt-4`}
                    ></div>
                    <p className="mt-4">{item.color}</p>
                  </div>
                </div>
              ))}
            </div>

            {project.additionalinformations.projectInformations && (
              <h2 className="mt-16">Informations sur le projet</h2>
            )}
            {project.additionalinformations.projectInformations.client && (
              <div className="mt-4 flex flex-wrap">
                <h4 className="mr-4">Client</h4>
                <p>
                  {project.additionalinformations.projectInformations.client}
                </p>
              </div>
            )}

            {project.additionalinformations.projectInformations
              .clientwebsite && (
              <div className="mt-4 flex flex-wrap">
                <h4 className="mr-4">Site</h4>
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
              </div>
            )}

            {project.additionalinformations.projectInformations
              .projectduration && (
              <div className="mt-4 flex flex-wrap">
                <h4 className="mr-4">Durée</h4>
                <p>
                  {
                    project.additionalinformations.projectInformations
                      .projectduration
                  }
                </p>
              </div>
            )}

            {project.additionalinformations.projectInformations.credits && (
              <h2 className="mt-16">Crédits</h2>
            )}

            {Object.values(
              project.additionalinformations.projectInformations.credits
            ).map((item: any, index: number) => (
              <div key={index}>
                <h4 className="mr-4 mt-4">
                  {
                    Object.keys(
                      project.additionalinformations.projectInformations.credits
                    )[index]
                  }
                </h4>
                <div className="mt-4">
                  {Object.values(item).map((item: any, index: number) => (
                    <div key={index} className="">
                      <a href={item.link}>{item.name}</a>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex flex-nowrap justify-center items-center my-32">
              <hr className=" border-gray-400 mr-4 w-full" />
            </div>
          </div>
        ))}

      <h2 className="text-center">Prenons rendez-vous !</h2>
      <p className="mt-8">
        Réservez un créneau gratuit de 15 min où nous échangerons sur votre
        projet, vos problématiques et comment les résoudre.
      </p>
      <div className="mt-6">
        <button className="w-full max-w-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full  py-3 text-white">
          Réserver une consultation
        </button>
      </div>
      <div className="flex flex-nowrap justify-center items-center my-32">
        <hr className=" border-gray-400 mr-4 w-1/2" />
        <span className="text-gray-400">Projet</span>
        <hr className=" border-gray-400 ml-4 w-1/2" />
      </div>

      <div className="mt-32">
        <h2 className="">Liome</h2>
        <p className="">Front-end developper</p>
        <div className="flex flex-wrap">
          <p className="mt-4 bg-gray-200 px-6 py-2 rounded-xl w-fit mr-4">
            React
          </p>
          <p className="mt-4 bg-gray-200 px-6 py-2 rounded-xl w-fit mr-4">
            TailwindCSS
          </p>
          <p className="mt-4 bg-gray-200 px-6 py-2 rounded-xl w-fit mr-4">
            Recoil
          </p>
          <p className="mt-4 bg-gray-200 px-6 py-2 rounded-xl w-fit mr-4">
            Firebase
          </p>
        </div>
        <img
          src={liomeWebsite}
          alt="Quarry"
          className="mt-6 w-full rounded-xl"
        />
      </div>
    </div>
  );
}
