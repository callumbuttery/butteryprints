import kingfisher from "../../../assets/callum_buttery_kingfisher.jpg";
import roedeer from "../../../assets/callum_buttery_roe_deer.jpg";
import fox from "../../../assets/callum_buttery_fox.jpg";

export const FeaturedPrintsCards: React.FC = () => {
  const prints = [
    {
      name: "Kai The Kingfisher ~ 2023",
      src: kingfisher,
      description:
        "During high water on the River Clyde, this Kingfisher moves in land on the search for a food source. On a cold crisp January morning, sitting in a hide, I had the pleaure of spectating this kingfisher diving in and out of the water for several hours.",
    },
    {
      name: "Robert The Roe ~ 2021",
      src: roedeer,
      description:
        "Taken during the 2021 Roe Deer Rut. I found on the edge of an open meadow, stuck between 3 Roe Bucks chasing each other around for the right to Doe's. This Roe won the battle before posing for his victory photograph.",
    },
    {
      name: "Faith the Fox ~ 2023",
      src: fox,
      description:
        "Everyday for a week, I found myself sitting head to toe in camouflage after work, covered in beasties, waiting outside of a fox hole for Faith & her 5 cubs to appear. The first two days I only caught a 30 second glimpse. Day three however, she put on a show and allowed me to photograph her for 15 minutes before disappearing to looking for dinner.",
    },
  ];

  return (
    <div className="pb-10">
      {prints.map((print, i) => (
        <div
          className="flex justify-center mt-24 columns-2 sm:columns-1"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img
            src={print.src}
            className="h-64 rounded-lg mr-10 flex justify-center drop-shadow-xl hover:scale-125"
          />
          <div className="inline-block h-[250px] min-h-[1em] w-0.5 bg-gray-100 mr-10"></div>
          <div className="inline-block">
            <p className="font-bold font-montserrat text-lg">{print.name}</p>
            <hr className="bg-gray-100 mt-5 mb-5" />
            <p className="max-w-sm font-montserrat font-bold text-sm">
              {print?.description}
            </p>
            <button
              type="button"
              className="bg-transparent text-black mt-10 text-sm px-1 py-0.5 border border-gray-400 hover:scale-125 font-montserrat font-bold"
            >
              View now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
