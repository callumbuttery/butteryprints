import { PrintsCards } from "./PrintsCards";

import { pathFinder } from "../../../helpers/pathFinder";

export const FeaturedPrintsSection: React.FC = () => {

  const heading = pathFinder('/prints') ? 'Prints' : 'Featured Prints'
  return (
    <div>
      <div className="pt-16 font-montserrat">
        <hr className="flex justiy-center w-64 mx-auto"></hr>
        <h1 className="flex justify-center font-bold text-3xl mt-10 mb-10">
          {heading}
        </h1>
        <hr className="flex justiy-center w-64 mx-auto"></hr>
      </div>
      <div className="flex justify-center">
        <PrintsCards />
      </div>
    </div>
  );
};
