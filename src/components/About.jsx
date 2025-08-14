import { GraduationCap, Award, Briefcase } from "lucide-react";

export function About() {
  const education = [
    {
      degree: "Bachelor of Computer Applications",
      institution: "Bishop Heber college, Tiruchirappalli",
      year: "2019 - 2022",
      CGPA: "CGPA : 7.3",
    },
    {
      degree: "Master of Computer Applications",
      institution: "SNS College of Technology, Coimbatore",
      year: "2022 - 2024",
      CGPA: "CGPA : 7.9",
    },
  ];

  const certifications = [
    {
      name: "React Developer Certification",
      issuer: "Prepinsta",
      year: "2023",
    },
    {
      name: "Git & GitHub",
      issuer: "Udemy",
      year: "2024",
    },
    {
      name: "MERN Stack Developer Certification",
      issuer: "GUVI",
      year: "2025",
    },
  ];

  const experience = [
    {
      role: "Frontend Developer Intern",
      company: "Atozerv Software Solutions",
      duration: "Apr 2023",
      description:
        "Developed user interfaces with Bootstrap & Tailwind Frameworks, collaborated with senior developers and learned more about web development.",
    },
    {
      role: "MERN Stack Developer",
      company: "Sieora Software Solutions",
      duration: "May 2025 - Present",
      description:
        "Built responsive web applications with React and Tailwind CSS, integrated REST APIs, and Node JS for backend development.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          About{" "}
          <span className="bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Education */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-lg p-6 shadow-lg">
            <div className="mb-4">
              <h3 className="flex items-center text-white text-xl font-semibold">
                <GraduationCap className="mr-2 h-6 w-6" />
                Education
              </h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-gray-600 pl-4">
                  <h4 className="font-semibold text-white">{edu.degree}</h4>
                  <p className="text-gray-300">{edu.institution}</p>
                  <p className="text-gray-400 text-sm">{edu.year}</p>
                  <p className="text-gray-300 text-sm mt-2">{edu.CGPA}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-lg p-6 shadow-lg">
            <div className="mb-4">
              <h3 className="flex items-center text-white text-xl font-semibold">
                <Briefcase className="mr-2 h-6 w-6" />
                Experience
              </h3>
            </div>
            <div className="space-y-10">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-gray-600 pl-4">
                  <h4 className="font-semibold text-white">{exp.role}</h4>
                  <p className="text-gray-300">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.duration}</p>
                  <p className="text-gray-300 text-xs mt-2">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-lg p-6 shadow-lg">
            <div className="mb-4">
              <h3 className="flex items-center text-white text-xl font-semibold">
                <Award className="mr-2 h-6 w-6" />
                Certifications
              </h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="border-l-2 border-gray-600 pl-4">
                  <h4 className="font-semibold text-white">{cert.name}</h4>
                  <p className="text-gray-300">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
