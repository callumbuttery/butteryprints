import headshot1 from "../../assets/headshots/unnamed (2).jpg";

export const StoryCard: React.FC = () => {
  return (
    <div>
      <div className="columns-2 flex justify-center mt-16 max-w-5xl mx-auto">
        <img src={headshot1} className="h-96" />
        <div className="ml-10 inline-block max-w-2xl text-blue-500">
            <div className="text-4xl font-montserrat text-black">Where it all began...</div>
            <p className="mt-10 font-monserrat text-gray-500">
              My passion for wildlife & nature was instilled in me at a young age. I was fortunate enough that the house I grew up & lived in for 25 years, 
              is on the edge of farm land. Miles upon miles of open fields, meadows, hedgerows and woodlands to explore, the perfect recipe for encountering
              all types of british wildlife.
            </p>
        </div>
      </div>
    </div>
  );
};
