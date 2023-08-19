import kingfisher from "../../../assets/callum_buttery_kingfisher.jpg";
import roedeer from "../../../assets/callum_buttery_roe_deer.jpg";
import fox from "../../../assets/callum_buttery_fox.jpg";

export const FeaturedPrintsCards: React.FC = () => {
  const prints = [
    { name: "Kingfisher 2023", src: kingfisher },
    { name: "Roe Deer 2023", src: roedeer },
  ];

  return (
    <div className="pb-10">
      {prints.map((print, i) => (
        <div className="flex justify-center mt-24 columns-2">
          <img
            src={print.src}
            className="h-64 rounded-lg mr-10 flex justify-center drop-shadow-xl"
          />
          <div className="inline-block h-[250px] min-h-[1em] w-0.5 bg-gray-100 mr-10"></div>
          <div className="inline-block">
            <p className="font-bold font-Montserrat">{print.name}</p>
            <hr className="bg-gray-100 mt-5 mb-5"/>
            <p>{print.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
