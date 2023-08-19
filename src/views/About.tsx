import me from "../assets/me.jpeg";
import { InfoSection } from "../components/About/InfoSection";
import { ScrollAnimator } from "../components/Loading/ScrollAnimation";

export const About: React.FC = () => {
  return (
    <div>
      <div className="h-screen bg-[url('assets/IMG_9378-ai-2.jpg')] bg-no-repeat bg-cover bg-center bg-fixed">
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
