export default function Header() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div>
          <h1 className="text-5xl font-bold text-white">Adalid Islas Quintero</h1>
          <p className="text-lg text-cyan-300">Analista Jr. de Ciberseguridad</p>
        </div>

        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="hover:text-cyan-300 transition">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-cyan-300 transition">
              Habilidades
            </a>
          </li>
          <li>
            <a href="#operating-systems" className="hover:text-cyan-300 transition">
              Sistemas operativos
            </a>
          </li>
          <li>
            <a href="#courses" className="hover:text-cyan-300 transition">
              Cursos y certificaciones
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
