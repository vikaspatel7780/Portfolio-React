import React from "react";
import ProfilePic from "../assets/ProfilePic.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div name="home" className="w-full bg-gray-100">
      <div className="py-16">
        <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center h-full gap-24 px-6 md:flex-row md:px-12">
          {/* Text Section */}
          <div className="flex flex-col justify-center h-full lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Hi there!
              <span className="block text-blue-600">I'm Vikas Patel</span>
              <span className="block  text-red-600">
                Full Stack Web Developer
              </span>
            </h1>
            <p className="text-md italic text-gray-700 tracking-wide mt-5">
  <span className="text-black text-4xl">I</span>
  <span className="text-black font-bold">'m</span> excited to enhance my skills by working on challenging projects using{" "}
  <span className="bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text font-semibold">React JS</span>,{" "}
  <span className="bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text font-semibold">Tailwind CSS</span>,{" "}
  <span className="bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text font-semibold">Node.js</span>,{" "}
  <span className="bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text font-semibold">Express.js</span>, and{" "}
  <span className="bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text font-semibold">MongoDB</span>. As a passionate and{" "}
  <span className="bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text font-semibold">competitive coder</span>,{" "}
  I enjoy turning ideas into interactive and user-friendly experiences.
</p>

            <div>
              <a
                href="/resume.pdf"
                className="group text-white w-fit px-6 py-3 my-4 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer font-bold group-hover:bg-gray-700 duration-75"
                download={true}
              >
                View Resume
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:w-1/2 mb-8 lg:mb-0">
            <img
              src={ProfilePic}
              alt="My profile"
              className="p-6 filter grayscale transition-all duration-3000 h-[250px] w-auto sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[400px] hero_photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
