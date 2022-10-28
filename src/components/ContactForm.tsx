import { MouseEvent, useEffect, useRef, useState } from "react";
import Skills from "../database/Skills";
import { InlineWidget } from "react-calendly";
import emailjs from "emailjs-com";
import Lottie from "react-lottie-player";

const projectDuration: string[] = [
  "Une semaine",
  "2 à 4 semaines",
  "1 à 3 mois",
  "3 à 6 mois",
  "Plus de 6 mois",
];

const projectBudget: string[] = [
  "2000€ - 5000€",
  "5000€ - 10000€",
  "10000€ - 25000€",
  "25000€ - 50000€",
  "Plus de 50000€",
];

const projectTime: string[] = [
  "Immédiatement",
  "Dans les 2 prochains mois",
  "Dans les 6 mois",
  "Peu importe",
];

const hearAboutMe: string[] = [
  "Recherche google",
  "Réseaux sociaux",
  "Bouche à oreille",
  "Un de mes anciens projets",
  "Autre",
];

type Props = {
  close: () => void;
};

export default function ContactForm(props: Props): JSX.Element {
  const skills = Skills();
  const [pageID, setPageID] = useState<number>(1);
  const [isQuickResponse, setIsQuickResponse] = useState<boolean>(false);
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [projectmessage, setProjectmessage] = useState<string>("");
  const [needs, setNeeds] = useState<string>("");
  const [projectduration, setProjectduration] = useState<string>("");
  const [projectbudget, setProjectbudget] = useState<string>("");
  const [projecttime, setProjecttime] = useState<string>("");
  const [hearaboutme, setHearaboutme] = useState<string>("");

  const wrapperRef = useRef<HTMLDivElement>(null);

  const calcul: string =
    pageID === 1
      ? "w-[12.5%]"
      : pageID === 2
      ? "w-[25%]"
      : pageID === 3
      ? "w-[37.5%]"
      : pageID === 4
      ? "w-[50%]"
      : pageID === 5
      ? "w-[62.5%]"
      : pageID === 6
      ? "w-[75%]"
      : pageID === 7
      ? "w-[87.5%]"
      : "w-[100%]";

  const prefill = {
    name: (firstname + " " + lastname) as string,
    email: email as string,
    company: company as string,
    projectmessage: projectmessage as string,
    needs: needs as string,
    projectduration: projectduration as string,
    projectbudget: projectbudget as string,
    projecttime: projecttime as string,
    hearaboutme: hearaboutme as string,
  };

  const sendEmail = (e: Event) => {
    emailjs.send(
      import.meta.env.VITE_SOME_KEY_EMAILJS_SERVICEID,
      import.meta.env.VITE_SOME_KEY_EMAILJS_TEMPLATEID,
      prefill,
      import.meta.env.VITE_SOME_KEY_EMAILJS_PUBLICKEY
    );
  };

  const toggleQuickResponseTrue = (e: MouseEvent<HTMLDivElement>) => {
    setPageID(pageID + 1);
    sendEmail(e as unknown as Event);
    setIsQuickResponse(true);
  };

  const toggleQuickResponseFalse = (e: MouseEvent<HTMLDivElement>) => {
    setPageID(pageID + 1);
    sendEmail(e as unknown as Event);
    setIsQuickResponse(false);
  };

  const handleClickOutside = (event: Event) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      props.close();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div className="bg-black/40 inset-0 fixed z-40 backdrop-blur-sm flex justify-center items-center py-8">
      <div
        ref={wrapperRef}
        className="m-8 lg:m-16 min-h-0 max-h-full overflow-y-auto p-8 rounded-xl bg-white"
      >
        <div>
          <div className="bg-gray-700 w-full h-8 rounded-full p-2 mt-4">
            <div
              className={`bg-green-300 ${calcul} h-4 rounded-full transform transition-all duration-500`}
            ></div>
          </div>
        </div>

        <div className="mt-8">
          {pageID === 1 ? (
            <>
              <h2 className="text-center ">Quels sont vos besoins ?</h2>
              {skills.map((item) =>
                Object.values(item.whaticandoforyou).map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setNeeds(item.intitule);
                      setPageID(pageID + 1);
                    }}
                    className="bg-blue-100 flex items-center rounded-xl p-4 mt-8"
                  >
                    <Lottie
                      loop
                      animationData={item.img}
                      play
                      style={{ width: 70, height: 70, marginRight: 20 }}
                    />
                    <p>{item.intitule}</p>
                  </div>
                ))
              )}
            </>
          ) : pageID === 2 ? (
            <>
              <h2 className="text-center ">
                Quel est la durée estimé pour votre projet ?
              </h2>
              {projectDuration.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setPageID(pageID + 1);
                    setProjectduration(item);
                  }}
                  className="bg-blue-100 flex justify-center rounded-xl p-4 mt-8"
                >
                  <p>{item}</p>
                </div>
              ))}
            </>
          ) : pageID === 3 ? (
            <>
              <h2 className="text-center">
                Quel budget est alloué à ce projet ?
              </h2>
              {projectBudget.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setPageID(pageID + 1);
                    setProjectbudget(item);
                  }}
                  className="bg-blue-100 flex justify-center rounded-xl p-4 mt-8"
                >
                  <p>{item}</p>
                </div>
              ))}
            </>
          ) : pageID === 4 ? (
            <>
              <h2 className="text-center">Pour quand en avez-vous besoin ?</h2>
              {projectTime.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setPageID(pageID + 1);
                    setProjecttime(item);
                  }}
                  className="bg-blue-100 flex justify-center rounded-xl p-4 mt-8"
                >
                  <p>{item}</p>
                </div>
              ))}
            </>
          ) : pageID === 5 ? (
            <form onSubmit={() => setPageID(pageID + 1)}>
              <h2 className="text-center ">
                Quelques informations sur votre projet..
              </h2>
              <div className="flex ">
                <input
                  required
                  type="text"
                  placeholder="Prénom"
                  className="bg-blue-100 w-1/2 mr-2 rounded-xl p-4 mt-8"
                  name="name"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <input
                  required
                  type="text"
                  placeholder="Nom"
                  className="bg-blue-100 w-1/2 rounded-xl p-4 mt-8 ml-2"
                  name="name"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="Nom de l'entreprise"
                className="bg-blue-100 w-full rounded-xl p-4 mt-8"
                onChange={(e) => setCompany(e.target.value)}
                value={company}
              />
              <input
                required
                type="email"
                placeholder="Email"
                className="bg-blue-100 w-full rounded-xl p-4 mt-8"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                required
                placeholder="Décrivez votre projet"
                className="bg-blue-100 w-full rounded-xl p-4 mt-8 "
                onChange={(e) => setProjectmessage(e.target.value)}
                value={projectmessage}
              />
              <input
                type="Submit"
                className="bg-blue-500 w-full rounded-full p-4 mt-8"
              />
            </form>
          ) : pageID === 6 ? (
            <>
              <h2 className="text-center ">
                Comment avez-vous entendu parler de mon travail ?
              </h2>
              {hearAboutMe.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setPageID(pageID + 1);
                    setHearaboutme(item);
                  }}
                  className="bg-blue-100 flex justify-center rounded-xl p-4 mt-8"
                >
                  <p>{item}</p>
                </div>
              ))}
            </>
          ) : pageID === 7 ? (
            <>
              <h2 className="text-center ">
                Quand souhaitez-vous que je vous recontacte ?
              </h2>
              <div
                onClick={toggleQuickResponseTrue}
                className="bg-blue-100 rounded-xl p-4 mt-8"
              >
                <p className="text-center">Je veux une réponse rapide</p>
              </div>
              <div
                onClick={toggleQuickResponseFalse}
                className="bg-blue-100 rounded-xl p-4 mt-8"
              >
                <p className="text-center">
                  J’ai le temps de discuter de mon projet
                </p>
              </div>
            </>
          ) : pageID === 8 ? (
            isQuickResponse ? (
              <h2 className="text-center ">
                Votre demande à bien été envoyé. J'y répondrai dans les plus
                brefs délais.
              </h2>
            ) : (
              <>
                <h2 className="text-center">
                  Prenons 15 minutes pour en discuter, choississez une date qui
                  vous convient pour réserver une consultation gratuite
                </h2>
                <div className="mt-8">
                  <InlineWidget
                    url="https://calendly.com/reihaneb/15min"
                    prefill={prefill}
                  />
                </div>
              </>
            )
          ) : null}
        </div>
        <div className=" flex items-end justify-center mt-8">
          <div className="flex justify-center ">
            {pageID === 1 || pageID === 8 ? (
              <div
                onClick={() => props.close()}
                className="bg-gray-200 rounded-full w-fit px-8 py-3 text-center"
              >
                Quitter
              </div>
            ) : (
              <div
                onClick={() => setPageID(pageID - 1)}
                className="bg-gray-200 rounded-full w-fit px-8 py-3 text-center"
              >
                Revenir
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
