import Title from "./Title";
import img from "../assets/portfolio2.jpg";
import { CalendarSync, LetterText, Paintbrush } from "lucide-react";

const aboutSections = [
  {
    id: 1,
    title: "Chef de Projets IT",
    description:
      "Passionné par la gestion de projet, j’aime coordonner les équipes et transformer les idées en solutions concrètes. Mon objectif : garantir la réussite des projets en alliant organisation, communication et vision stratégique.",
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
    <section id="About" className="bg-base-300 pt-20 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <Title title="À Propos" />

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10">
          {/* Image */}
          <div className="hidden md:block">
            <img
              src={img}
              alt="photo FK"
              className="w-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Texte */}
          <div className="md:ml-4 space-y-6 w-full md:w-2/3">
            {aboutSections.map((Section) => (
              <div
                key={Section.id}
                className="flex flex-col md:flex-row items-center bg-base-100 p-6 rounded-xl shadow-xl"
              >
                <div className="mb-3 md:mb-0">{Section.icon}</div>
                <div className="md:ml-4 text-center md:text-left">
                  <h2 className="text-xl font-bold mb-1">{Section.title}</h2>
                  <p className="text-sm">{Section.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
