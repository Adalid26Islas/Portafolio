import { Mail, Linkedin, Facebook, Instagram, Smartphone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Datos de contacto */}
        <div className="space-y-2 text-center md:text-left">
          <p className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-cyan-300" /> adalidislasquintero@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-cyan-300" /> +52 56 6585 0416
          </p>
        </div>

        {/* Redes sociales */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="https://www.linkedin.com/in/adalid-islas-quintero-6abaaa36a/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 text-cyan-300 hover:text-white transition" />
          </a>
          <a href="https://www.facebook.com/adalid.islas.924056/" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-6 h-6 text-cyan-300 hover:text-white transition" />
          </a>
          <a href="https://www.instagram.com/adalid_islas/" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6 text-cyan-300 hover:text-white transition" />
          </a>
        </div>
      </div>

      <p className="text-center text-gray-400 mt-8">
        © {new Date().getFullYear()} Adalid Islas Quintero.
      </p>
    </footer>
  );
}
