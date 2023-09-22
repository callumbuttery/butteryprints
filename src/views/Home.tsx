import { FeaturedPrintsSection } from "../components/Prints/FeaturedPrints/PrintsSection";
import { ScrollAnimator } from "../components/Loading/ScrollAnimation";
import printData from '../json/printsData.json'
import { useEffect, useState } from "react";
import { printsObj } from "../interfaces/interfaces";
import { printsType } from "../types/types";

export const Home: React.FC = () => {
  let [background, setBackGround] = useState<string>()

  useEffect(() => {
    try{
      const data = printData.find((value) => value.src.includes('callum_buttery_kingfisher.jpg'))

      if(!data) throw new Error('Failed to find background');
      setBackGround(`${data.src}`);

    } catch (e) {
      console.log('Failed to get printData')
    }
  }, []);
  
  return (
    <div>
      <div className={`h-screen bg-no-repeat bg-cover bg-center`} style={{ backgroundImage: `url(${background})`}}>
        <div className="relative h-32 w-10/12">
          <div
            className="absolute left-16 lg:left-48 top-96 text-4xl w-full max-lg:text-2xl font-montserrat max-lg:hidden"
          >
            <h1 className="tracking-widest text-gray-200 drop-shadow-2xl font-bold">
              Callum Buttery
            </h1>
            <h2 className="mt-2 tracking-widest opacity-50 text-gray-200 drop-shadow-2xl">
              Photographer
            </h2>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0">
          <ScrollAnimator />
        </div>
      </div>
      <div>
        <FeaturedPrintsSection />
      </div>
    </div>
  );
};
