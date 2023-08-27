import dave from "../../assets/portfolio/wildlife/IMG_9098-AI.jpg";
import headtiltRoe from "../../assets/portfolio/wildlife/headtilt1.jpg";
import buzzard1 from "../../assets/portfolio/wildlife/IMG_9348-Edit-4x5.jpg";
import roeTongue from "../../assets/portfolio/wildlife/IMG_9519-Edit-brigten-gigapixel-standard-scale-2_00x.jpg";
import owlets1 from "../../assets/portfolio/wildlife/IMG_9773.jpg";
import stag1 from "../../assets/portfolio/wildlife/IMG-2712.jpg";
import kingfisher1 from "../../assets/portfolio/wildlife/kingfisher-crop.jpg";

export const PortfolioWildlife: React.FC = () => {
  const images = [
    {
      src: dave,
    },
    {
      src: headtiltRoe,
    },
    {
      src: buzzard1,
    },
    {
      src: roeTongue,
    },
    {
      src: owlets1,
    },
    {
      src: stag1,
    },
    {
      src: kingfisher1,
    },
  ];

  return (
    <div className="mt-24 flex justify-center">
      <div
        className="grid grid-cols-4 gap-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {images.map((image, i) => (
          <img className="h-96" src={image.src} key={i} />
        ))}
      </div>
    </div>
  );
};
