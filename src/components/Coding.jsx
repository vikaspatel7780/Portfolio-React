import React from "react";
import codingTime from "../assets/portfolios/codingTime.jpg";
import leetcode from "../assets/portfolios/leetcode.png";
import gfg from "../assets/portfolios/gfg.png";
import codingNinja from "../assets/portfolios/codingNinja.jpg";
import codechef from "../assets/portfolios/codechef.jpg";
import hackerrank from "../assets/portfolios/hackerrank.png";

const Coding = () => {
  const coding = [
    {
      id: 1,
      src: leetcode,
      link: "https://leetcode.com/u/vscoder123/",
      title: "Leetcode",
      rating: "Max Rating : 1689",
      description: "Solved 450+ Problems.",
      style: "shadow-yellow-600",
    },
    {
      id: 2,
      src: gfg,
      link: "https://www.geeksforgeeks.org/user/vikaspatel7780/",
      title: "GeeksForGeeks",
      rating: "Coding Score : 2275",
      description: "Solved 450+ Problems.",
      style: "shadow-green-600",
    },
    {
      id: 3,
      src: codechef,
      link: "https://www.codechef.com/users/vikaspatel7780",
      title: "CodeChef",
      rating: "3 Star",
      description: "Max Rating : 1632",
      style: "shadow-gray-600",
    },
    {
      id: 4,
      src: codechef,
      link: "https://codeforces.com/profile/vscoder123",
      title: "Codeforces",
      rating: " Max Rating : 1046",
      description: "Solveed 70+ Problem",
      style: "shadow-gray-600",
    },
    {
      id: 5,
      src: hackerrank,
      link: "https://www.hackerrank.com/profile/Pulkitgaur9450",
      title: "Codeforces",
      rating: "6 star in Problem Solving",
      description: "5 star in C++",
      style: "shadow-purple-600 ",
    },
    {
      id: 6,
      src: codingNinja,
      link: "https://www.naukri.com/code360/profile/vscoder",
      title: "Coding Ninja",
      rating: "Max Rating : 1800",
      description: "Solved 100+ Problems",
      style: "shadow-orange-600",
    },
  ];
  return (
    <div name="coding profile" className="w-full relative bg-gray-900 py-12">
      <div className="w-full h-full absolute inset-0 z-0">
        <img
          src={codingTime}
          alt="Coding Time"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="flex flex-col w-full relative">
        {/* Content */}
        <div className="relative z-10">
          <div className="flex justify-center mb-8">
            <p className="text-5xl font-bold text-center border-b-4 border-gray-500 text-white inline-block py-2 px-4">
              Coding Profiles
            </p>
          </div>
          <div className="flex justify-center flex-wrap gap-6">
            {coding.map(({ id, src, title, rating, description, style, link }) => (
              <div
                key={id}
                className={`w-80 shadow-lg rounded-lg flex flex-col items-center hover:scale-105 transition-transform duration-300 p-4 ${style} bg-white `}
              >
                <img
                  src={src}
                  alt={title}
                  className="h-16 rounded-md shadow-md hover:scale-105 transition-transform duration-200 mb-4"
                />
                <div className="p-2 w-full text-center">
                  <h2 className="text-xl font-bold mb-2">{title}</h2>
                  <p className="text-md bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text mb-1">{rating}</p>
                  <p className="text-md bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text mb-4">{description}</p>
                </div>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  Link
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Coding;
