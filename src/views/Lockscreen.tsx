export const Lockscreen: React.FC = () => {
  return (
    <div className="h-screen bg-[url('assets/logos/3D-extended.jpg')] bg-no-repeat bg-cover bg-center">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="absolute bottom-0 left-0 right-0 top-96 grid place-items-center text-6xl pt-32 font-montserrat font tracking-widest text-white max-lg:text-4xl"
      >
        COMING SOON
      </div>
    </div>
  );
};
