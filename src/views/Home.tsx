import { FeaturedPrintsSection } from "../components/Prints/FeaturedPrints/FeaturedPrintsSection";
import { ScrollAnimator } from "../components/Loading/ScrollAnimation";

import logo from '../assets/logos/Stag logo_B1.png'

export const Home: React.FC = () => {
  return (
    <div>
      <div className="h-screen bg-[url('assets/callum_buttery_kingfisher.jpg')] bg-no-repeat bg-cover bg-center bg-fixed">
        <div className="relative h-32 w-10/12 ...">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-4xl w-full max-lg:text-3xl font-montserrat"
          >
            <img src={logo} className=""/>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0">
          <ScrollAnimator />
        </div>
      </div>
      <div>
        <FeaturedPrintsSection/>
      </div>
    </div>
  );
};
