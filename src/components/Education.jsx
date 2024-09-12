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
    <div name="education" className="w-full py-12">
      <div className="max-w-screen-xl mx-auto p-12 flex flex-col justify-center w-full h-full relative">
        {/* Title */}
        <div className="flex justify-center mb-8">
          <p className="text-5xl font-bold text-black border-b-4 border-gray-500 p-2">
            Education
          </p>
        </div>
        {/* Education Items */}
        <div className=" flex gap-10 flex-wrap w-1/3 flex-row h-auto">
          {education.map(({ id, src, college, course, time, date, style }) => (
            <div
              key={id}
              className={`shadow-lg hover:scale-105 transition-transform duration-300 py-4 rounded-lg flex flex-col items-center bg-white ${style}`}
            >
              <img src={src} alt={college} className="h-24 w-24 ml-4 rounded-md shadow-md" />
              <div className="ml-6">
                <h2 className="text-xl font-bold mb-1 bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text">{college}</h2>
                <p className="text-md bg-gradient-to-r from-blue-700 to-black text-transparent bg-clip-text">{course}</p>
                <p className="text-sm bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text">{time}</p>
                <p className="text-md italic bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text">{date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default Education;
