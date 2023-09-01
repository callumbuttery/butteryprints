import { ScrollAnimator } from "../components/Loading/ScrollAnimation";

import { FeaturedPrintsSection } from "../components/Prints/FeaturedPrints/PrintsSection";

export const Prints: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center h-screen bg-[url('assets/logos/3D-extended.jpg')] bg-no-repeat bg-cover bg-center bg-fixed">
        <div className="absolute inset-x-0 bottom-20">
            <ScrollAnimator />
        </div>
      </div>

      <div>
        <FeaturedPrintsSection/>
      </div>
    </div>
  );
};
