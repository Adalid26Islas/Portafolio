export default function AboutMe() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-950 text-white flex items-center pt-28 px-4 md:px-0"
    >
      <div className="w-full md:w-4/5 lg:w-3/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        
        {/* Texto de descripción */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-cyan-300 text-center md:text-left">
            Sobre mí
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-300 text-justify">
            Soy <span className="font-semibold text-white">Adalid Islas Quintero</span>, 
            analista Jr. de ciberseguridad con experiencia en administración de servidores, 
            y configuración de sistemas operativos Linux y Windows. 
            Me apasiona el aprendizaje constante, las buenas prácticas de seguridad 
            y el desarrollo de soluciones para proteger infraestructuras críticas. 
            También cuento con conocimientos en gestión de bases de datos, implementación 
            de firewalls, monitoreo de redes y automatización de tareas mediante scripting con
            lenguajes como bash y python. 
            Disfruto trabajar en entornos colaborativos, enfrentar nuevos desafíos técnicos 
            y mantenerme actualizado en tendencias de ciberseguridad, como amenazas emergentes, 
            normativas de cumplimiento. 
            Mi objetivo es seguir creciendo profesionalmente, aportando valor a través de 
            la prevención, detección y respuesta efectiva ante incidentes de seguridad.
          </p>
        </div>

        {/* Imagen con bordes redondeados + sombra neón */}
        <div className="flex justify-center mt-6 md:mt-0">
          <img
            src="/assets/Adalid.png"
            alt="Foto de Adalid Islas Quintero"
            className="w-full max-w-sm h-auto object-cover rounded-2xl shadow-[0_0_10px_2px_rgba(0,255,255,0.7)]"
          />
        </div>
      </div>
    </section>
  );
}
