import me from '../assets/me.jpg'

export const About: React.FC = () => {
  return (
    <div className="flex items-center justify-center mt-32">
      <div className="w-8/12 grid grid-cols-2 gap-16 content-between border-blue-500 border-1 max-md:grid-cols-1">
        <img src={me} className="object-fit rounded-lg"/>
        <div>02</div>
      </div>
    </div>
  );
};
