import transparentLogo from "../assets/logos/blue-dave-transparent.png";

export const Lockscreen: React.FC = () => {
  return (
    <div className="flex h-screen bg-[#2f2f2f]">
      <div className="m-auto">
        <img src={transparentLogo} className="h-72 max-lg:h-48" />
        <div className="text-6xl font-montserrat font mt-32 tracking-widest text-white max-lg:text-4xl">
          COMING SOON
        </div>
      </div>
    </div>
  );
};
