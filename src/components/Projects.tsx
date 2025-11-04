import Title from "./Title";

import projet1 from "../assets/projects/projet1.png";
import projet2 from "../assets/projects/projet2.png";
import projet3 from "../assets/projects/projet3.png";
import projet4 from "../assets/projects/projet4.png";
import projet5 from "../assets/projects/projet5.png";
import projet6 from "../assets/projects/projet6.png";
import { Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Portfolio Personnel",
    description:
      "Un site personnel moderne pour présenter mon parcours, mes compétences et mes projets.",
    technologies: ["HTML", "React", "TS", "Tailwind CSS", "DaisyUI"],
    repoLink: "",
    image: projet1,
  },
  {
    id: 2,
    title: "Dashboard Power BI – Analyse des ventes",
    description:
      "Création d’un tableau de bord interactif pour visualiser la performance des ventes par produit, région et période.",
    technologies: ["Power BI", "Excel", "SQL"],
    repoLink: "",
    image: projet2,
  },
  {
    id: 3,
    title: "Base de Données – Système de Gestion Étudiants",
    description:
      "Conception d’une base de données SQL avec tables, relations et requêtes pour gérer les informations étudiantes.",
    technologies: ["SQL", "PostegreSQL"],
    repoLink: "",
    image: projet3,
  },
  {
    id: 4,
    title: "Gestion de projet JIRA – Digital Transformation",
    description:
      "Planification des sprints, création des user stories, suivi des tâches et coordination d’équipe dans un cadre Scrum.",
    technologies: ["Jira", "Scrum", "Agile"],
    repoLink: "",
    image: projet4,
  },
  {
    id: 5,
    title: "Application WEB - Nextalent RH",
    description:
      "Devéloppement d'une appplication Web de gestion de recrutement des stagiares et alternants.",
    technologies: ["HTML", "JavaScrip", "React", "Node.js", "Express.js", "Prisma"],
    repoLink: "",
    image: projet5,
  },
  {
    id: 6,
    title: "Base de données – Gestion des recrutements",
    description:
      "Base de données SQL avec tables, relations et requêtes pour gérer les informations des stagiares et alternants.",
    technologies: ["SQL", "PostegreSQL"],
    repoLink: "",
    image: projet6,
  },
];

const Projects = () => {
  return (
    <div id="Projects" className="mt-20">
      <Title title="Mes Projets" />
      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-base-300 p-5 h-fit rounded-xl shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-xl h-56 object-cover"
            />
            <div>
              <h1 className="my-2 font-bold text-success">{project.title}</h1>
              <p className=" text-sm"> {project.description} </p>
            </div>
            <div className="flex flex-wrap gap-2 my-3">
                {project.technologies.map((tech) => (
                    <span className="badge badge-success badge-sm">
                        {tech}
                    </span>
                ))}
            </div>
            {/* <div>
                <a className="btn btn-success" href=""> {project.demoLink}
                    Demo
                    <video className="w-4" />
                </a>
            </div> */}
             <div>
                <a className="btn btn-neutral w-3/3" href="https://github.com/Fiston112"> {project.repoLink}
                    GitHub
                    <Github className="w-4" />
                </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
