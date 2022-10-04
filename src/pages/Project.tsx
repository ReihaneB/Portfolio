import Logo from "../components/Logo";
import liomeWebsite from "../assets/liome-website.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import reactLogo from "../assets/react.svg";

export default function Project(): JSX.Element {
  return (
    <div className="mx-16">
      <div className="mt-12 flex justify-center ">
        <NavLink to="/">
          <Logo />
        </NavLink>
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
      <div className="mt-6">
        <button className="w-full max-w-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full  py-3 text-white">
          Visiter le site
        </button>
      </div>

      <h2 className="mt-12">Contexte</h2>
      <p className="mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt ut
        proin tortor, condimentum dignissim vitae. Sagittis dolor vel eu rhoncus
        odio. Ultrices sagittis ac dui sagittis, dui nulla egestas.
      </p>

      <div className="bg-cyan-100 rounded-xl p-8 mt-16">
        <div className="flex justify-center">
          <div className="bg-white  rounded-full w-fit px-4 py-3 flex items-center justify-center">
            <h2>
              <FontAwesomeIcon icon={faCrosshairs} className="mr-2" />
              L'objectif
            </h2>
          </div>
        </div>
        <h3 className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h3>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt ut
          proin tortor, condimentum dignissim vitae. Sagittis dolor vel eu
          rhoncus odio. Ultrices sagittis ac dui sagittis, dui nulla egestas.
        </p>
      </div>
      <div className="flex flex-nowrap justify-center items-center my-32">
        <hr className=" border-gray-400 mr-4 w-1/2" />
        <span className="text-gray-400">Stack</span>
        <hr className=" border-gray-400 ml-4 w-1/2" />
      </div>

      <h2>Front-end</h2>

      <h3 className="mt-4">Librarie front-end</h3>
      <p className="mt-4 bg-gray-200 px-6 py-2 rounded-xl w-fit mr-4 flex">
        <img src={reactLogo} className="mr-3 w-5 " />
        React.Js
      </p>

      <h3 className="mt-4    ">Librarie CSS</h3>
      <p className="mt-4 bg-gray-200 px-6 py-2 rounded-xl w-fit mr-4">
        TailwindCSS
      </p>

      <h2 className="mt-16">Back-end</h2>

      <h3 className="mt-4">Librarie back-end</h3>
      <p className="mt-4 bg-gray-200 px-6 py-2 rounded-xl w-fit mr-4">
        Firebase
      </p>
      <div className="flex flex-nowrap justify-center items-center my-32">
        <hr className=" border-gray-400 mr-4 w-1/2" />
        <span className="text-gray-400">Images</span>
        <hr className=" border-gray-400 ml-4 w-1/2" />
      </div>

      <h2 className="mt-16">Homepage</h2>
      <img src={liomeWebsite} alt="Quarry" className="mt-6 w-full rounded-xl" />
      <img src={liomeWebsite} alt="Quarry" className="mt-6 w-full rounded-xl" />
      <h2 className="mt-16">Product page</h2>

      <img src={liomeWebsite} alt="Quarry" className="mt-6 w-full rounded-xl" />
      <img src={liomeWebsite} alt="Quarry" className="mt-6 w-full rounded-xl" />
      <img src={liomeWebsite} alt="Quarry" className="mt-6 w-full rounded-xl" />
      <h2 className="mt-16">Account page</h2>

      <img src={liomeWebsite} alt="Quarry" className="mt-6 w-full rounded-xl" />
      <img src={liomeWebsite} alt="Quarry" className="mt-6 w-full rounded-xl" />
      <div className="flex flex-nowrap justify-center items-center my-32">
        <hr className=" border-gray-400 mr-4 w-1/2" />
        <span className="text-gray-400">Informations</span>
        <hr className=" border-gray-400 ml-4 w-1/2" />
      </div>

      <h2 className="mt-16">Livrables</h2>
      <p className="mt-8">Website</p>
      <p className="mt-4">CMS personnalisé</p>

      <p className="mt-4">Prototypage Figma</p>
      <p className="mt-4">UX / UI Design</p>

      <h2 className="mt-16">La charte graphique</h2>
      <h3 className="mt-8">Typographie</h3>

      <p className="mt-4">Montserrat</p>
      <p className="mt-4">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
      <p className="">abcdefghijklmnopqrstuvwxyz</p>

      <p className="mt-4">Antic didone</p>
      <p className="mt-4">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
      <p className="">abcdefghijklmnopqrstuvwxyz</p>

      <h3 className="mt-8">Couleurs</h3>
      <div className="flex flex-wrap">
        <div className="">
          <p className="mt-4">Fond</p>
          <div className="bg-purple-500 w-32 h-32 rounded-xl mr-4 mt-4"></div>
          <p className="mt-4">#282828</p>
        </div>
        <div className="">
          <p className="mt-4">Fond</p>
          <div className="bg-purple-500 w-32 h-32 rounded-xl mr-4 mt-4"></div>
          <p className="mt-4">#282828</p>
        </div>
        <div className="">
          <p className="mt-4">Fond</p>
          <div className="bg-purple-500 w-32 h-32 rounded-xl mr-4 mt-4"></div>
          <p className="mt-4">#282828</p>
        </div>
      </div>
      <h3 className="mt-8">Crédits</h3>
      <h4 className="mt-4">Developpeur front-end</h4>
      <p className="mt-4">Reihane B.</p>
      <p>Jawed M.</p>
      <h4 className="mt-4">Développeur back-end</h4>
      <p className="mt-4">Reihane B.</p>

      <div className="flex flex-nowrap justify-center items-center my-32">
        <hr className=" border-gray-400 mr-4 w-full" />
      </div>
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
