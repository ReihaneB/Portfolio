import { useState } from "react";
import { NavLink } from "react-router-dom";
import Social from "../database/Social";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

const transition: { duration: number; ease: number[] } = {
  duration: 0.3,
  ease: [0.6, 0.01, -0.05, 0.9],
};

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
      <h2 className="text-center">Une idée en tête ?</h2>
      <div className="flex justify-center">
        <p className="mt-8 text-center w-[600px]">
          Réservez une consultation gratuite de 15 minutes où nous échangerons
          sur votre idée et comment je peux vous aider à la mettre en oeuvre.
        </p>
      </div>
      <div className="mt-6 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={transition}
          onClick={() => setIsContactFormOpen(!isContactFormOpen)}
          className="w-96 max-w-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full  py-3 text-white"
        >
          Je prends rendez-vous !
        </motion.button>
      </div>

      <div className="flex flex-nowrap justify-center items-center my-32">
        <hr className=" border-gray-400 mr-4 w-full" />
      </div>
      <div className="mb-4">
        <p className="text-center text-gray-300">Designé et développé par</p>
        <NavLink to="/work">
          <motion.h1
            onClick={() => window.scrollTo(0, 0)}
            whileHover={{ scale: 0.95 }}
            transition={transition}
            className="text-center text-3xl cursor-pointer"
          >
            reihane b.
          </motion.h1>
        </NavLink>
      </div>

      <ul className="flex flex-wrap justify-center items-center ">
        {social.map((item: any) =>
          Object.values(item).map((item: any, index: number) => (
            <li key={index}>
              <motion.a
                whileHover={{ scale: 0.95 }}
                transition={transition}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 bg-blue-100 rounded-full px-4 mt-4 py-2 mr-2 flex flex-nowrap"
              >
                <img src={item.img} alt="React logo" className="w-4 mr-2" />
                {item.intitule}
              </motion.a>
            </li>
          ))
        )}
      </ul>
    </footer>
  );
}
