import Logo from "../components/Logo";
import profilePicture from "../assets/profile-picture.png";
import DailyStack from "../database/DailyStack";
import Footer from "../components/Footer";
import { NavLink, useNavigate } from "react-router-dom";
import Social from "../database/Social";
import Skills from "../database/Skills";
import WorkData from "../database/WorkData";
import Lottie from "react-lottie-player";

export default function About(): JSX.Element {
  const dailyStack = DailyStack();
  const social = Social();
  const skills = Skills();
  const work = WorkData();

  const navigate = useNavigate();

  return (
    <div>
      <div className="mt-12 mb-36 lg:flex lg:justify-center">
        <div className="mx-8 lg:mx-16 lg:w-[1024px]">
          <div onClick={() => navigate(-1)} className="flex justify-center ">
            <Logo />
          </div>
          <div className="lg:flex lg:place-content-between mt-8 lg:mt-28">
            <div>
              <h2>Reihane B.</h2>
              <p>Basé à Paris</p>
            </div>
            <div className="hidden lg:flex lg:flex-wrap lg:justify-end lg:items-end">
              <p className="flex flex-wrap">
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
            </div>
          </div>
          <div className="lg:flex lg:space-x-8 mt-8">
            <div className="lg:w-1/2 lg:flex lg:items-center">
              <img
                src={profilePicture}
                alt="Profile picture of Reihane B."
                className="rounded-xl w-full "
              />
            </div>
            <div className="lg:w-1/2 lg:flex lg:items-center">
              <div className="">
                <p className="flex flex-wrap justify-center items-center lg:hidden">
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
                          alt={item.alt}
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
                  <p className="mt-4">
                    Pour moi, il est important que chaque utilisateur se sente
                    concerné par le projet et y trouve son compte. Je m'efforce
                    donc de rendre chaque projet le plus simple et efficace
                    possible.
                  </p>
                  <p className="mt-4">
                    En prenant le temps de bien comprendre les besoins de
                    chacun, je peux créer un projet sur-mesure qui leur
                    apportera une vraie plus-value. C'est ce qui me motive au
                    quotidien et me permet de donner le meilleur de moi-même
                    pour chaque projet.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            {/* <div className="bg-cyan-100 rounded-xl p-8 mt-16">
              <div className="flex justify-center">
                <div className="bg-white  rounded-full w-fit px-4 py-3 flex items-center justify-center">
                  <h2 className="text-center">3 choses à mon sujet</h2>
                </div>
              </div>
              <div className="flex justify-center space-x-8 mt-16">
                <div className="w-20 h-20 rounded-full bg-white flex justify-center items-center">
                  <FontAwesomeIcon icon={faRing} className="w-8" />
                </div>
                <div className="w-20 h-20 rounded-full bg-white flex justify-center items-center"></div>
                <div className="w-20 h-20 rounded-full bg-white flex justify-center items-center"></div>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-56 h-56 rounded-xl bg-white my-16"></div>
              </div>
              <div>
                <h3 className="mt-4">Passionné de joaillerie</h3>
                <p className="mt-4">
                  Je passe mon temps libre à concevoir de nouveaux joyaux. J'aime
                  utiliser des gemmes et métaux précieux pour créer des bijoux
                  uniques. Je prends beaucoup de plaisir à travailler sur de
                  nouveaux projets et à voir les pièces se transformer sous mes
                  yeux.
                </p>
              </div>
            </div> */}
            <div className="flex flex-nowrap justify-center items-center my-32">
              <hr className=" border-gray-400 mr-4 w-1/2" />
              <span className="text-gray-400 whitespace-nowrap">
                Mes outils au quotidien
              </span>
              <hr className=" border-gray-400 ml-4 w-1/2" />
            </div>
            {Object.values(dailyStack).map((stack: any, index: number) => (
              <div key={index}>
                {Object.values(stack).map((item: any, index: number) => (
                  <div key={index}>
                    <h2 className="mt-16">{Object.keys(stack)[index]} </h2>
                    <div className="flex flex-wrap">
                      {Object.values(item).map((item: any, index: number) => (
                        <div key={index}>
                          <p className="mt-4 bg-gray-200 px-6 py-2 rounded-xl w-fit mr-4 flex items-center">
                            <img
                              alt={item.alt}
                              src={item.img}
                              className="mr-3 h-5 w-5"
                            />
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
              <span className="text-gray-400">Compétences</span>
              <hr className=" border-gray-400 ml-4 w-1/2" />
            </div>
            <h2 className="text-center">Ce que je peux faire pour vous</h2>
            <div className="flex flex-wrap justify-center">
              {skills.map((item: any) =>
                Object.values(item.whaticandoforyou).map(
                  (item: any, index: number) => (
                    <div
                      key={index}
                      className=" bg-blue-100  lg:w-[370px] rounded-xl p-8 mt-16 lg:mx-8 lg:flex lg:flex-wrap lg:place-content-between"
                    >
                      <div>
                        <Lottie
                          loop
                          animationData={item.img}
                          play
                          className="h-24 lg:h-40"
                        />
                        <h3 className="mt-4">{item.intitule}</h3>
                        <p className="mt-4">{item.description}</p>
                      </div>
                      <div>
                        <div className="flex justify-center">
                          <h4 className="bg-white w-fit px-8 py-3 mt-8 rounded-full flex justify-center items-center">
                            Livrables
                          </h4>
                        </div>
                        <ul className="mt-4 ">
                          {item.livrables.map((item: any, index: number) => (
                            <li
                              key={index}
                              className="bg-white p-4 mt-4 rounded-xl"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                )
              )}
            </div>
            <h2 className="mt-16 text-center">
              Contrats pour lesquelles je pourrais être interessé
            </h2>
            <div className="flex flex-wrap justify-center">
              {skills.map((item: any) =>
                Object.values(item.contractinterested).map((item: any) => (
                  <p
                    key={item}
                    className="mt-4 bg-gray-200 px-6 py-2 rounded-xl w-fit mr-4 flex"
                  >
                    {item}
                  </p>
                ))
              )}
            </div>
            <div className="flex flex-nowrap justify-center items-center my-32">
              <hr className=" border-gray-400 mr-4 w-1/2" />
              <span className="text-gray-400 whitespace-nowrap">
                Mon dernier projet
              </span>
              <hr className=" border-gray-400 ml-4 w-1/2" />
            </div>
            <NavLink to={`/project/${work[0].url}`}>
              <h2 className="">{work[0].projectName}</h2>
              <p className="">{work[0].jobTitle}</p>
              <div className="flex flex-wrap">
                {work[0].stackSummary.map((stack: any, index: any) => (
                  <p
                    key={index}
                    className="mt-4 bg-gray-200 px-6 py-2 rounded-xl w-fit mr-4"
                  >
                    {stack}
                  </p>
                ))}
              </div>
              <img
                src={work[0].firstImage}
                alt="Quarry"
                className="mt-6 w-full rounded-xl"
              />
            </NavLink>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
