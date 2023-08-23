import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import node from '../assets/node.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import java from '../assets/java.png'
import aspnet from '../assets/aspnet.png'
import sql from '../assets/SQL.png'
import vs from '../assets/vs.png'




export const Experience = () => {
    const tech = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'Css',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: node,
            title: 'Node-Js',
            style: 'shadow-green-500'
        },
        {
            id: 4,
            src: javascript,
            title: 'Javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 5,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: react,
            title: 'React',
            style: 'shadow-blue-700'
        },
        {
            id: 7,
            src: java,
            title: 'Java',
            style: 'shadow-red-500'
        },
        {
            id: 8,
            src: aspnet,
            title: 'Asp.net',
            style: 'shadow-pink-600'
        },
        {
            id: 9,
            src: sql,
            title: 'SQL',
            style: 'shadow-orange-700 py-6'
        },
        {
            id: 10,
            src: vs,
            title: 'Visual-Studio',
            style: 'shadow-purple-800 py-6'
        },
    ]
    return (
        <div name="Experience" className=' bg-gradient-to-b from-gray-900 to-black w-full h-full'>
            <div className=' max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className=' text-5xl font-bold border-b-4 border-gray-400 p-2 inline text-purple-600 font-myinfo1'>Experience ;</p>
                    <p className=' py-8 text-xl font-about font-bold'>These are some of the technologies I've worked On 🧑‍💻🖥️ : :</p>
                </div>

                <div className=' w-full h-full grid grid-cols-1 md:grid-cols-4 gap-8 text-center py-6 px-12 md:px-0 '>

                    {
                        tech.map(({ id, src, title, style }) => (
                            <div key={id} className={ `shadow-md hover:scale-105 duration-500 py-5 rounded-lg ${style}`}>
                                <img src={src} className='w-20 mx-auto' alt='img'></img>
                                <p className=' mt-4'>{title}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
