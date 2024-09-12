import React from "react";
import iertlogo from "../assets/portfolios/iertlogo.jpg";
import spvpnb from "../assets/portfolios/vicLogo.png";
import codingTime from "../assets/portfolios/education.jpg";


const Education = () => {
  const education = [
    {
      id: 1,
      src: iertlogo,
      college: "Institute of Engineering and Rural Technology, Prayagraj",
      course:
        "Bachelor of Technology - BTech, CSE",
      time: "Nov 2020 - Jul 2024",
      date: "Grade: 7.51 CGPA",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: spvpnb,
      college: "Vikas Intermediate College Parmanandpur, Varanasi",
      course:
        "Higher Secondary, UP Borad",
      time: "Apr 2016 - Mar 2017",
      date: "Grade: 80.20%",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: spvpnb,
      college: "Vikas Intermediate College Parmanandpur, Varanasi",
      course:
        "High School, UP Borad",
      time: "Apr 2018 - Mar 2019",
      date: "Grade: 77%",
      style: "shadow-yellow-500",
    },
  ];

  return (
    <div name="education" className="py-12">
      <div className="p-12 flex flex-col justify-center">
        {/* Title */}
        <div className="flex justify-center mb-8">
          <p className="text-5xl font-bold text-black border-b-4 border-gray-500 p-2">
            Education
          </p>
        </div>
  
        {/* Education Items */}
        <div className="flex flex-wrap justify-center gap-8">
          {education.map(({ id, src, college, course, time, date }) => (
            <div
              key={id}
              className="shadow-lg shadow-slate-500 hover:scale-105 transition-transform duration-300 py-4 rounded-lg flex flex-col items-center bg-white border-2 border-stone-200"
            >
              <img
                src={src}
                alt={college}
                className="h-32 rounded-md shadow-md "
              />
              <div className="text-center">
                <h2 className="text-xl font-bold mb-1 text-black pl-4 pr-4 bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text">{college}</h2>
                <p className="text-md text-gray-700 bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text">{course}</p>
                <p className="text-sm text-gray-500 bg-gradient-to-r from-slate-600 to-blue-500 text-transparent bg-clip-text">{time}</p>
                <p className="text-md italic text-gray-500 bg-gradient-to-r from-green-600 to-blue-500 text-transparent bg-clip-text">{date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
  
};

export default Education;
