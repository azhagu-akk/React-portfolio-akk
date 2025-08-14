import { Github, Linkedin, Mail } from "lucide-react";
import image from "../assets/1721374056420.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className=" flex items-center justify-center px-4 pt-24"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-56 h-56 mx-auto mb-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 p-1">
            <img
              src={image}
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Azhagu Karthikeyan B <br></br>
            <span className="bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent text-xl">
              MERN Stack Developer
            </span>
          </h1>
          <p className="text-sm md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Full Stack MERN Developer passionate about creating innovative web
            solutions with modern technologies and clean, efficient code.
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="https://github.com/azhagu-akk"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-md bg-transparent border border-gray-600 hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center"
            >
              <Github className="h-5 w-5 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/azhagu-karthikeyan-b-/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-md bg-transparent border border-gray-600 hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center"
            >
              <Linkedin className="h-5 w-5 text-white" />
            </a>
            <a
              href="mailto: azhagukarthikeyanb@gmail.com"
              className="w-12 h-12 rounded-md bg-transparent border border-gray-600 hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center"
            >
              <Mail className="h-5 w-5 text-white" />
            </a>
          </div>
          <a
            href="#projects"
            className="inline-flex items-center justify-center bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white px-8 py-3 text-lg rounded-md transition-all duration-200"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}
