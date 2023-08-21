import landscapePlaceHolder from "../../assets/portfolio/IMG_0243.png";
import wildlifePlaceHolder from "../../assets/portfolio/IMG_9098-AI.jpg";
import { useNavigate } from "react-router-dom";

export const PortfolioHome: React.FC = () => {
  const navigate = useNavigate();

  const portfolios = [
    {
      navigate: "portfolioLandscape",
      heading: "Landscapes",
      src: landscapePlaceHolder,
    },
    {
      navigate: "portfolioWildlife",
      heading: "Wildlife",
      src: wildlifePlaceHolder,
    },
  ];

  return (
    <div className="h-screen">
      <div className="flex justify-center items-center mt-64 columns-2 gap-20 drop-shadow-3xl font-montserrat font-bold">
        {portfolios.map((portfolio, i) => (
          <div
            className="inline-block cursor-pointer"
            data-aos="fade-down"
            data-aos-duration="1000"
            onClick={() => navigate(portfolio.navigate)}
            key={i}
          >
            <h1 className="flex justify-center text-2xl pb-5">{portfolio.heading}</h1>
            <img
              src={portfolio.src}
              className=" flex h-96 rounded-xl hover:scale-125"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
