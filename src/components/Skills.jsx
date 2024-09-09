import React from "react";
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
import postman from "../assets/portfolios/postman.png";

const Skills = () => {
  const tecks = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
      level: 95,
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
      level: 90,
    },
    {
      id: 3,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
      level: 85,
    },
    {
      id: 4,
      src: react,
      title: "React Js",
      style: "shadow-blue-500",
      level: 85,
    },
    {
      id: 5,
      src: expressjs,
      title: "Express Js",
      style: "shadow-yellow-500",
      level: 70,
    },
    {
      id: 6,
      src: nodejs,
      title: "Node Js",
      style: "shadow-green-500",
      level: 80,
    },
    {
      id: 7,
      src: mongodb,
      title: "Mongo DB",
      style: "shadow-green-500",
      level: 80,
    },
    {
      id: 8,
      src: github,
      title: "Github",
      style: "shadow-gray-500",
      level: 75,
    },
    {
      id: 9,
      src: tailwindcss,
      title: "Tailwind CSS",
      style: "shadow-sky-500",
      level: 90,
    },
    {
      id: 10,
      src: cpp,
      title: "C++",
      style: "shadow-yellow-500",
      level: 95,
    },
    {
      id: 11,
      src: c,
      title: "C",
      style: "shadow-blue-500",
      level: 95,
    },
    {
      id: 12,
      src: python,
      title: "Python",
      style: "shadow-yellow-500",
      level: 70,
    },
    {
      id: 13,
      src: postman,
      title: "Postman",
      style: "shadow-yellow-500",
      level: 70,
    },
  ];

  return (
    <div name="skills" className="w-full bg-gray-100">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="flex justify-center">
          <p className="text-5xl font-bold border-b-4 border-gray-500 p-1 inline ">
            Skills
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-0">
          {tecks.map(({ id, title, src, style, level }) => (
            <div
              key={id}
              className={`relative group shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              {/* Skill Icon */}
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4 font-bold text-lg">{title}</p>

              {/* Skill Level (Hidden by default) */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {level}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
