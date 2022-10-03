import { useState } from "react";

export default function WorkOrLab() {
  const [isToggle, setIsToggle] = useState<boolean>(false);
  return (
    <>
      <nav className="bg-gray-700 rounded-full flex justify-center items-center z-10">
        <ul className="bg-gray-500 w-full flex flex-nowrap relative rounded-full m-4">
          <input
            className="hidden"
            type="radio"
            name="workOrLab"
            id="work"
            onChange={() => setIsToggle(false)}
            defaultChecked
          />
          <label
            htmlFor="work"
            className={` ${
              isToggle === false ? `text-black` : `text-white`
            } z-20 text-center grow py-3 duration-500`}
          >
            Work
          </label>

          <input
            className="hidden"
            type="radio"
            name="workOrLab"
            id="lab"
            onChange={() => setIsToggle(true)}
          />
          <label
            htmlFor="lab"
            className={` ${
              isToggle === true ? `text-black` : `text-white`
            } z-20 text-center grow py-3 duration-500`}
          >
            Lab
          </label>

          <a
            className={`w-1/2 h-full absolute bg-white rounded-full transform transition-all duration-500 ${
              isToggle === false ? `left-0` : `left-1/2`
            }`}
          ></a>
        </ul>
      </nav>
    </>
  );
}
