import { Dumbbell } from "lucide-react";
import { User } from "lucide-react";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-blue-950 text-white  p-4 fixed top-0 left-0 w-full h-20 z-50 ">

      <div className="  flex flex-row md:flex-row justify-between items-center h-full   ">

        <div className=" flex flex-row space-x-4 items-center md:ml-6 ">
          <Dumbbell className="w-10 h-10 text-indigo-300"></Dumbbell>
          <h1 className="text-2xl font-bold text-indigo-300">Gainz Tracker</h1>
        </div>

        <div className=" flex items-center md:mr-6 ">

          <nav className=" space-y-2 md:space-y-0 md:space-x-6">
            <ul className=" space-y-2 space-x-2 md:space-y-0 md:space-x-7 flex flex-row md:flex-row items-center">
              <li className="hidden md:block">
                <a href="#track" className="hover:text-indigo-300">
                  Calculadora
                </a>
              </li>
              <li className="block md:hidden">
                <Menu className=""></Menu>
              </li>
              <li>
                <button>
                  <User></User>
                </button>
              </li>
            </ul>
          </nav>

        </div>

      </div>

    </header>
  );
};

export default Header;
