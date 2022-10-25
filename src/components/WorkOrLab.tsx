import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

export default function WorkOrLab() {
  const { id } = useParams();

  const [isToggle, setIsToggle] = useState<boolean>(
    id === "lab" ? true : false
  );

  useEffect(() => {
    if (id === "work") {
      setIsToggle(false);
    }
    if (id === "lab") {
      setIsToggle(true);
    }
  }, [id]);

  return (
    <div className="w-64 sm:w-96">
      <nav className="bg-gray-700 rounded-full flex justify-center items-center z-10">
        <ul className="bg-gray-500 w-full flex flex-nowrap relative rounded-full m-4 lg:m-4">
          <NavLink to="/work">
            <input
              className="hidden"
              type="radio"
              name="workOrLab"
              id="work"
              onChange={() => setIsToggle(false)}
              defaultChecked
            />
          </NavLink>
          <label
            htmlFor="work"
            className={` ${
              !isToggle ? `text-black` : `text-white`
            } z-20 text-center grow py-3 px-8 duration-500`}
          >
            Work
          </label>
          <NavLink to="/lab">
            <input
              className="hidden"
              type="radio"
              name="workOrLab"
              id="lab"
              onChange={() => setIsToggle(true)}
            />
          </NavLink>
          <label
            htmlFor="lab"
            className={` ${
              isToggle ? `text-black` : `text-white`
            } z-20 text-center grow py-3 px-8 duration-500`}
          >
            Lab
          </label>

          <div
            className={`w-1/2 h-full absolute bg-white rounded-full transform transition-all duration-500 ${
              isToggle ? `left-1/2` : `left-0`
            }`}
          ></div>
        </ul>
      </nav>
    </div>
  );
}
