import landscapePlaceHolder from "../assets/portfolio/IMG_0243.png";
import wildlifePlaceHolder from "../assets/portfolio/IMG_9098-AI.jpg";

export const Portfolio: React.FC = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center mt-64  columns-2 gap-20 drop-shadow-3xl font-montserrat font-bold">
        <div className="inline-block hover:scale-125">
          <h1 className="flex justify-center text-2xl pb-5">Landscapes</h1>
          <img src={landscapePlaceHolder} className=" flex h-96" />
        </div>
        <div className="inline-block hover:scale-125">
          <a>
            <h1 className="flex justify-center text-2xl pb-5">Wildlife</h1>
            <img src={wildlifePlaceHolder} className="flex h-96" />
          </a>
        </div>
      </div>
    </div>
  );
};
