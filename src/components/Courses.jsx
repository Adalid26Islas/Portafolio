import { useState } from "react";

// Importa las imágenes de tus certificados
import BitsBytesCert from "../../src/assets/certs/bits.jpeg";
import SSHCert from "../../src/assets/certs/ssh.jpg";
import SOyTuCert from "../../src/assets/certs/sistemas.jpeg";
import VimCert from "../../src/assets/certs/vim.png";
import TecnEmergCert from "../../src/assets/certs/emergentes.png";
import AsistenciaCert from "../../src/assets/certs/aspectos.jpeg";

export default function Courses() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const courses = [
    { name: "Los bits y bytes de las redes informáticas", certifier: "Coursera", img: BitsBytesCert },
    { name: "SSH > Secure Shell de cero a experto", certifier: "Udemy", img: SSHCert },
    { name: "Sistemas Operativos y tú", certifier: "Coursera", img: SOyTuCert },
    { name: "Vim desde cero", certifier: "EDteam", img: VimCert },
    { name: "Aspectos básicos de la asistencia técnica", certifier: "Coursera", img: AsistenciaCert },
    { name: "Introducción a las Tecnologías emergentes", certifier: "Santander", img: TecnEmergCert },
  ];

  const openModal = (img) => {
    setSelectedCert(img);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setSelectedCert(null), 300);
  };

  return (
    <section id="courses" className="bg-gray-900 text-white py-16 pt-[120px] scroll-mt-[120px] px-4 md:px-0">
      <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-cyan-300 text-center">
        Cursos y certificaciones
      </h2>

      <div className="flex justify-center">
        {/* Contenedor responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 w-full md:w-1/2 mx-auto">
          {courses.map((course) => (
            <div
              key={course.name}
              onClick={() => openModal(course.img)}
              className="cursor-pointer bg-gray-950 p-6 sm:p-8 rounded-xl shadow-md hover:shadow-[0_0_20px_2px_rgba(0,255,255,0.6)] transition flex flex-col items-center"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">{course.name}</h3>
              <p className="text-gray-300 text-center">{course.certifier}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-opacity duration-300 ${
            showModal ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeModal}
        >
          <div
            className={`bg-gray-950 p-4 rounded-lg max-w-[90%] max-h-[90%] transform transition-all duration-300 ${
              showModal ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCert}
              alt="Certificado"
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
