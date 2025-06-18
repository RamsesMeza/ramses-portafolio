import { useTranslations } from "../hooks/useLanguage";
import ToggleLanguageButton from "./ToggleLanguage";

function Navbar() {
  const t = useTranslations();
  return (
    //Convertir a sticky
    <div className="z-50 sticky top-0 w-full">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold flex items-center">
            <img
              src="/logo-2.png"
              alt="Logo"
              className="h-8 w-8 inline-block mr-2"
            />
            <p>Devsarrollos.com</p>
          </div>
          <ul className="flex space-x-4 items-center">
            {t.navbar?.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-gray-300 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <ToggleLanguageButton />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
