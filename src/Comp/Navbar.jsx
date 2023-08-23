import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link }  from "react-scroll";


export default function Navbar() {
    const [nav, setNav] = useState(false);
    const mylinks = [
        {
            id: 1,
            link: "Home",
        },
        {
            id: 2,
            link: "About",
        },
        {
            id: 3,
            link: "Portfolio",
        },
        {
            id: 4,
            link: "Experience",
        },
        {
            id: 5,
            link: "Contact",
        },
    ];
    return (
        <>
            <div className=" z-20 flex justify-between items-center px-4 w-full h-20  text-white fixed bg-black">
                <div>
                    <h1 className="text-3xl font-mysign ml-2"> Abhishek </h1>
                </div>

                <ul className=" hidden md:flex">
                    
                    {mylinks.map(({ id, link }) => (
                        <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-600 hover:scale-125 duration-100">
                        <Link to={link} smooth duration={1000}>{link} </Link> 
                        </li>
                    ))}
                </ul>

                <div
                    onClick={() => setNav(!nav)}
                    className=" cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
                    {nav ? <FaTimes size={35} /> : <FaBars size={35} />}
                </div>

                {nav && (
                        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                    {mylinks.map(({ id, link }) => (
                        <li
                           
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-3xl hover:scale-125 duration-200">

                            <Link onClick={()=>setNav(!nav)} to={link} smooth duration={1000}> {link} </Link> 

                        </li>
                    ))}
                </ul>)} 

               
            </div>
        </>
    );
}
