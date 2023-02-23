export const Home: React.FC = () => {
  return (
    <div className="h-screen bg-[url('assets/wallpaper.png')] bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="relative h-32 w-96 ...">
        <div data-aos="fade-up" data-aos-duration="1000" className="absolute left-16 lg:left-48 top-32 text-4xl font-bold w-96">
          <h1 className="tracking-widest text-gray-200">
            Callum Buttery
          </h1>
          <h2 className="mt-2 tracking-widest opacity-50 text-gray-200">
            Photographer
          </h2>
        </div>
      </div>
    </div>
  );
};
