import { useState } from "react";
import { signOut } from 'firebase/auth';
import { Link, useLocation } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";import { auth } from '../../firebase';
import { Menu, X } from "lucide-react";
import "./navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current route
  const logOut = async () => {
    await signOut(auth);

  };
  return (
    <nav className="bg-[#370c44] text-white p-3 shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <img
            src="https://i.pinimg.com/474x/71/bd/6d/71bd6db31ad4398d82bc728f0bff4421.jpg"
            className="logo cursor-pointer"
            alt="Logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-lg">
          {[
            { path: "/", label: "Home" },
            { path: "/allmovies&series", label: "Movies" },
            { path: "/about", label: "About" },          
          ].map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={` tab relative font-bold px-3 py-1 transition-all duration-300 ${location.pathname === path
                    ? "text-[#de2fee] after:w-full" // Active link effect
                    : "hover:text-[#1bd6e3] after:w-0"
                  } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#de2fee] after:transition-all after:duration-300`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side - Profile Icon & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <img
            src="https://i.pinimg.com/736x/6d/0e/33/6d0e331c759722dea5f51f88367f350a.jpg"
            className="profile-icon"
            alt="Profile"
          />
          <button className="logout-btn" onClick={logOut}><span className="logout-text">Logout</span> <AiOutlineLogout /></button>


          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Slide-in Effect) */}
      <div
        className={`fixed top-0 right-0 h-full bg-[#370c44] w-2/3 transform ${isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out shadow-lg md:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => setIsOpen(false)}
        >
          <X className="w-6 h-6" />
        </button>
        <ul className="flex flex-col items-center space-y-6 mt-20 text-lg">
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/allmovies&series", label: "Movies" },
            { path: "/favourites", label: "Favourites" },
            { path: "/watchlist", label: "Saves" },
          ].map(({ path, label }) => (
            <li key={path} onClick={() => setIsOpen(false)}>
              <Link
                to={path}
                className="text-white hover:text-[#1bd6e3] text-3xl font-bold"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
