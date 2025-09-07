import { useState } from "react";
import { Menu, X } from "lucide-react"; // íconos para menú móvil

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "Sobre mí", href: "#about" },
    { name: "Habilidades", href: "#skills" },
    { name: "Sistemas operativos", href: "#operating-systems" },
    { name: "Cursos y certificaciones", href: "#courses" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Nombre */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Adalid Islas Quintero
          </h1>
          <p className="text-sm md:text-lg text-cyan-300">Analista Jr. de Ciberseguridad</p>
        </div>

        {/* Menú escritorio */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-cyan-300 transition scroll-smooth"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Menú móvil */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menú desplegable móvil */}
      {isOpen && (
        <div className="md:hidden bg-gray-950 w-full px-4 pb-4">
          <ul className="flex flex-col space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-lg hover:text-cyan-300 transition scroll-smooth"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
