import React from 'react'
import myimg from '../assets/goa-img.png'
import { FaCircleArrowRight } from 'react-icons/fa6'
import { Link } from 'react-scroll'

export const Home = () => {
    return (

        <div name="Home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>

            <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row " >
                <div className=' flex flex-col justify-center py-20 h-4 mr-30 mt-10'>
                    <h2 className=' font-myinfo1 text-4xl sm:text-7xl text-white mt-16'>
                        I'm a full stack Developer
                    </h2>
                    <p className=' text-cyan-100 py-4 '>
                        "I possess substantial experience in website development, and I am deeply passionate about my work. Currently,
                        I am enthusiastically exploring and mastering technologies like React, Tailwind CSS, Node.js,
                        and MongoDB to further enhance my skills and build cutting-edge projects. I am always eager to learn and embrace new challenges,
                        as well as connect with diverse individuals who share my enthusiasm for technology and innovation."
                    </p>
                    <div >
                        <Link to='Portfolio' className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-600 to-green-400 hover:shadow-[4.0px_8.0px_8.0px_rgba(255,255,255,0.68)] hover:scale-90 duration-300 cursor-pointer md: ml-1 '>
                            Work
                            <span className='group-hover:rotate-90 duration-500'>
                                <FaCircleArrowRight size={30} className='ml-2' />
                            </span>
                        </Link>
                    </div>
                </div>

                <div style={{ marginLeft: "70px" }}>
                    <img src={myimg} alt='my-img'
                        className=' h-auto max-w-lg rounded-3xl mx-auto w-2/3 md:w-full ml-1 mt-40'></img>
                </div>

            </div>
        </div>

    )
}
