export default function Timeline() {
  const education = [
    {
      year: "2023 - 2025",
      title: "Ing. en Desarrollo y Gestión de Software.",
      institution: "Universidad Tecnológica de Xicotepec de Juárez",
      description: "Enfoque en el desarrollo Frontend y la seguridad durante el desarrollo de Software",
    },
    {
      year: "2021 - 2023",
      title: "TSU en Desarrollo de Software Multiplataforma.",
      institution: "Universidad Tecnológica de Xicotepec de Juárez",
      description: "Enfoque en el desarrollo de Software para plataformas Web y Móviles.",
    },
    { year: "2017 - 2020", title: "Bachillerato.", institution: "Bachillerato Digital #74" },
  ];

  const experience = [
    {
      year: "2025 - Actual",
      title: "Analista Jr. de Ciberseguridad",
      company: "Innovattia",
      description:
        "Implementación de medidas de seguridad en infraestructura, automatización de procesos a través de scripts, respuesta a incidentes de seguridad, remediación de vulnerabilidades.",
    },
    {
      year: "2025 - 2025",
      title: "Becario de seguridad e infraestructura",
      company: "Innovattia",
      description: "Análisis e implementación de infraestructura de sistemas internos",
    },
    {
      year: "2023 - 2023",
      title: "Desarrollador Front-end",
      company: "Universidad Tecnológica de Xicotepec de Juárez",
      description:
        "Desarrollador frontend de aplicación móvil para la gestión de servicios brindados por microempresarios.",
    },
  ];

  return (
    <section id="timeline" className="bg-gray-900 text-white py-16">
      <div className="relative w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Línea central */}
        <div className="hidden md:block absolute left-1/2 top-0 w-1 h-full bg-cyan-300 transform -translate-x-1/2"></div>

        {/* Educación - izquierda */}
        <div className="space-y-8 text-right">
          <h3 className="text-4xl font-bold mb-4 text-cyan-300">Educación</h3>
          {education.map((item, idx) => (
            <div key={idx} className="relative md:pr-8">
              <div className="absolute md:right-[-9px] top-2 w-5 h-5 bg-cyan-300 rounded-full border-4 border-gray-900"></div>
              <p className="text-gray-400 text-sm">{item.year}</p>
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <p className="text-gray-300">{item.institution}</p>
              {item.description && <p className="text-gray-400">{item.description}</p>}
            </div>
          ))}
        </div>

        {/* Experiencia - derecha */}
        <div className="space-y-8 text-left">
          <h3 className="text-4xl font-bold mb-4 text-cyan-300">Experiencia</h3>
          {experience.map((item, idx) => (
            <div key={idx} className="relative md:pl-8">
              <div className="absolute md:left-[-9px] top-2 w-5 h-5 bg-cyan-300 rounded-full border-4 border-gray-900"></div>
              <p className="text-gray-400 text-sm">{item.year}</p>
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <p className="text-gray-300">{item.company}</p>
              {item.description && <p className="text-gray-400">{item.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
