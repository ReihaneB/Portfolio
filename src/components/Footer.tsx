import { useState } from "react";
import Social from "../database/Social";
import ContactForm from "./ContactForm";

export default function Footer(): JSX.Element {
  const social = Social();
  const [isContactFormOpen, setIsContactFormOpen] = useState<boolean>(false);

  return (
    <footer>
      {isContactFormOpen && (
        <ContactForm close={() => setIsContactFormOpen(!isContactFormOpen)} />
      )}
<div className="flex flex-nowrap justify-center items-center my-32">
              <hr className=" border-gray-400 mr-4 w-full" />
            </div>
            <h2 className="text-center">Prenons rendez-vous !</h2>
            <div className="flex justify-center">
              <p className="mt-8 text-center w-[600px]">
                Réservez un créneau gratuit de 15 min où nous échangerons sur votre
                projet, vos problématiques et comment les résoudre.
              </p>
            </div>
            <div className="mt-6 flex justify-center">
              <button 
              onClick={() => setIsContactFormOpen(!isContactFormOpen)}
              className="w-96 max-w-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full  py-3 text-white">
                Réserver une consultation
              </button>
            </div>

            <div className="flex flex-nowrap justify-center items-center my-32">
              <hr className=" border-gray-400 mr-4 w-full" />
            </div>
      <h1 className="text-center">rb.</h1>

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
    </footer>
  );
}
