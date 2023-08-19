import { FeaturedPrintsCards } from "./FeaturedPrintsCards";

export const FeaturedPrintsSection: React.FC = () => {
  return (
    <div>
      <div className="pt-16 font-Montserrat">
        <hr className="flex justiy-center w-64 mx-auto"></hr>
        <h1 className="flex justify-center font-bold text-3xl mt-10 mb-10">
          Featured Prints
        </h1>
        <hr className="flex justiy-center w-64 mx-auto"></hr>
      </div>
      <div className="Flex justify-center">
        <FeaturedPrintsCards />
      </div>
    </div>
  );
};
