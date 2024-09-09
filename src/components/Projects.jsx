import React from "react";
import BlogWebsite from "../assets/BlogWebsite.png";
import TwitterClone from "../assets/TwitterClone.png";
import Photogram from "../assets/Photogram.png";

import html from "../assets/portfolios/html.png";
import css from "../assets/portfolios/css.png";
import react from "../assets/portfolios/react.png";
import javascript from "../assets/portfolios/java.jpg";
import nodejs from "../assets/portfolios/nodejs.png";
import expressjs from "../assets/portfolios/expressjs.png";
import tailwindcss from "../assets/portfolios/tailwindcss.png";
import github from "../assets/portfolios/github.png";
import mongodb from "../assets/portfolios/mongodb.png";
import cpp from "../assets/portfolios/cpp.png";
import c from "../assets/portfolios/c.png";
import python from "../assets/portfolios/python.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: Photogram,
      title: "Photogram",
      liveLink: "https://silverspoons.onrender.com/",
      githubLink: "https://github.com/",
    },
    {
      id: 2,
      src: TwitterClone,
      title: "Twitter Clone",
      liveLink: "https://your-portfolio-link.com/",
      githubLink: "https://github.com/",
    },
    {
      id: 3,
      src: BlogWebsite,
      title: "Blog Website",
      liveLink: "https://another-project-link.com/",
      githubLink: "https://github.com/",
    },
  ];

  return (
    <div name="projects" className="bg-gray-50 py-20 relative">
      <div className=" max-w-screen-xl mx-auto flex flex-col justify-center w-full h-full relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-5xl font-bold inline border-b-4 p-2 border-gray-500 text-black">
            Projects
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="flex flex-wrap justify-center gap-16 ">
          {projects.map(({ id, src, title, liveLink, githubLink }) => (
            <div
              key={id}
              className="relative w-96  rounded-lg shadow-lg transform transition duration-300 hover:scale-105 lg:hover:scale-125 hover:shadow-2xl bg-gradient-to-r from-white to-blue-400"
            >
              {/* Image with hover effect */}
              <div
                className="h-48 bg-cover"
                style={{ backgroundImage: `url(${src})` }}
              ></div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {title}
                </h3>

                <div className="flex justify-between items-center">
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-gradient-to-r from-gray-400 to-gray-600 hover:from-gray-500 hover:to-gray-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-transform hover:-translate-y-1"
                  >
                    GitHub
                  </a>
                  {/* Technology Icons */}
                  <div className=" flex opacity-65 justify-end gap-4 flex-wrap">
                    <img
                      src={javascript}
                      alt="HTML Icon"
                      className="w-8 h-8 hover:rotate-12"
                    />
                    <img
                      src={react}
                      alt="CSS Icon"
                      className="w-8 h-8 hover:rotate-12"
                    />
                    <img
                      src={nodejs}
                      alt="JS Icon"
                      className="w-8 h-8 hover:rotate-12"
                    />
                    <img
                      src={mongodb}
                      alt="JS Icon"
                      className="w-8 h-8 hover:rotate-12"
                    />
                    <img
                      src={tailwindcss}
                      alt="JS Icon"
                      className="w-8 h-8 bg-white hover:rotate-12"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-16 cursor-pointer">
          <div className="flex items-center justify-center bg-gradient-to-r from-blue-400 to-red-600 hover:from-gray-500 hover:to-gray-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-transform hover:-translate-y-1">
            More..
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
