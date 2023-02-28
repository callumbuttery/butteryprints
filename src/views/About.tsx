import me from "../assets/me.jpg";

export const About: React.FC = () => {
  return (
    <div className="bg-red-500 h-screen">
      <div className="flex items-center justify-center pt-32">
        <div className="w-8/12 grid grid-cols-2 content-between max-md:grid-cols-1 ">
          <img src={me} className="object-fit drop-shadow-2xl rounded-l-2xl"/>
          <div className="bg-blue-500 drop-shadow-2xl rounded-r-2xl">
              
          </div>
        </div>
      </div>
    </div>
  );
};
