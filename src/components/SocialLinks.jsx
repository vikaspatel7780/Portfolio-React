import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import resume from "../assets/vscoder-resume.pdf";

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            name: 'LinkedIn',
            icon: <FaLinkedin size={30} />,
            href: 'https://www.linkedin.com/in/vikas-patel-86714722a/',
            style: 'rounded',
        },
        {
            id: 2,
            name: 'Github',
            icon: <FaGithub size={30} />,
            href: 'https://github.com/vikaspatel7780',
        },
        {
            id: 3,
            name: 'Mail',
            icon: <HiOutlineMail size={30} />,
            href: 'mailto:foo@gmail.com',
        },
        {
            id: 4,
            name: 'Resume',
            icon: <BsFillPersonLinesFill size={30} />,
            href: resume,
            download: true,
        },
        {
            id: 5,
            name: 'Twitter',
            icon: <FaTwitter size={30} />,
            href: 'https://x.com/vscoder7780',
        }
    ]

    return (
        <div className='flex flex-col items-center h-20 bg-slate-100'>
            <ul className='flex flex-row space-x-4'>
                {links.map(({ id, name, icon, href, style = '', download }) => (
                    <li 
                        key={id} 
                        className={`relative flex justify-center items-center w-16 h-16 bg-gray-500 hover:bg-gray-700 text-white rounded-full  group`}
                    >
                        <a
                            href={href}
                            className='flex justify-center items-center w-full h-full transition-shadow duration-300 ease-in-out'
                            target="_blank" // Open in a new tab
                            rel="noopener noreferrer" // Secure opening in new tab
                        >
                            {icon}
                        </a>

                        {/* Tooltip */}
                        <span 
                            className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 text-sm text-white bg-black px-2 py-1 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        >
                            {name}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SocialLinks
