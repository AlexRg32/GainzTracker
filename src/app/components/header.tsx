import Image from "next/image";
import logo from "@/app/assets/logo.png";

const Header = () => {
  return (
    <header className="bg-blue-950 text-white  p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Image
          src={logo}
          alt="Logo de GainzTracker"
          className="w-20 h-auto"
          priority
        />
       <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li>
              <a href="#track" className="hover:text-indigo-300">
                Trackear Entrenamiento
              </a>
            </li>
            <li>
              <a href="#calculator" className="hover:text-indigo-300">
                Calcular 1RM
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
