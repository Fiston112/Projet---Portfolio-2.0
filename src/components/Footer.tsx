import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-success text-neutral py-5 mt-1">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
        {/* Texte gauche */}
        <p className="text-sm mb-6 text-neutral sm:mb-0 text-center sm:text-left">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-bold">FK.Tech</span> — Tous droits réservés.
        </p>

        {/* Icônes sociales */}
        <div className="flex gap-8">
          <a
            href="https://github.com/fiston112"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-200 transition-transform duration-200"
            title="GitHub"
          >
            <Github size={26} />
          </a>

          <a
            href="https://www.linkedin.com/in/fiston-kasasa-04b026b3"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-200 text-blue transition-transform duration-200"
            title="LinkedIn"
          >
            <Linkedin size={26} />
          </a>

          <a
            href="mailto:kasasafiston@gmail.com"
            className="hover:scale-200 transition-transform duration-200"
            title="Email"
          >
            <Mail size={26} />
          </a>
        </div>
      </div>

      {/* Ligne décorative */}
      <div className="mt-8 border-t border-white/20 pt-3 text-center text-sm opacity-100">
        <span className="text-white text-semibold">Créé par </span>
        <span className="text-neutral font-bold">Fiston Kasasa</span>
      </div>
    </footer>
  );
}
