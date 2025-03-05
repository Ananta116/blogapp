import { useState } from "react";
import { Menu, X } from "lucide-react";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 md:hidden sm:hidden">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold"></h1>
        <div className="md:hidden">
          <div onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </div>
        </div>
        <ul
          className={`absolute z-10 top-14 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 p-4 transition-transform duration-300 md:static md:w-auto md:flex md:flex-row md:space-y-0 md:space-x-6 md:shadow-none ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <a href="/register" className="text-gray-700 hover:text-gray-900 relative z-10">
              Register
            </a>
          </li>
          <li>
            <a href="/login" className="text-gray-700 hover:text-gray-900 relative z-10">
              Login
            </a>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Burger;
