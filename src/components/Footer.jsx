import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-700">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-8 md:mb-0">
            <a
              href="https://vscoder-portfolio.netlify.app/"
              className="text-3xl font-extrabold text-gray-100 hover:text-gray-300 transition-colors"
            >
              Vikas Patel
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
            <div>
              <h2 className="mb-4 text-lg font-semibold text-gray-100 uppercase">
                Quick Links
              </h2>
              <ul className="text-gray-400">
                <li className="mb-2">
                  <a
                    href="#about"
                    className="hover:text-gray-300 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#projects"
                    className="hover:text-gray-300 transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#skills"
                    className="hover:text-gray-300 transition-colors"
                  >
                    Skills
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#coding-profile"
                    className="hover:text-gray-300 transition-colors"
                  >
                    Coding Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#education"
                    className="hover:text-gray-300 transition-colors"
                  >
                    Education
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-lg font-semibold text-gray-100 uppercase">
                Follow Me
              </h2>
              <ul className="text-gray-400 flex space-x-4">
                <li>
                  <a
                    href="https://github.com/vikaspatel7780"
                    className="hover:text-gray-300 transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub size={28} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/vikas-patel-86714722a/"
                    className="hover:text-gray-300 transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin size={28} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/vscoder7780"
                    className="hover:text-gray-300 transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitter size={28} />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:vikaspatel0609@gmail.com"
                    className="hover:text-gray-300 transition-colors"
                  >
                    <HiOutlineMail size={28} />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-lg font-semibold text-gray-100 uppercase">
                Legal
              </h2>
              <ul className="text-gray-400">
                <li className="mb-2">
                  <a
                    href="#privacy-policy"
                    className="hover:text-gray-300 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#terms-conditions"
                    className="hover:text-gray-300 transition-colors"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="flex flex-col md:flex-row items-center justify-between">
          <span className="text-sm text-gray-500">
            © 2024{" "}
            <a
              href="https://vscoder-portfolio.netlify.app/"
              className="hover:underline text-gray-400"
            >
              Vikas Patel
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 md:mt-0 space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              {/* Example Icon: Replace with a real icon or SVG */}
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Z" />
              </svg>
            </a>
            {/* Add other social icons similarly */}
          </div>
        </div>
      </div>
    </footer>
  );
}
