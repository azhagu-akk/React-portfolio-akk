import { useState } from "react";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiBootstrap,
  SiTailwindcss,
  SiGit,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiGithub,
  SiPostman,
  SiNetlify,
  SiVercel,
} from "react-icons/si";

export function Skills() {
  const skills = [
    { name: "HTML5", icon: SiHtml5, category: "Frontend" },
    { name: "CSS3", icon: SiCss3, category: "Frontend" },
    { name: "Bootstrap", icon: SiBootstrap, category: "Frontend" },
    { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend" },
    { name: "JavaScript", icon: SiJavascript, category: "Frontend" },
    { name: "React", icon: SiReact, category: "Frontend" },
    { name: "Redux", icon: SiRedux, category: "Frontend" },
    { name: "Express.js", icon: SiExpress, category: "Backend" },
    { name: "Node.js", icon: SiNodedotjs, category: "Backend" },
    { name: "MongoDB", icon: SiMongodb, category: "Backend" },
    { name: "GitHub", icon: SiGithub, category: "Tools" },
    { name: "Postman", icon: SiPostman, category: "Tools" },
    { name: "Netlify", icon: SiNetlify, category: "Tools" },
    { name: "Vercel", icon: SiVercel, category: "Tools" },
  ];

  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(skills.map((skill) => skill.category))),
  ];

  const filteredSkills =
    activeFilter === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeFilter);

  return (
    <section
      id="skills"
      className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-10">
          {" "}
          <span className="bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium text-xs md:text-base transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-lg scale-105"
                  : "bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 hover:text-white hover:from-gray-700 hover:to-gray-800"
              } border border-gray-600 hover:border-gray-500`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {filteredSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${activeFilter}`}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg hover:border-gray-600 transition-all duration-500  shadow-lg hover:shadow-2xl transform hover:-translate-y-1 group animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6 text-center">
                <skill.icon className="w-12 h-12 mx-auto mb-4 text-white" />

                <h3 className="font-semibold text-white mb-1 transition-colors duration-300 group-hover:text-gray-200">
                  {skill.name}
                </h3>
                <p className="text-gray-400 text-sm transition-colors duration-300 group-hover:text-gray-300">
                  {/* {skill.category} */}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No skills found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
