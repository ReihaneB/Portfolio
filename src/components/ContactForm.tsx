import { useEffect, useRef, useState } from "react";
import Skills from "../database/Skills";
import { InlineWidget } from "react-calendly";

const projectDuration = [
  "Une semaine",
  "2 à 4 semaines",
  "1 à 3 mois",
  "3 à 6 mois",
  "Plus de 6 mois",
];

const projectBudget = [
  "2000€ - 5000€",
  "5000€ - 10000€",
  "10000€ - 25000€",
  "25000€ - 50000€",
  "Plus de 50000€",
];

const projectTime = [
  "Immédiatement",
  "Dans les 2 prochains mois",
  "Dans les 6 mois",
  "Peu importe",
];

const hearAboutMe = [
  "Recherche google",
  "Réseaux sociaux",
  "Bouche à oreille",
  "Un de mes anciens projets",
  "Autre",
];

export default function ContactForm(props: any): JSX.Element {
  const skills = Skills();
  const [pageID, setPageID] = useState<number>(1);
  const [isQuickResponse, setIsQuickResponse] = useState<boolean>(false);
  const [name, setname] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const wrapperRef = useRef(null);

  const calcul =
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

  const toggleQuickResponseTrue = () => {
    setPageID(pageID + 1);
    setIsQuickResponse(true);
  };
  const toggleQuickResponseFalse = () => {
    setPageID(pageID + 1);
    setIsQuickResponse(false);
  };

  const prefill = {
    name: name,
    email: email,
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        props.close();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div className="bg-black/40 inset-0 fixed z-40 backdrop-blur-sm flex justify-center items-center py-8">
      <div
        ref={wrapperRef}
        className="m-16 min-h-0 max-h-full overflow-y-auto p-8 rounded-xl bg-white"
      >
        <div>
          <p className="text-center text-gray-700">{pageID} / 8</p>
          <div className="bg-gray-700 w-full h-8 rounded-full p-2 mt-4">
            <div
              className={`bg-green-500 ${calcul} h-4 rounded-full transform transition-all duration-500`}
            ></div>
          </div>
        </div>

        <div className="mt-8">
          {pageID === 1 ? (
            <div className="">
              <h2 className="text-center ">Quels sont vos besoins ?</h2>
              {skills.map((item: any) =>
                Object.values(item.whaticandoforyou).map(
                  (item: any, index: number) => (
                    <div
                      key={index}
                      onClick={() => setPageID(pageID + 1)}
                      className="bg-blue-100 flex rounded-xl p-4 mt-8"
                    >
                      <img src={item.img} className="w-12 mr-4" />
                      <p>{item.intitule}</p>
                    </div>
                  )
                )
              )}
            </div>
          ) : pageID === 2 ? (
            <div className="">
              <h2 className="text-center ">
                Quel est la durée estimé pour votre projet ?
              </h2>
              {projectDuration.map((item: string, index: number) => (
                <div
                  key={index}
                  onClick={() => setPageID(pageID + 1)}
                  className="bg-blue-100 flex justify-center rounded-xl p-4 mt-8"
                >
                  <p>{item}</p>
                </div>
              ))}
            </div>
          ) : pageID === 3 ? (
            <div className="">
              <h2 className="text-center">
                Quel budget est alloué à ce projet ?
              </h2>
              {projectBudget.map((item: string, index: number) => (
                <div
                  key={index}
                  onClick={() => setPageID(pageID + 1)}
                  className="bg-blue-100 flex justify-center rounded-xl p-4 mt-8"
                >
                  <p>{item}</p>
                </div>
              ))}
            </div>
          ) : pageID === 4 ? (
            <div className="">
              <h2 className="text-center">
                Quel budget est alloué à ce projet ?
              </h2>
              {projectTime.map((item: string, index: number) => (
                <div
                  key={index}
                  onClick={() => setPageID(pageID + 1)}
                  className="bg-blue-100 flex justify-center rounded-xl p-4 mt-8"
                >
                  <p>{item}</p>
                </div>
              ))}
            </div>
          ) : pageID === 5 ? (
            <div className="">
              <h2 className="text-center ">
                Quelques informations sur votre projet..
              </h2>
              <input
                placeholder="Nom et prénom"
                className="bg-blue-100 w-full rounded-xl p-4 mt-8"
                value={name}
                onChange={(e) => setname(e.target.value)}
              ></input>
              <input
                placeholder="Nom de l'entreprise"
                className="bg-blue-100 w-full rounded-xl p-4 mt-8"
              ></input>
              <input
                placeholder="Email"
                className="bg-blue-100 w-full rounded-xl p-4 mt-8"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              ></input>
              <textarea
                placeholder="Décrivez votre projet"
                className="bg-blue-100 w-full rounded-xl p-4 mt-8"
              ></textarea>
              <button
                onClick={() => setPageID(pageID + 1)}
                className="bg-blue-500 w-full rounded-xl p-4 mt-8"
              >
                Envoyer
              </button>
            </div>
          ) : pageID === 6 ? (
            <div className="">
              <h2 className="text-center ">
                Comment avez-vous entendu parler de mon travail ?
              </h2>
              {hearAboutMe.map((item: string, index: number) => (
                <div
                  key={index}
                  onClick={() => setPageID(pageID + 1)}
                  className="bg-blue-100 flex justify-center rounded-xl p-4 mt-8"
                >
                  <p>{item}</p>
                </div>
              ))}
            </div>
          ) : pageID === 7 ? (
            <div className="">
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
            </div>
          ) : pageID === 8 ? (
            isQuickResponse ? (
              <div className="">
                <h2 className="text-center ">
                  Votre demande à bien été envoyé. J'y répondrai dans les plus
                  brefs délais.
                </h2>
              </div>
            ) : (
              <div className="">
                <h2 className="text-center">
                  Prenons 15 minutes pour en discuter, choississez une date qui
                  vous convient pour réserver une consultation gratuite
                </h2>
                <div className="mt-8">
                  <InlineWidget
                    url="https://calendly.com/skryleiix/15-minute-meeting"
                    prefill={prefill}
                    styles={{
                      height: "1000px",
                    }}
                  />
                </div>
              </div>
            )
          ) : null}
        </div>
        <div className=" flex items-end justify-center mt-8">
          <div className="flex justify-center ">
            <div
              onClick={
                pageID === 1 ? () => props.close() : () => setPageID(pageID - 1)
              }
              className="bg-gray-200 rounded-full w-fit px-8 py-3 text-center"
            >
              Revenir
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
