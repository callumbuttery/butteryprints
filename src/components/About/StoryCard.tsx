import headshot1 from "../../assets/headshots/unnamed (1).jpg";
import headshot2 from "../../assets/headshots/unnamed (2).jpg";
import headshot3 from "../../assets/headshots/unnamed.jpg";

export const StoryCard: React.FC = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2 mt-32 max-w-4xl mx-auto max-md:grid-cols-1">
        <img src={headshot1} className="h-96 mr-10 rounded drop-shadow-2xl pointer-events-none max-md:mx-auto max-md:p-10" />
        <div className="ml-10 inline-block max-w-2xl text-blue-500 max-md:ml-0">
          <div className="text-4xl font-montserrat text-black max-md:text-2xl max-md:mx-auto max-md:text-center">Where it all began...</div>
          <p className="mt-10 font-monserrat text-gray-500 max-md:w-96 max-md:mx-auto max-md:text-md max-md:p-10">
            My passion for wildlife & nature was instilled in me at a young age. I was fortunate enough that the house I grew up & lived in for 25 years,
            is on the edge of farm land. Miles upon miles of open fields, meadows, hedgerows and woodlands to explore, the perfect recipe for encountering
            all types of British wildlife.
            <br />
            <br />
            The other fortunate factor I had was my Dad. A man who grew up even closer to wildlife than I did. Over the years, I've watched him call in
            everything from foxes to finches using his skills and experience. The vast majority of my wildife knowledge, I have inherited from him.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-32 max-w-4xl mx-auto max-md:grid-cols-1">
        <div className="mr-10 inline-block max-w-2xl text-blue-500 max-md:mr-0">
          <div className="text-4xl font-montserrat text-black max-md:text-2xl max-md:mx-auto max-md:text-center">...The story to date...</div>
          <p className="mt-10 font-monserrat text-gray-500 max-md:w-96 max-md:mx-auto max-md:text-md max-md:p-10">
            Graduating from high school in 2016, I had a year out to decide what I wanted to do with my life. One day, while looking for something to do,
            I picked up my dad's camera and took it for a spin. Over the following weeks I found my addictive personality take over as I waded into
            the world of photography, I was hooked pretty quickly.
            <br />
            <br />
            I first started off in the world of landscape photography to learn the craft of using a camera. Since then I have explored all different types
            of photography, however wildife photography is where my heart is. The thill of sitting within a few meters of a truly wild animal is a feeling
            the world has lost to the history books - few get to experience it in this modern world.
          </p>
        </div>
        <img src={headshot2} className="h-96 ml-48 rounded drop-shadow-2xl pointer-events-none max-md:mx-auto max-md:p-10" />
      </div>
      <div className="grid grid-cols-2 mt-32 max-w-4xl mx-auto max-md:grid-cols-1"> 
        <img src={headshot3} className="h-96 mr-10 rounded drop-shadow-2xl pointer-events-none max-md:mx-auto max-md:p-10" />
        <div className="ml-10 inline-block max-w-2xl text-blue-500 max-md:ml-0">
          <div className="text-4xl font-montserrat text-black max-md:text-2xl max-md:mx-auto max-md:text-center">...The journey ahead</div>
          <p className="mt-10 font-monserrat text-gray-500 max-md:w-96 max-md:mx-auto max-md:text-md max-md:p-10">
            From late 2023 onwards, I will be looking at expanding my horizons both in both adventures and business. My main goal is to get my work out
            there for the world to see, my website print store is one way to do this, however I also want to sell physical prints to people in person.
            As for the world of adventures, I still have loads of Scotland to see.
            <br />
            <br />
            “Because in the end, you won't remember the times you spent in the office or mowing your lawn. Climb that goddamn mountain.” - Jack Kerouac
          </p>
        </div>
      </div>
    </div>
  );
};
