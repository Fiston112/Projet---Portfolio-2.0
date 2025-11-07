import Title from "./Title";

import imgJIRA from "../assets/techno/jira.png";
import imgTRELLO from "../assets/techno/trello.png";
import imgCONFLUENCE from "../assets/techno/confluence.png";
import imgPOWERBI from "../assets/techno/powerBI.png";
import imgPYTHON from "../assets/techno/python.png";
import imgSQL from "../assets/techno/sql.png";
import imgREACT from "../assets/techno/react-js.png";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgDAISYUI from "../assets/techno/daisyUI.png";

import equalis from "../assets/compagnies/equalis.png";
import leclerc from "../assets/compagnies/leclerc.png";
import oxanfoxs from "../assets/compagnies/oxanfoxs.png";
import oci from "../assets/compagnies/oci_carre.png";

const skills = [
  { id: 1, name: "Jira", image: imgJIRA },
  { id: 2, name: "Trello", image: imgTRELLO },
  { id: 3, name: "Confluence", image: imgCONFLUENCE },
  { id: 4, name: "Power BI", image: imgPOWERBI },
  { id: 5, name: "Python", image: imgPYTHON },
  { id: 6, name: "SQL", image: imgSQL },
  { id: 7, name: "React", image: imgREACT },
  { id: 8, name: "Tailwind", image: imgTAILWIND },
  { id: 9, name: "DaisyUI", image: imgDAISYUI },
];

const experiences = [
  {
    id: 1,
    role: "Chef de Projet Applicatif",
    company: "Equalis",
    period: "Juin - Août 2025 - Stage",
    description: [
      "Participer au suivi des projets logiciels internes.",
      "Coordonner les équipes de développement et les utilisateurs.",
      "Analyser les besoins fonctionnels et contribuer aux phases de tests et déploiement des applications.",
    ],
    image: equalis,
  },
  {
    id: 2,
    role: "Data Analyst",
    company: "E.Leclerc",
    period: "Nov. 2024 - Févr. 2025 - Stage",
    description: [
      "Nettoyage et analyse de données avec Python et SQL.",
      "Création de tableaux de bord Power BI pour le suivi des indicateurs.",
      "Contribution à l’interprétation des résultats.",
    ],
    image: leclerc,
  },
  {
    id: 3,
    role: "Chef de Projet IT & Lead UI/UX",
    company: "OCI Informatique & Digital",
    period: "Avril - Juin 2022 - Freelance",
    description: [
      "Définition des objectifs, planification des étapes et suivi des livrables.",
      "UX/UI designers et autres parties prenantes.",
      "Optimisation des ressources et respect des échéances.",
      "Recherche et intégration de nouvelles tendances UX/UI et IT.",
    ],
    image: oci,
  },
];

const Experiences = () => {
  return (
    <div id="Experiences" className="-mt-1 -md:mt-8 -mb-8 py-3">
      <Title title="Expériences" />
      <div className="flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="flex flex-wrap gap-5 justify-center items-center md:w-1/3 mt-3 md:mt-0">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className=" flex justify-center items-center flex-col"
            >
              <div className="flex w-18 h-18 p-5 rounded-full border-2 border-success my-4">
                <img
                  src={skill.image}
                  alt="{skill.name}"
                  className="object-center rounded-full h-full w_full"
                />
              </div>
              <span className="mt-2 text-sm"> {skill.name} </span>
            </div>
          ))}
        </div>
        <div className="md:ml-4 flex flex-col space-y-2">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="bg-base-200 p-2 rounded-xl shadow-lg"
            >
              <div className="flex items-center">
                <img
                  src={experience.image}
                  alt={experience.company}
                  className="object-cover h-7 w-7"
                />
                <div className="ml-4">
                  <h1 className="text-xl text-success font-bold">
                    {experience.role}, {experience.company}
                  </h1>
                  <span className="text-sm">{experience.period}</span>
                </div>
              </div>

              <ul className="list-disc ml-16 mt-2">
                {experience.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
