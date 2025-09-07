import { Shield, Server, Cloud, Network, FileTerminal, MonitorCog } from "lucide-react";
import { FaLinux } from "react-icons/fa";
export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-gray-900 text-white flex flex-col items-center pb-20"
    >
      <h1 className="text-5xl font-bold my-12 text-cyan-300">Habilidades</h1>

      {/* Contenedor con ancho 50% y centrado */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-1/2 mx-auto">
        {/* Fila 1 */}
        <div className="bg-gray-950 p-12 rounded-3xl text-center shadow-md hover:shadow-[0_0_25px_3px_rgba(0,255,255,0.6)] transition">
          <Shield className="w-24 h-24 mx-auto mb-6 text-cyan-300" />
          <h3 className="text-2xl font-semibold">Ciberseguridad</h3>
        </div>

        <div className="bg-gray-950 p-12 rounded-3xl text-center shadow-md hover:shadow-[0_0_25px_3px_rgba(0,255,255,0.6)] transition">
          <Server className="w-24 h-24 mx-auto mb-6 text-cyan-300" />
          <h3 className="text-2xl font-semibold">Servidores</h3>
        </div>

        <div className="bg-gray-950 p-12 rounded-3xl text-center shadow-md hover:shadow-[0_0_25px_3px_rgba(0,255,255,0.6)] transition">
          <Cloud className="w-24 h-24 mx-auto mb-6 text-cyan-300" />
          <h3 className="text-2xl font-semibold">Nube</h3>
        </div>

        {/* Fila 2 */}
        <div className="bg-gray-950 p-12 rounded-3xl text-center shadow-md hover:shadow-[0_0_25px_3px_rgba(0,255,255,0.6)] transition">
          <Network className="w-24 h-24 mx-auto mb-6 text-cyan-300" />
          <h3 className="text-2xl font-semibold">Redes</h3>
        </div>

        <div className="bg-gray-950 p-12 rounded-3xl text-center shadow-md hover:shadow-[0_0_25px_3px_rgba(0,255,255,0.6)] transition">
          <FileTerminal className="w-24 h-24 mx-auto mb-6 text-cyan-300" />
          <h3 className="text-2xl font-semibold">Scripting</h3>
        </div>

        <div className="bg-gray-950 p-12 rounded-3xl text-center shadow-md hover:shadow-[0_0_25px_3px_rgba(0,255,255,0.6)] transition">
          <FaLinux className="w-24 h-24 mx-auto mb-6 text-cyan-300" />
          <h3 className="text-2xl font-semibold">Linux</h3>
        </div>
      </div>
    </section>
  );
}
