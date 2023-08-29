import { FeaturedPrintsSection } from "../components/Prints/FeaturedPrints/FeaturedPrintsSection";
import { ScrollAnimator } from "../components/Loading/ScrollAnimation";

export const Home: React.FC = () => {
  return (
    <div>
      <div className="h-screen bg-[url('assets/callum_buttery_kingfisher.jpg')] bg-no-repeat bg-cover bg-center bg-fixed">
        <div className="relative h-32 w-10/12 ...">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="absolute left-16 lg:left-48 top-96 text-4xl w-full max-lg:text-3xl font-montserrat"
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
