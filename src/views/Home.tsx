import { FeaturedPrintsSection } from "../components/Prints/FeaturedPrints/FeaturedPrintsSection";

export const Home: React.FC = () => {
  return (
    <div>
      <div className="h-screen bg-[url('assets/callum_buttery_kingfisher.jpg')] bg-no-repeat bg-cover bg-center bg-fixed">
        <div className="relative h-32 w-10/12 ...">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="absolute left-16 lg:left-48 top-64 text-4xl font-bold w-full max-lg:text-3xl font-Montserrat"
          >
            <h1 className="tracking-widest text-gray-200 drop-shadow-2xl">
              Callum Buttery
            </h1>
            <h2 className="mt-2 tracking-widest opacity-50 text-gray-200 drop-shadow-2xl">
              Photographer
            </h2>
          </div>
        </div>
      </div>
      <div>
        <FeaturedPrintsSection/>
      </div>
    </div>
  );
};
