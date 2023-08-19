import me from "../assets/me.jpeg";
import { InfoSection } from "../components/About/InfoSection";

export const About: React.FC = () => {
  return (
    <div>
      <div className="h-screen bg-[url('assets/IMG_9378-ai-2.jpg')] bg-no-repeat bg-cover bg-center bg-fixed" />
      <div>
        <InfoSection />
      </div>
    </div>
  );
};
