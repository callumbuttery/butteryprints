import me from "../assets/me.jpeg";
import { InfoCard } from "../components/About/InfoCard";

export const About: React.FC = () => {
  return (
    <div className="h-screen">
      <div className="flex items-center justify-center pt-16">
        <div className="w-8/12 grid grid-cols-2 content-between max-md:grid-cols-1 pb-16">
          <img src={me} className="object-fit h-6/6 drop-shadow-2xl rounded-l-2xl" />
          <div className="bg-black drop-shadow-2xl rounded-r-2xl">
            <InfoCard />
          </div>
        </div>
      </div>
    </div>
  );
};
