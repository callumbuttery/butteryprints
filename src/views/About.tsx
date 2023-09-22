import { InfoSection } from "../components/About/InfoSection";
import { ScrollAnimator } from "../components/Loading/ScrollAnimation";

export const About: React.FC = () => {
  return (
    <div>
      <div className="h-screen bg-me-ai bg-no-repeat bg-cover bg-center">
        <div className="relative h-32 w-10/12 ...">
          <div
            className="absolute left-16 lg:left-48 top-64 text-4xl w-2/6 max-lg:text-3xl font-montserrat"
          >
            <h1 className="tracking-widest text-white drop-shadow-2xl">
              The man behind the camera...
            </h1>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0">
          <ScrollAnimator />
        </div>
      </div>
      <div>
        <InfoSection />
      </div>
    </div>
  );
};
