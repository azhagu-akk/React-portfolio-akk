import task from "../assets/Task.webp";
import blog from "../assets/blogging.webp";
import electronics from "../assets/electronics.webp";
import library from "../assets/Library.webp";
import { Github, ExternalLink } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: task,
      technologies: [
        "Tailwind CSS",
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
      ],
      codeUrl: "https://github.com/azhagu-akk/Task-Manager-3",
      liveUrl: "https://taskmanagerapp3.netlify.app/",
    },
    {
      title: "Blogify",
      description:
        "Modern blogging platform with user authentication, CRUD operations, and interactive commenting features.",
      image: blog,
      technologies: [
        "Tailwind CSS",
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
      ],
      codeUrl: "https://github.com/azhagu-akk/Blogs",
      liveUrl: "https://blogify5.netlify.app/",
    },
    {
      title: "Electronics Store",
      description:
        "Full-stack e-commerce application built with MERN stack featuring user authentication, payment integration, and admin dashboard.",
      image: electronics,
      technologies: [
        "Tailwind CSS",
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
      ],
      codeUrl: "https://github.com/azhagu-akk/Frontend-Electronics",
      liveUrl: "https://electronics01.netlify.app/",
    },

    {
      title: "Library Management System",
      description:
        "Library management system with user authentication, book cataloging, and borrowing features.",
      image: library,
      technologies: [
        "Tailwind CSS",
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
      ],
      codeUrl: "https://github.com/azhagu-akk/LMS-Frontend",
      liveUrl: "https://lms-front-nd.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          {" "}
          <span className="bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-lg overflow-hidden hover:border-gray-600 transition-all duration-300 shadow-lg"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-white text-xl font-semibold mb-4">
                  {project.title}
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-300 text-sm lg:text-base hidden md:block">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-transparent border border-gray-600 hover:bg-gray-800 text-white text-sm rounded-md transition-colors duration-200"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white text-sm rounded-md transition-all duration-200"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
