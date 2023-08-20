import me from "../assets/me.jpeg";
import { InfoSection } from "../components/About/InfoSection";
import { ScrollAnimator } from "../components/Loading/ScrollAnimation";

export const About: React.FC = () => {
  return (
    <div>
      <div className="h-screen bg-[url('assets/IMG_9378-ai-2.jpg')] bg-no-repeat bg-cover bg-center bg-fixed">
        <div className="relative h-32 w-10/12 ...">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
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
