import React from "react";
import Image from "../assets/ProfilePic2.jpg";

const About = () => {
  return (
    <div name="about" className="w-full bg-gray-100">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-4/5 h-full ">
        <div className="flex justify-center">
          <p className="text-5xl font-bold inline text-center mb-4 border-b-4 border-gray-500 text-black">
            About Me
          </p>
        </div>
        <div className="max-w-screen-lg flex flex-col md:flex-row">
          <div className="hidden lg:flex lg:w-1/2 lg:justify-center lg:items-center">
            <div className="">
              <img
                src={Image}
                alt="My profile"
                className="mx-auto w-1/3 md:w-2/3 mb-4 p-1 bg-slate-700 border border-red-600 shadow-xl shadow-blue-400 rounded-full"
              />
            </div>
            
          </div>
          <div className="lg:w-1/2 flex items-center">
            <p className="text-md italic text-gray-700 tracking-wide">
              <span className="text-black text-4xl">I</span>
              <span className="text-black font-bold">'m</span> a{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text font-semibold">
                Computer Science and Engineering{" "}
              </span>
              graduate from IERT. I have a strong foundation in both frontend
              and backend development, with proficiency in{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text font-semibold">C++</span>,{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text font-semibold">JavaScript</span>,{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text font-semibold">React.js</span>,{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text font-semibold">Node.js</span>, and{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text font-semibold">MongoDB</span>. I have
              worked on projects like a{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text font-semibold">Photogram</span> app
              and a{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text font-semibold">Twitter clone</span>,
              and I have presented a research paper on a{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text font-semibold">
                blockchain-based Twitter DApp
              </span>
              . Additionally, I have solved over{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text font-bold">700</span> coding problems
              on platforms like{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text font-semibold">GeeksforGeeks</span>{" "}
              and <span className="bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text font-semibold">LeetCode</span>,
              showcasing my dedication to{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text font-semibold">
                full-stack development
              </span>{" "}
              and
              <span className="bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text font-semibold"> problem-solving</span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
