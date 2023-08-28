import landscapePlaceHolder from "../../assets/portfolio/IMG_0243.jpg";
import wildlifePlaceHolder from "../../assets/portfolio/IMG_9098-AI.jpg";
import { useNavigate } from "react-router-dom";

export const PortfolioHome: React.FC = () => {
  const navigate = useNavigate();

  const portfolios = [
    {
      navigate: "landscapes",
      heading: "Landscapes",
      src: landscapePlaceHolder,
    },
    {
      navigate: "wildlife",
      heading: "Wildlife",
      src: wildlifePlaceHolder,
    },
  ];

  return (
    <div className="h-screen">
      <div className="grid grid-cols-2 mt-64 drop-shadow-3xl font-montserrat font-bold w-3/6 mx-auto max-lg:grid-cols-1">
        {portfolios.map((portfolio, i) => (
          <div
            className="cursor-pointer mx-auto"
            data-aos="fade-down"
            data-aos-duration="1000"
            onClick={() => navigate(portfolio.navigate)}
            key={i}
          >
            <img
              src={portfolio.src}
              className="h-96 rounded-xl hover:scale-125 pointer-events-none inline-block"
            />
            <h1 className="text-2xl pb-5 text-center mt-5">{portfolio.heading}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
