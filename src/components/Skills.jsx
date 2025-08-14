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
} from "react-icons/si";

export function Skills() {
  const skills = [
    { name: "HTML5", icon: SiHtml5, category: "Language" },
    { name: "CSS3", icon: SiCss3, category: "Language" },
    { name: "Bootstrap", icon: SiBootstrap, category: "Styling" },
    { name: "Tailwind CSS", icon: SiTailwindcss, category: "Styling" },
    { name: "JavaScript", icon: SiJavascript, category: "Language" },   
    { name: "React", icon: SiReact, category: "Frontend" },
    { name: "Redux", icon: SiRedux, category: "State Management" },
    { name: "Express.js", icon: SiExpress, category: "Backend" },
    { name: "Node.js", icon: SiNodedotjs, category: "Backend" },
    { name: "MongoDB", icon: SiMongodb, category: "Database" },
    { name: "GitHub", icon: SiGithub, category: "Tools" },
    { name: "Postman", icon: SiPostman, category: "Tools" },


  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          {" "}
          <span className="bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg hover:border-gray-600 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <div className="p-8 text-center">
                <skill.icon className="w-12 h-12 mx-auto mb-4 text-white" />

                <h3 className="font-semibold text-white mb-1">{skill.name}</h3>
                <p className="text-gray-400 text-sm">{skill.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
