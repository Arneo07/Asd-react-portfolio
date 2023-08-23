import React from 'react'
import Eshop from '../assets/portfolio/E-shop.png'
import Fshop from '../assets/portfolio/F-web.png'
import speed from '../assets/portfolio/Speed.png'
import TtoP from '../assets/portfolio/TtoP.png'
import inventory from '../assets/portfolio/inventory.png'
import reactWeather from '../assets/portfolio/reactWeather.jpg'
import pp from '../assets/portfolio/pp.png'
// import usestate from '../assets/portfolio/usestate.jpg'

export const Portf = () => {
    const port = [
        {
            id: 1,
            src: Eshop,
            href:'https://abhishop.netlify.app/index.html',
            info:"Static E-commerce Website "
        },
        {
            id: 2,
            src: Fshop,
            href:'https://aifleurshop.netlify.app/index.html',
            info:"Online Flower shop"
        },
        {
            id: 3,
            src: speed,
            href:'https://testyourtypingspeeed.netlify.app/', 
            info:"Online typing speed tester",
        },
        {
            id: 4,
            src: TtoP,
            href:'https://textsayspeech.netlify.app/',
            info:"Text to speech"
        },
        {
            id: 5,
            src: inventory,
            info:"Inventory management Web-App"

        },
        {
            id: 6,
            src: reactWeather,
            info:"Weather Info"
        },
        {
            id:7,
            src:pp,
            info:"My Personal Portfolio"

        }
    ]
    return (  
        <div name="Portfolio" className=' bg-gradient-to-b from-black to-gray-900 text-white w-full lg:h-full md:h-screen'>

            <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-cente w-full h-full'>
                <div className='pb-8'>
                    <p className='text-5xl font-bold inline border-b-4 border-gray-400 font-myinfo1 text-green-400'>Portfolio ;</p>
                    <p className=' py-8 text-3xl font-about font-bold'>Check out my Work below 👇 : :</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0' >
                {
                    port.map(({ id, src, href, info,style }) => (
                        <>
                            <p className=' pb-2 text-sm'> </p>  {/* The P is just added to make the pattern in the portfolio section nothing else*/}
                            <div key={id}  className=' shadow-md shadow-gray-600 rounded-lg'>

                            <p className=' py-4 text-center text-sm hover:text-green-400 duration-700' >{info} </p>

                                <img src={src} alt="Array Destructuring" className=' rounded-md duration-300 hover:scale-105' />
                                <div className='flex items-center justify-center'>
                                    <a href={href} target='_blank' className='w-1/2 px-6 py-3 m-4  hover:scale-105 hover:rounded-2xl hover:shadow-[4.0px_8.0px_8.0px_rgba(153,185,255,0.98)] duration-500 ' rel="noreferrer" >Demo</a>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                                </div>
                            </div>
                        </>    
                    ))
                }
                </div>
            </div><br/><br/><br/>
        </div>
    )
}
