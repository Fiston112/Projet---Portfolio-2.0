import { Mail } from "lucide-react";
import img from "../assets/portfolio.jpg";

const Home = () => {
  return (
    <div id="Home" className="flex flex-col-reverse p-5 md:flex-row justify-center items-center md:my-4 my-6">
      <div className="flex mt-54 flex-col">
        <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left -mt-45 md:mt-0">
          Bonjour, <br />
          je suis{" "}
          <span className="text-success font-bold text-5xl">Fiston Kasasa</span>
        </h1>
        <p className="my-6 text-md text-center md:text-left">
          Étudiant en Mastère 1{" "}
          <span className="font-bold">
            Management et Conseil en Systèmes d'Information à l'
            <span>ESGI - Paris</span>.
          </span>{" "}
          Passionné par la Transformation du numérique, je suis à la recherche
          d'une <span className="text-success font-bold">ALTERNANCE</span> en
          tant que{" "}
          <span className="text-success font-bold">Chef de Projet IT</span> ou{" "}
          <span className="text-success font-bold">Data Analyst.</span> <br />
          <br />
          Contactez-moi si mon profil retient votre attention, je serai ravi
          d’échanger lors d’un entretien.
        </p>
        <a href="mailto:kasasafiston@gmail.com" className="btn btn-success md:w-fit ">
          <Mail className="w- h-5" />
          Contactez-moi
        </a>
      </div>
      <div className="md:ml-25">
        <img
          src={img}
          alt="photo FK"
          className="w-50 h-50 mt-5 max-w-[400px] object-cover border-8 border-success shadow-xl sm:w-60 sm:h-60 md:w-60 md:h-60 lg:w-88 lg:h-88 md:mt-15 transition-all duration-300"
          style={{
            borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33%",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
