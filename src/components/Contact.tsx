import Title from "./Title";

export default function Contact() {
  return (
    <div
      id="Contact"
      className="py-5 px-6 pt-20 bg-base-300 flex flex-col items-center"
    >
      <Title title="Contact" />
      <p className="text-white mb-5 text-center max-w-2xl leading-5">
        Vous souhaitez échanger à propos d’une opportunité, d’un projet ou
        simplement en savoir plus sur mon profil ? N’hésitez pas à me contacter
        via ce formulaire.
      </p>

      {/* --- FORMULAIRE --- */}
      <form
        action="https://formspree.io/f/xyznbpvy" // 🔁 à remplacer par ton lien Formspree ou autre
        method="POST"
        className="w-full max-w-lg shadow-md rounded-xl p-0 space-y-4"
      >
        <div>
          <label className="block text-left font-medium text-success mb-2">
            Nom complet
          </label>
          <input
            type="text"
            name="name"
            placeholder="Ex : Kasasa Fiston"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-left font-medium text-success mb-2">
            Adresse email
          </label>
          <input
            type="email"
            name="email"
            placeholder="exemple@email.com"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-left font-medium text-success mb-2">
            Message
          </label>
          <textarea
            name="message"
            rows={5}
            placeholder="Votre message..."
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full btn btn-success font-medium py-3 rounded-lg shadow-2xl transition"
        >
          Envoyer le message
        </button>
      </form>
    </div>
  );
}
