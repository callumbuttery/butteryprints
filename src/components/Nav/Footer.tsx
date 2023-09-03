export const Footer: React.FC = () => {

  const currentYear = new Date().getFullYear()
  return (
    <footer>
      <div className="bg-transparent-200 pt-10 pb-5 text-center">
        <span className="font-montserrat">© {currentYear} | Callum Buttery</span>
      </div>
    </footer>
  );
};
