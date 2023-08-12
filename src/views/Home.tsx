export const Home: React.FC = () => {
  return (
    <div className="h-screen bg-[url('assets/callum_buttery_kingfisher.jpg')] bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="relative h-32 w-10/12 ...">
        <div data-aos="fade-up" data-aos-duration="1000" className="absolute left-16 lg:left-48 top-32 text-5xl font-bold w-full max-lg:text-3xl">
          <h1 className="tracking-widest text-gray-200 drop-shadow-2xl">
            Callum Buttery
          </h1>
          <h2 className="mt-2 tracking-widest opacity-50 text-gray-200 drop-shadow-2xl">
            Photographer
          </h2>
        </div>
      </div>
    </div>
  );
};
