import bridge1 from "../../assets/portfolio/landscapes/bridge1.jpg";
import bridge2 from "../../assets/portfolio/landscapes/bridge2.jpg";
import chatel1 from "../../assets/portfolio/landscapes/chatel1.jpg";
import chatel2 from "../../assets/portfolio/landscapes/chatel2.jpg";
import crags1 from "../../assets/portfolio/landscapes/crags1.jpg";
import deanvillage1 from "../../assets/portfolio/landscapes/deanvillage1.jpg";
import deanvillage2 from "../../assets/portfolio/landscapes/deanvillage2.jpg";
import falls1 from "../../assets/portfolio/landscapes/falls1.jpg";
import falls3 from "../../assets/portfolio/landscapes/falls3.jpg";
import glencoe1 from "../../assets/portfolio/landscapes/glencoe1.jpg";
import greymares1 from "../../assets/portfolio/landscapes/greymares1.jpg";
import house1 from "../../assets/portfolio/landscapes/house1.jpg";
import lighthouse1 from "../../assets/portfolio/landscapes/lighthouse1.jpg";
import pulpit1 from "../../assets/portfolio/landscapes/pulpit1.jpg";
import waterfall1 from "../../assets/portfolio/landscapes/waterfall1.jpg";

export const PortfolioLandscape: React.FC = () => {
  const images = [
    {
      src: pulpit1,
    },
    {
      src: waterfall1,
    },
    {
      src: falls1,
    },
    {
      src: bridge2,
    },
    {
      src: chatel1,
    },
    {
      src: crags1,
    },
    {
      src: deanvillage1,
    },
    {
      src: greymares1,
    },
    {
      src: glencoe1,
    },
    {
      src: bridge1,
    },
    {
      src: chatel2,
    },
    {
      src: lighthouse1,
    },
    {
      src: deanvillage2,
    },
    {
      src: house1,
    },
    {
      src: falls3,
    },
  ];

  return (
    <div className="mt-24 flex justify-center">
      <div
        className="grid grid-cols-4 gap-2 max-lg:grid-cols-2 max-md:grid-cols-1"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {images.map((image, i) => (
          <img className="h-96 flex justify-center mx-auto pointer-events-none" src={image.src} key={i} />
        ))}
      </div>
    </div>
  );
};
