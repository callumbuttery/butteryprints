import React from "react";
import Icon from '@mdi/react';
//import { mdiMenu } from '@mdi/js';
import mdiMenu from "@mdi/js";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const menu = mdiMenu.default ? mdiMenu.default : mdiMenu;
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
      <nav className="relative flex flex-wrap items-center justify-between">
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
             <Icon path={menu} color='black' size={1.5}/>
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
                <Link className="px-6 py-2 flex items-center text-md uppercase font-bold leading-snug hover:scale-125" to={'/'}>
                   Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="px-6 py-2 flex items-center text-md uppercase font-bold leading-snug hover:scale-125" to='/about'>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="px-6 py-2 flex items-center text-md uppercase font-bold leading-snug hover:scale-125" to='/prints'>
                  Prints
                </Link>
              </li>
              <li className="nav-item">
                <a className="px-6 py-2 flex items-center text-md uppercase font-bold leading-snug hover:scale-125" href="https://www.butteryphotography.co.uk" target="_blank" rel="noopener noreferrer">
                  Weddings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};
