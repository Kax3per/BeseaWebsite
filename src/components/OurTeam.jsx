import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function OurTeam() {
  const teamMembers = [
    {
      name: "Anna Kowalska",
      role: "Project Manager",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Koordynuje projekty i dba o każdy szczegół.",
      links: {
        github: "https://github.com/anna",
        linkedin: "https://linkedin.com/in/anna",
        twitter: "https://twitter.com/anna",
      },
    },
    {
      name: "Jan Nowak",
      role: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Tworzy piękne i responsywne interfejsy.",
      links: {
        github: "https://github.com/jan",
        linkedin: "https://linkedin.com/in/jan",
        twitter: "https://twitter.com/jan",
      },
    },
    {
      name: "Ewa Zielińska",
      role: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      bio: "Projektuje intuicyjne i eleganckie doświadczenia.",
      links: {
        github: "https://github.com/ewa",
        linkedin: "https://linkedin.com/in/ewa",
        twitter: "https://twitter.com/ewa",
      },
    },
    {
      name: "Piotr Wiśniewski",
      role: "Backend Developer",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
      bio: "Tworzy solidne i skalowalne rozwiązania.",
      links: {
        github: "https://github.com/piotr",
        linkedin: "https://linkedin.com/in/piotr",
        twitter: "https://twitter.com/piotr",
      },
    },
    {
      name: "Katarzyna Lewandowska",
      role: "Marketing Specialist",
      image: "https://randomuser.me/api/portraits/women/77.jpg",
      bio: "Buduje wizerunek marki i strategię marketingową.",
      links: {
        github: "https://github.com/kasia",
        linkedin: "https://linkedin.com/in/kasia",
        twitter: "https://twitter.com/kasia",
      },
    },
    {
      name: "Michał Kamiński",
      role: "DevOps Engineer",
      image: "https://randomuser.me/api/portraits/men/42.jpg",
      bio: "Zapewnia stabilność i ciągłość działania systemów.",
      links: {
        github: "https://github.com/michal",
        linkedin: "https://linkedin.com/in/michal",
        twitter: "https://twitter.com/michal",
      },
    },
  ];

  const [mainMember, setMainMember] = useState(teamMembers[0]);

  const others = teamMembers.filter((member) => member.name !== mainMember.name);

  return (
    <section className="relative w-full py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Our Team</h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Poznaj nasz zespół ekspertów, którzy stoją za projektem.
        </p>
      </div>

      {/* Główna osoba */}
      <div className="flex justify-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center w-80"
        >
          <div className="w-36 h-36 rounded-full overflow-hidden mb-4 border-4 border-green-500">
            <img
              src={mainMember.image}
              alt={mainMember.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold">{mainMember.name}</h3>
          <p className="text-green-500 font-medium">{mainMember.role}</p>
          <p className="mt-2">{mainMember.bio}</p>

          {/* Linki społecznościowe */}
          <div className="flex space-x-4 mt-4">
            {mainMember.links.github && (
              <a href={mainMember.links.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6" />
              </a>
            )}
            {mainMember.links.linkedin && (
              <a href={mainMember.links.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6" />
              </a>
            )}
            {mainMember.links.twitter && (
              <a href={mainMember.links.twitter} target="_blank" rel="noopener noreferrer">
                <Twitter className="w-6 h-6" />
              </a>
            )}
          </div>
        </motion.div>
      </div>

      {/* Druga linia: 2 osoby */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12 justify-center">
        {others.slice(0, 2).map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="rounded-2xl shadow-xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform cursor-pointer"
            onClick={() => setMainMember(member)}
          >
            <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-green-500">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
            <p className="text-green-500 font-medium">{member.role}</p>
            <p className="text-gray-600 mt-2">{member.bio}</p>
            <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-full text-sm">
              View Profile
            </button>
          </motion.div>
        ))}
      </div>

      {/* Trzecia linia: 3 osoby */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 justify-center">
        {others.slice(2).map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="rounded-2xl shadow-xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform cursor-pointer"
            onClick={() => setMainMember(member)}
          >
            <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-green-500">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
            <p className="text-green-500 font-medium">{member.role}</p>
            <p className="text-gray-600 mt-2">{member.bio}</p>
            <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-full text-sm">
              View Profile
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
