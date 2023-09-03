import kingfisher from "../../../assets/callum_buttery_kingfisher.jpg";
import roedeer from "../../../assets/callum_buttery_roe_deer.jpg";
import fox from "../../../assets/callum_buttery_fox.jpg";
import headtilt1 from "../../../assets/portfolio/wildlife/headtilt2.jpg";

import { pathFinder } from "../../../helpers/pathFinder";

interface printsObj {
  name: string;
  src: string;
  orientation: string;
  description: string;
}

type printsType = printsObj[];

export const PrintsCards: React.FC = () => {
  const printsList: printsType = [
    {
      name: "Kai The Kingfisher ~ 2023",
      src: kingfisher,
      orientation: "landscape",
      description:
        "During high water on the River Clyde, this Kingfisher moves in land on the search for a food source. On a cold crisp January morning, sitting in a hide, I had the pleaure of spectating this kingfisher diving in and out of the water for several hours.",
    },
    {
      name: "Robert The Roe ~ 2021",
      src: roedeer,
      orientation: "landscape",
      description:
        "Taken during the 2021 Roe Deer Rut. I found on the edge of an open meadow, stuck between 3 Roe Bucks chasing each other around for the right to Doe's. This Roe won the battle before posing for his victory photograph.",
    },
    {
      name: "Faith the Fox ~ 2023",
      src: fox,
      orientation: "landscape",
      description:
        "Everyday for a week, I found myself sitting head to toe in camouflage after work, covered in beasties, waiting outside of a fox hole for Faith & her 5 cubs to appear. The first two days I only caught a 30 second glimpse. Day three however, she put on a show and allowed me to photograph her for 15 minutes before disappearing to looking for dinner.",
    },
    {
      name: "Rose the Roe ~ 2022",
      src: headtilt1,
      orientation: "Portrait",
      description:
        "The day I had my closest encounters with Roe Deer. I found myself out one afternoon in my usual spot for finding Roe Deer, but never did I think I'd be this lucky. The wind, infact all conditions, were perfect, I crept my way from one end of a narrow woodland to the field on the other side, before spotting this Juvenile & its mother grazing their way up towards me. After a short wait, the two got within 6-8 meters, Although the Roe is looking at me in the picture, I went undetected & the pair went on about their day.",
    },
  ];

  const printsArray = pathFinder("/prints")
    ? printsList
    : printsList?.slice(0, 3);

  return (
    <div className="pb-10">
      {printsArray.map((print, i) => (
        <div
          className="mt-24 grid grid-cols-2 max-md:grid-cols-1"
          data-aos="fade-left"
          data-aos-duration="1000"
          key={i}
        >
          <img
            src={print.src}
            className={`h-80 rounded-lg drop-shadow-xl hover:scale-125 pointer-events-none max-md:mb-5 max-md:h-72 mx-auto ${print.orientation == 'landscape' ? 'mr-10' : ''}`}
          />
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
              COMING SOON
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
