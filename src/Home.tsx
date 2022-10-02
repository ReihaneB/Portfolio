import Logo from "./components/Logo";
import reactLogo from "./assets/react.svg";
import profilePicture from "./assets/profile-picture.png";
import quarry from "./assets/decors-quarry.png";

export default function Home() {
  return (
    <div className="mx-16">
      <div className="mt-12 flex justify-center ">
        <Logo />
      </div>
      <p className="mt-36 text-3xl text-center">
        Bonjour ! Je suis
        <br />
        Reihane B.
        <br />
        <b>Développeur Front-end</b>
      </p>
      <div className="flex justify-center mt-6">
        <img src={reactLogo} className="animate-spin" alt="React logo" />
      </div>
      <div className="mt-6">
        <button className="w-full max-w-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full  py-3 text-white">
          Démarrer un projet
        </button>
      </div>

      <div className="flex justify-center mt-36">
        <img
          src={profilePicture}
          alt="Profile picture of Reihane B."
          className="rounded-xl w-full"
        />
      </div>
      <div className="">
        <p className="mt-6 text-center">
          <a
            href="
https://www.linkedin.com/in/reihaneb/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            LinkedIn
          </a>
          <span className="mx-2">|</span>
          <a href="" target="_blank" rel="noreferrer" className="text-blue-500">
            GitHub
          </a>
        </p>
        <div className="mt-6">
          <h2 className="">Jewelry, front web development, luxurytech</h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id
            ut sollicitudin facilisi. Nibh ornare ac adipiscing laoreet. Euismod
            justo sagittis, non pellentesque vitae. Mauris faucibus proin nisi,
            faucibus.
          </p>
        </div>
      </div>

      <div className="mt-32">
        <hr className="text-gray-400 border-gray-400 overflow-visible text-center after:content-['1'] after:bg-white after:p-4 after:relative after:top-[-13px]" />
        <div className="mt-32">
          <h2 className="">Nom du projet</h2>
          <p className="">Intitulé du poste</p>
          <div className="flex flex-wrap">
            <p className="mt-4 bg-gray-200 px-6 py-2 rounded-xl w-fit mr-4">
              Blender
            </p>
            <p className="mt-4 bg-gray-200 px-6 py-2 rounded-xl w-fit mr-4">
              Photoshop
            </p>
            <p className="mt-4 bg-gray-200 px-6 py-2 rounded-xl w-fit">
              Panther 3D
            </p>
          </div>
          <img src={quarry} alt="Quarry" className="mt-6 w-full rounded-xl" />
        </div>
        <hr className=" mt-32 text-gray-400 border-gray-400 overflow-visible text-center after:content-['1'] after:bg-white after:p-4 after:relative after:top-[-13px]" />
      </div>
    </div>
  );
}
