import logofk from "../assets/fk.png" // adapte le chemin selon ton dossier
const Navbar = () => {
  return (
    <div className="flex justify-center md:justify-between items-center">
      <a href="#Home" className="flex items-center font-bold text-3xl md:text-xl">

        <img src={logofk} alt="Logo FK" className="w-15 h-auto" />
        <span className="text-bold text-4xl">FK</span><span className="text-success text-bold text-4xl">.Tech</span>
      </a>
      <label className="toggle text-base-content">
  <input type="checkbox" value="synthwave" className="theme-controller" />

  <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

  <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

</label>
      <ul className="hidden md:flex space-x-2">
        <li >
          <a href="#Home" className="btn btn-soft btn-success">Accueil</a>
        </li>
        <li>
          <a href="#About" className="btn btn-soft btn-success">À Propos</a>
        </li>
        <li>
          <a href="#Experiences" className="btn btn-soft btn-success">Mes expériences</a>
        </li>
        <li>
          <a href="#Projects" className="btn btn-soft btn-success">Mes projets</a>
        </li>
        <li>
          <a href="#Contact" className="btn btn-soft btn-success">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
