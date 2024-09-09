import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi'
import logo from "../assets/portfolios/logo.png";

const Navbar = () => {
  const [nav, setnav] = useState(false);

  const links = [
    {
      id: 1,
      link: "about",
    },
    {
      id: 2,
      link: "projects",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "coding profile",
    },
    {
      id: 5,
      link: "education",
    },
  ];

  return (
    <div className="w-full h-20 px-4 bg-white shadow-lg rounded-b-lg sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-screen-lg mx-auto">
        {/* Name */}
        <div className="flex">
          <img
            className="h-16 rounded-full m-2"
            src={logo}
            alt="Logo"
          />
          <h1 className="flex text-2xl text-black items-end absolute translate-x-20 translate-y-6">
            scoder
          </h1>
        </div>

        {/* Links */}
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize text-black text-lg hover:scale-105 duration-200 hover:text-red-600"
            >
              <Link to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>

        <Link to="contact" smooth duration={500}><HiOutlineMail className="hidden md:flex cursor-pointer" size={30} /></Link>

        {/* Baricons */}
        <div
          onClick={() => setnav(!nav)}
          className="cursor-pointer pr-4 z-10 text-black md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-96 bg-white">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 font-bold cursor-pointer capitalize py-4 text-2xl"
              >
                <Link onClick={()=> setnav(!nav)} to={link} smooth duration={500}>{link}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
};

export default Navbar;
