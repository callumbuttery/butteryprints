import headshot1 from "../../assets/headshots/unnamed (2).jpg";

export const StoryCard: React.FC = () => {
  return (
    <div>
      <div className="columns-2 flex justify-center mt-16 bg-black max-w-5xl mx-auto">
        <img src={headshot1} className="h-96" />
        <div className="ml-10 inline-block max-w-lg text-blue-500">
            <div className="text-4xl font-montserrat font-bold text-white">Where it all began...</div>
            <p className="mt-10">testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest</p>
        </div>
      </div>
    </div>
  );
};
