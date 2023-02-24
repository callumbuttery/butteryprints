import me from '../assets/me.jpg'

export const About: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="h-56 grid grid-cols-2 gap-16 content-between border-blue-500 border-1">
        <img src={me} className="object-contain rounded-lg"/>
        <div>02</div>
      </div>
    </div>
  );
};
