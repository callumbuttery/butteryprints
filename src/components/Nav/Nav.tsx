import React from "react";
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';

export const Navbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <div className="">
      <nav className="relative flex flex-wrap items-center justify-between bg-transparent drop-shadow-2xl border-none">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a className="text-4xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
              B.V
            </a>
            <button
              className="text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
             <Icon path={mdiMenu} color='black' size={1.5}/>
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
              <li className="nav-item">
                <a className="px-6 py-2 flex items-center text-md uppercase font-bold leading-snug hover:opacity-75">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="px-6 py-2 flex items-center text-md uppercase font-bold leading-snug hover:opacity-75">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="px-6 py-2 flex items-center text-md uppercase font-bold leading-snug hover:opacity-75">
                  Prints
                </a>
              </li>
              <li className="nav-item">
                <a className="px-6 py-2 flex items-center text-md uppercase font-bold leading-snug hover:opacity-75">
                  Weddings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
