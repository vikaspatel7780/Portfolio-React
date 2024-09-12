import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-700">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-6 md:mb-0">
            <a
              href="https://vscoder-portfolio.netlify.app/"
              className="flex items-center text-2xl font-bold text-gray-100 hover:text-gray-200 transition-colors"
            >
              Vikas Patel
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
            <div>
              <h2 className="mb-4 text-base font-semibold text-gray-100 uppercase">
                About
              </h2>
              <ul className="text-gray-300">
                <li className="mb-2">
                  <a
                    href="#about"
                    className="hover:text-gray-200 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#projects"
                    className="hover:text-gray-200 transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#skills"
                    className="hover:text-gray-200 transition-colors"
                  >
                    Skills
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#coding-profile"
                    className="hover:text-gray-200 transition-colors"
                  >
                    Coding Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#education"
                    className="hover:text-gray-200 transition-colors"
                  >
                    Education
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-base font-semibold text-gray-100 uppercase">
                Follow me
              </h2>
              <ul className="text-gray-300 flex space-x-4">
                <li>
                  <a
                    href="https://github.com/vikaspatel7780"
                    className="hover:text-gray-200 transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub size={24} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/vikas-patel-86714722a/"
                    className="hover:text-gray-200 transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin size={24} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/vscoder7780"
                    className="hover:text-gray-200 transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitter size={24} />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:vikaspatel0609@gmail.com"
                    className="hover:text-gray-200 transition-colors"
                  >
                    <HiOutlineMail size={24} />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-base font-semibold text-gray-100 uppercase">
                Legal
              </h2>
              <ul className="text-gray-300">
                <li className="mb-2">
                  <a
                    href="#privacy-policy"
                    className="hover:text-gray-200 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#terms-conditions"
                    className="hover:text-gray-200 transition-colors"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
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
              className="text-gray-300 hover:text-gray-200 transition-colors"
            >
              {/* Example Icon: Replace with a real icon or SVG */}
              <BsFillPersonLinesFill size={24} />
              
            </a>
            {/* Add other social icons similarly */}
          </div>
        </div>
      </div>
    </footer>
  );
}
