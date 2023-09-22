import { pathFinder } from "../../../helpers/pathFinder";
import { Link } from "react-router-dom";

import printsData from '../../../json/printsData.json'

import { printsObj } from "../../../interfaces/interfaces";

type printsType = printsObj[];

export const PrintsCards: React.FC = () => {
  const printsList: printsType = printsData;

  const printsArray = pathFinder("/prints")
    ? printsList
    : printsList?.slice(0, 3);

  return (
    <div className="pb-10">
      {printsArray.map((print, i) => (
        <div
          className="mt-24 grid grid-cols-2 max-md:grid-cols-1"
          key={i}
        >
          <img
            src={print.src}
            className={`rounded-lg drop-shadow-xl hover:scale-125 pointer-events-none max-md:p-10 max-md:mb-5 max-md:h-72 mx-auto ${print.orientation === 'landscape' ? 'mr-10 h-80 ' : 'h-96'}`}
          />
          <div className="inline-block">
            <p className="font-bold font-montserrat text-lg max-md:p-10 max-md:text-center">{print.name}</p>
            <hr className="bg-gray-100 mt-5 mb-5" />
            <p className="max-w-sm font-montserrat font-bold text-sm max-md:p-10 max-md:text-center">
              {print?.description || 'Details coming soon'}
            </p>
            <Link
              type="button"
              to={`/store/${print.id}`}
              className="bg-transparent rounded pa-1 text-black mt-10 text-sm px-1 py-0.5 border border-gray-400 hover:scale-125 font-montserrat font-bold max-md:text-center max-md:ml-28"
            >
              View now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
