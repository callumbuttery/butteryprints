import React from "react";
import Icon from '@mdi/react';
//import { mdiMenu } from '@mdi/js';
//<Icon path={mdiMenu} color='black' size={1.5}/>
import { Link } from "react-router-dom";
import logo from '../../assets/logos/Stag logo_B1-crop-tightest.png'

export const Navbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
      <nav className="bg-transparent h-24 px-2 sm:px-4 py-8 fixed w-full z-20 top-0 left-0 border-b border-transparent">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <img className="h-16" src={logo}/>
            <button
              className="text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-gray-500 block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item hover:text-white">
                <Link className="px-6 py-2 flex items-center text-md uppercase leading-snug hover:scale-125" to={'/'}>
                   Home
                </Link>
              </li>
              <li className="nav-item hover:text-white">
                <Link className="px-6 py-2 flex items-center text-md uppercase leading-snug hover:scale-125" to='/about'>
                  BIOGRAPHY
                </Link>
              </li>
              <li className="nav-item hover:text-white">
                <Link className="px-6 py-2 flex items-center text-md uppercase leading-snug hover:scale-125" to='/portfolio'>
                  Portfolio
                </Link>
              </li>
              <li className="nav-item hover:text-white">
                <Link className="px-6 py-2 flex items-center text-md uppercase leading-snug hover:scale-125" to='/prints'>
                  Prints
                </Link>
              </li>
              <li className="nav-item hover:text-white">
                <a className="px-6 py-2 flex items-center text-md uppercase leading-snug hover:scale-125" href="https://www.butteryphotography.co.uk" target="_blank" rel="noopener noreferrer">
                  Weddings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};
