export default function AboutMe() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-950 text-white flex items-center pt-10"
    >
      <div className="w-[50%] mx-auto grid md:grid-cols-2 items-center">
        
        {/* Texto de descripción */}
        <div>
          <h2 className="text-5xl font-bold mb-6 text-cyan-300">Sobre mí</h2>
          <p className="text-lg leading-relaxed text-gray-300">
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
        <div className="flex justify-center">
          <img
            src="./assets/Adalid.png" // 👈 reemplaza con tu imagen
            alt="Foto de Adalid Islas Quintero"
            className="w-80 h-200 object-cover rounded-2xl shadow-[0_0_10px_2px_rgba(0,255,255,0.7)]"
          />
        </div>
      </div>
    </section>
  );
}
