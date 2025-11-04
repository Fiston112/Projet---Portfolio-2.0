import Title from "./Title";
import img from "../assets/portfolio2.jpg";
import { CalendarSync, LetterText, Paintbrush } from "lucide-react";

const aboutSections = [
  {
    id: 1,
    title: "Chef de Projets IT",
    description:
      "Passionné par la gestion de projet, j’aime coordonner les équipes et transformer les idées en solutions concrètes. Mon objectif : garantir la réussite des projets en alliant organisation, communication et vision stratégique",
    icon: <LetterText className="text-success scale-150" />,
  },
  {
    id: 2,
    title: "Data Analyst",
    description:
      "Curieux de nature, j’adore explorer et donner du sens aux données. J’utilise les outils d’analyse pour transformer les chiffres en insights utiles à la prise de décision.",
    icon: <CalendarSync className="text-success scale-150" />,
  },
  {
    id: 3,
    title: "Développeur Web",
    description:
      "Passionné par le design et l’expérience utilisateur, je conçois des interfaces modernes et intuitives. J’aime donner vie aux maquettes grâce à un code propre et efficace.",
    icon: <Paintbrush className="text-success scale-150" />,
  },
];

export const About = () => {
  return (
    <div id="About" className="bg-base-300 p-6 mb-4 md:mb-8">
  <Title title="À Propos" />
  <div className="flex justify-center items-center py-10 md:py-16">
    <div className="hidden md:block">
      <img
        src={img}
        alt="photo FK"
        className="w-82 object-cover rounded-xl"
      />
    </div>
    <div className="md:ml-4 space-y-4 mb-0">
      {aboutSections.map((Section) => (
        <div
          key={Section.id}
          className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-130 shadow-xl"
        >
          <div className="mb-2 md:mb-0">{Section.icon}</div>
          <div className="md:ml-4 text-center md:text-left">
            <h2 className="text-xl font-bold mb-1">{Section.title}</h2>
            <p className="text-sm">{Section.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  );
};

export default About;
